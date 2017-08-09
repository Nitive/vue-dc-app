import { Component, Prop, Watch, Vue, Provide } from 'vue-property-decorator';
import { DcTypeahead } from '../typeahead/typeahead.component';
import debounce from 'lodash/debounce';
import memoize from 'memoizee';

@Component({
  template: `
    <dc-typeahead
      :value="value"
      @input="value => $emit('input', value)"
      @select="select"
      :suggestions="suggestions"
    />
  `,
  components: {
    DcTypeahead,
  },
})
export class DcAsyncTypeahead extends Vue {
  @Prop({ type: String, required: true })
  public value: string;

  @Prop({ type: Function, required: true })
  public requestSuggestions: (search: string) => Promise<string[]>;

  @Prop({ type: Number, default: 0 })
  public debounceTime: number;

  @Provide()
  public suggestions: string[] = [];

  @Watch('value')
  public onValueChange(value: string) {
    this.debouncedRequest(value);
  }

  public request(value: string) {
    this.requestSuggestions(value)
      .then(result => {
        this.suggestions = result;
      })
      .catch(() => {
        this.suggestions = [];
      });
  }

  // tslint:disable-next-line:member-ordering
  public debouncedRequest = debounce(
    memoize(this.request, { max: 1, normalizer: ([str]: [string]) => str.toLowerCase() }),
    this.debounceTime,
  );

  public select(suggestion: string) {
    this.$emit('select', suggestion);
  }
}
