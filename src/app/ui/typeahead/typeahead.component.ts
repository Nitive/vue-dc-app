import Vue from 'vue';
import Component from 'vue-class-component';
import './typeahead.style.scss';

@Component<Vue>({
  template: `
    <div class="typeahead">
      <slot name="input">
        <input
          class="typeahead__input"
          type="text"
          :autofocus="autofocus"
          :value="value"
          @input="$emit('input', $event.target.value)"
          @focus="popupVisible = true"
          @blur="handleBlur"
        />
      </slot>
      <ul v-if="popupVisible" class="typeahead__popup">
        <slot name="item">
          <li
            class="typeahead__item"
            v-for="item of filteredItems"
            @click="$emit('input', item)"
          >{{ item }}</li>
        </slot>
      </ul>
    </div>
  `,
  props: {
    value: {
      type: String,
      required: true,
    },
    suggestions: {
      type: Array,
      required: true,
    },
    autofocus: {
      type: Boolean,
    },
  },
})
export class DcTypeahead extends Vue {
  // props
  public value: string;
  public suggestions: string[];
  public autofocus: boolean;

  // state
  public popupVisible = false;

  public get filteredItems() {
    if (!this.value) {
      return [];
    }
    return this.suggestions.filter(suggestion => suggestion.startsWith(this.value));
  }

  public handleBlur() {
    setTimeout(() => {
      this.popupVisible = false;
    }, 100);
  }
}
