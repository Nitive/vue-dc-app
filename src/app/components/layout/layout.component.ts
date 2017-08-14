import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Store } from '../../store/store';
import { DcTitle } from '../../ui/title/title.component';
import { DcBox } from '../../ui/box/box.component';
import { DcLoader } from '../../ui/loader/loader.component';
import './layout.style.scss';

@Component({
  template: `
    <div>
      <dc-box :x="20">
        <router-link class="layout__title" to="{ name: 'search' }">
          <dc-title>Vue map search</dc-title>
        </router-link>
        <dc-loader v-if="loading" />
      </dc-box>
      <slot />
    </div>
  `,
  components: {
    DcLoader,
    DcTitle,
    DcBox,
  },
})
export class DcLayout extends Vue {
  public store: Store = this.$store;
  public get loading() {
    return this.store.state.loading;
  }
}
