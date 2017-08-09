import Vue from 'vue';
import Component from 'vue-class-component';
import './button.style.scss';

@Component({
  template: `
    <button class="button"><slot /></button>
  `,
})
export class DcButton extends Vue {
}
