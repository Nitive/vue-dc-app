import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import debounce from 'lodash/debounce';
import memoize from 'memoizee';
import { Store, types } from '../../store/store';
import { DcAsyncTypeahead } from '../../ui/async-typeahead/async-typeahead.component';
import { DcButton } from '../../ui/button/button.component';
import { DcBox } from '../../ui/box/box.component';
import { YmapsApi } from '../../ymaps/ymaps-api';
import './geosearch.style.scss';

const DEBOUNCE_TIME = 1380;

@Component({
  template: `
    <form action="/map" @submit.prevent="submit" class="geosearch">
      <dc-async-typeahead
        autofocus
        v-model="search"
        :requestSuggestions="test"
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
  public store: Store = this.$store;

  public mounted() {
    this.ymapsApi = new YmapsApi();
    this.ymapsApi.preloadYmaps(['suggest']);
  }

  public requestSuggestions(search: string) {
    return this.ymapsApi.loadYmaps(['suggest'])
      .then(ymaps => ymaps.suggest(search))
      .then(suggestions => suggestions.map(s => s.displayName));
  }

  // tslint:disable-next-line:member-ordering
  public debouncedRequest = debounce(
    memoize(this.requestSuggestions, { max: 1, normalizer: ([str]: [string]) => str.toLowerCase() }),
    DEBOUNCE_TIME,
  );

  public test(search: string) {
    if (search.length <= 3) {
      return Promise.resolve([]);
    }

    this.store.commit(types.startLoading);

    return (this.debouncedRequest(search) || Promise.resolve([]))
      .then(suggestion => {
        this.store.commit(types.stopLoading);
        return suggestion;
      })
      .catch(console.error);
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
      })
      .catch(console.error);
  }
}
