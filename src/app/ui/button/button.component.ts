import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import './button.style.scss';

@Component({
  template: `
    <button class="button"><slot /></button>
  `,
})
export class DcButton extends Vue {
}
