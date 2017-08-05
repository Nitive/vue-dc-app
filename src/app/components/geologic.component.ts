import * as Vue from 'vue';
import * as Vuex from 'vuex';
import Component from 'vue-class-component';

@Component({
  template: `
    <div>
      <h1>geologic</h1>
      <input type="text" />
      <button disabled>я здесь</button>
    </div>
  `,
})
export class GeoLogicComponent extends Vue {
}
