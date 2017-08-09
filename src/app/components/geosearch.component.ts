import Vue from 'vue';
import Component from 'vue-class-component';
import { DcTypeahead } from '../ui/typeahead/typeahead.component';
import { DcButton } from '../ui/button/button.component';
import { DcBox } from '../ui/box/box.component';
import './geosearch.style.scss';

interface GeoSearchState {
  geoItems: string[];
}

@Component({
  template: `
    <form action="/map" @submit.prevent="submit" class="geosearch">
      <dc-typeahead autofocus v-model="search" :suggestions="geoItems" />
      <dc-box :left="10">
        <dc-button type="submit" :disabled="!search">Показать на карте</dc-button>
      </dc-box>
    </form>
  `,
  components: {
    DcTypeahead,
    DcButton,
    DcBox,
  },
})
export class DcGeoSearch extends Vue {
  public search = 'o';

  public data(): GeoSearchState {
    return {
      geoItems: ['one', 'one1', 'two'],
    };
  }

  public submit() {
    this.$router.push({ name: 'map' });
  }
}
