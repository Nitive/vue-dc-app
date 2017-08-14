import { Component, Prop, Vue, Provide } from 'vue-property-decorator';
import { DcTypeahead } from '../typeahead/typeahead.component';

@Component({
  template: `
    <dc-typeahead
      :value="value"
      @input="input"
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

  @Provide()
  public suggestions: string[] = [];

  public input(value: string) {
    this.$emit('input', value);

    this.requestSuggestions(value)
      .then(result => {
        this.suggestions = result;
      })
      .catch(() => {
        this.suggestions = [];
      });
  }

  public select(suggestion: string) {
    this.$emit('select', suggestion);
  }
}
