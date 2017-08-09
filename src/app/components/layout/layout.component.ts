import Vue from 'vue';
import Component from 'vue-class-component';
import { DcTitle } from '../../ui/title/title.component';
import { DcBox } from '../../ui/box/box.component';

@Component({
  template: `
    <div>
      <dc-box :x="20">
        <router-link to="{ name: 'search' }">
          <dc-title>Vue map search</dc-title>
        </router-link>
      </dc-box>
      <slot />
    </div>
  `,
  components: {
    DcTitle,
    DcBox,
  },
})
export class DcLayout extends Vue {
}
