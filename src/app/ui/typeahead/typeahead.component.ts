import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import './typeahead.style.scss';

@Component({
  template: `
    <div class="typeahead">
      <slot name="input">
        <input
          class="typeahead__input"
          type="text"
          :autofocus="autofocus"
          :value="value"
          @input="$emit('input', $event.target.value)"
          @focus="suggestionsVisible = true"
          @blur="handleBlur"
        />
      </slot>
      <ul v-if="suggestionsVisible && suggestions.length" class="typeahead__suggestions">
        <slot name="suggestion">
          <li
            class="typeahead__suggestion"
            v-for="suggestion of suggestions"
            @click="select(suggestion)"
          >{{ suggestion }}</li>
        </slot>
      </ul>
    </div>
  `,
})
export class DcTypeahead extends Vue {
  @Prop({ type: String, required: true })
  public value: string;
  @Prop({ type: Array, required: true })
  public suggestions: string[];
  @Prop(Boolean)
  public autofocus: boolean;

  public suggestionsVisible = false;

  public handleBlur() {
    setTimeout(() => {
      this.suggestionsVisible = false;
    }, 200);
  }

  public select(suggestion: string) {
    this.$emit('input', suggestion);
    this.$emit('select', suggestion);
  }
}
