import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  template: `
    <div>
      <nav>
        <router-link :to="{ name: 'search' }">/search</router-link>
        <router-link :to="{ name: 'map' }">/map</router-link>
      </nav>
      <router-view />
    </div>
  `,
})
export class LayoutRoute extends Vue {
}
