import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { DcLayout } from '../components/layout/layout.component';

@Component({
  template: `
    <dc-layout>
      <router-view />
    </dc-layout>
  `,
  components: {
    DcLayout,
  },
})
export class DcLayoutRoute extends Vue {
}
