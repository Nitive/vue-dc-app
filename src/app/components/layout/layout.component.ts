import Vue from 'vue';
import Component from 'vue-class-component';
import { DcTitle } from '../../ui/title/title.component';
import { DcBox } from '../../ui/box/box.component';

@Component({
  template: `
    <div>
      <dc-box :x="20">
        <dc-title>Vue map search</dc-title>
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
