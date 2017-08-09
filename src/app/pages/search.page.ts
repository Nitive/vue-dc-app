import Vue from 'vue';
import Component from 'vue-class-component';
import { DcGeoSearch } from '../components/geosearch.component';
import { DcBox } from '../ui/box/box.component';

@Component({
  template: `
    <dc-box :all="20">
      <dc-geo-search />
    </dc-box>
  `,
  components: {
    DcGeoSearch,
    DcBox,
  },
})
export class SearchPage extends Vue {
}
