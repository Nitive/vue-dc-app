import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import './title.style.scss';

@Component({
  template: `
    <h1 class="title"><slot /></h1>
  `,
})
export class DcTitle extends Vue {
}
