import Vue from 'vue';
import Component from 'vue-class-component';
import { Typeahead } from './typeahead/typeahead.component';

interface GeoLogicState {
  geoItems: string[];
}

@Component({
  template: `
    <form>
      <h1>geologic</h1>
      <typeahead autofocus :style="{ width: '500px' }" v-model="search" :values="geoItems" />
      <button disabled>я здесь</button>
    </form>
  `,
  components: {
    typeahead: Typeahead,
  },
})
export class GeoLogicComponent extends Vue {
  public search = '';

  public data(): GeoLogicState {
    return {
      geoItems: ['one', 'one1', 'two'],
    };
  }
}
