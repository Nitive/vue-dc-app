import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { DcAsyncTypeahead } from '../../ui/async-typeahead/async-typeahead.component';
import { DcButton } from '../../ui/button/button.component';
import { DcBox } from '../../ui/box/box.component';
import './geosearch.style.scss';
import { YmapsApi } from '../../ymaps/ymaps-api';

const DEBOUNCE_TIME = 1380;

@Component({
  template: `
    <form action="/map" @submit.prevent="submit" class="geosearch">
      <dc-async-typeahead
        autofocus
        v-model="search"
        :debounce-time="${DEBOUNCE_TIME}"
        :requestSuggestions="requestSuggestions"
        @select="select"
      />
      <dc-box :left="10">
        <dc-button type="submit" :disabled="!selected">Показать на карте</dc-button>
      </dc-box>
    </form>
  `,
  components: {
    DcAsyncTypeahead,
    DcButton,
    DcBox,
  },
})
export class DcGeoSearch extends Vue {
  public search = '';
  public selected = false;

  public ymapsApi: YmapsApi;

  public mounted() {
    this.ymapsApi = new YmapsApi();
    this.ymapsApi.preloadYmaps(['suggest']);
  }

  public requestSuggestions(search: string) {
    if (search.length <= 3) {
      return Promise.resolve([]);
    }

    return this.ymapsApi.loadYmaps(['suggest'])
      .then(ymaps => ymaps.suggest(search))
      .then(suggestions => suggestions.map(s => s.displayName));
  }

  public select() {
    this.selected = true;
  }

  public submit() {
    this.ymapsApi.loadYmaps(['geocode'])
      .then(ymaps => {
        return ymaps.geocode(this.search);
      })
      .then(res => {
        return res.geoObjects.get(0).geometry.getCoordinates();
      })
      .then(coords => {
        const lat = String(coords[0]);
        const lon = String(coords[1]);
        this.$router.push({ name: 'map', query: { lat, lon, name: this.search } });
      });
  }
}
