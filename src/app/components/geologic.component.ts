import Vue from 'vue';
import Component from 'vue-class-component';
import { Typeahead } from '../ui/typeahead/typeahead.component';

interface GeoLogicState {
  geoItems: string[];
}

@Component({
  template: `
    <form>
      <h1>geologic</h1>
      <typeahead autofocus :style="{ width: '500px' }" v-model="search" :suggestions="geoItems" />
      <button disabled>я здесь</button>
    </form>
  `,
  components: {
    Typeahead,
  },
})
export class GeoLogicComponent extends Vue {
  public search = 'o';

  public data(): GeoLogicState {
    return {
      geoItems: ['one', 'one1', 'two'],
    };
  }
}
