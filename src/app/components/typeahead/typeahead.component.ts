import * as Vue from 'vue';
import Component from 'vue-class-component';
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
    value: String,
    values: {
      type: Array,
      required: true,
    },
    autofocus: {
      type: Boolean,
    },
  },
})
export class Typeahead extends Vue {
  // props
  public value: string;
  public values: string[];
  public autofocus: boolean;

  // state
  public popupVisible = false;

  public get filteredItems() {
    if (!this.value) {
      return [];
    }
    return this.values.filter(item => item.startsWith(this.value));
  }

  public handleBlur() {
    setTimeout(() => {
      this.popupVisible = false;
    }, 100);
  }
}
