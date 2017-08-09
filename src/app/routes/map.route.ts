import { MapPage } from '../pages/map/map.page';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  template: `
    <map-page :lat="lat" :lon="lon" :address="address" />
  `,
  components: {
    MapPage,
  },
})
export class MapRoute extends Vue {
  public get lat() {
    return Number(this.$route.query.lat);
  }

  public get lon() {
    return Number(this.$route.query.lon);
  }

  public get address() {
    return this.$route.params.displayName;
  }
}
