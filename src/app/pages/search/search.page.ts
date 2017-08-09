import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { DcGeoSearch } from '../../components/geosearch/geosearch.component';
import { DcBox } from '../../ui/box/box.component';

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
export class DcSearchPage extends Vue {
}
