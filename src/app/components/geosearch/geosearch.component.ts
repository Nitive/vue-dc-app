import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import debounce from 'debounce-promise';
import memoize from 'memoizee';
import { Store, types } from '../../store/store';
import { DcAsyncTypeahead } from '../../ui/async-typeahead/async-typeahead.component';
import { DcButton } from '../../ui/button/button.component';
import { DcBox } from '../../ui/box/box.component';
import './geosearch.style.scss';

const DEBOUNCE_TIME = 1380;

@Component({
  template: `
    <form action="/map" @submit.prevent="submit" class="geosearch">
      <dc-async-typeahead
        autofocus
        :value="search"
        :requestSuggestions="requestSuggestions"
        @input="input"
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
  public store: Store = this.$store;

  public mounted() {
    this.$ymaps.preloadYmaps(['suggest']);
  }

  public requestSuggestions(search: string) {
    if (search.length <= 3) {
      return Promise.resolve([]);
    }

    this.store.commit(types.startLoading);

    return this.debouncedRequest(search)
      .then(suggestions => {
        this.store.commit(types.stopLoading);
        return suggestions;
      })
      .catch(console.error);
  }

  public input(value: string) {
    this.search = value;
    this.selected = false;
  }

  public select(value: string) {
    this.search = value;
    this.selected = true;
  }

  public submit() {
    this.$ymaps.loadYmaps(['geocode'])
      .then(ymaps => ymaps.geocode(this.search))
      .then(res => res.geoObjects.get(0).geometry.getCoordinates())
      .then(coords => {
        const lat = coords[0];
        const lon = coords[1];
        const locationData = { lat, lon, name: this.search };
        const query = { lat: String(locationData.lat), lon: String(locationData.lon), name: locationData.name };

        this.store.commit(types.setLastSearchedAddress, locationData);
        this.$router.push({ name: 'map', query });
      })
      .catch(console.error);
  }

  // tslint:disable-next-line:member-ordering
  private debouncedRequest = debounce(
    memoize(this.getSuggestions, { max: 1, normalizer: ([str]: [string]) => str.toLowerCase() }),
    DEBOUNCE_TIME,
  );

  private getSuggestions(search: string) {
    return this.$ymaps.loadYmaps(['suggest'])
      .then(ymaps => ymaps.suggest(search))
      .then(suggestions => suggestions.map(s => s.displayName));
  }
}
