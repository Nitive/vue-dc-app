import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import './loader.style.scss';

@Component({
  template: `
    <span class="dc-loader">Loading...</span>
  `,
})
export class DcLoader extends Vue {
}
