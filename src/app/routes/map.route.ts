import { DcMapPage } from '../pages/map/map.page';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  template: `
    <dc-map-page :lat="lat" :lon="lon" :address="address" />
  `,
  components: {
    DcMapPage,
  },
})
export class DcMapRoute extends Vue {
  public get lat() {
    return Number(this.$route.query.lat);
  }

  public get lon() {
    return Number(this.$route.query.lon);
  }

  public get address() {
    return this.$route.query.name;
  }

  public created() {
    if (!this.lat || !this.lon || !this.address) {
      this.$router.replace({ path: '/' });
    }
  }
}
