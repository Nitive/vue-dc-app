import Vue from 'vue';
import Component from 'vue-class-component';

function px(value: number | undefined) {
  return value
    ? `${value}px`
    : undefined;
}

@Component({
  template: `
    <div :style="style"><slot /></div>
  `,
  props: {
    all: Number,
    x: Number,
    y: Number,
    top: Number,
    right: Number,
    bottom: Number,
    left: Number,
  },
})
export class DcBox extends Vue {
  public all: number;
  public x: number;
  public y: number;
  public top: number;
  public right: number;
  public bottom: number;
  public left: number;

  public get style() {
    return {
      marginTop: px(this.top || this.y || this.all),
      marginRight: px(this.right || this.x || this.all),
      marginBottom: px(this.bottom || this.y || this.all),
      marginLeft: px(this.left || this.x || this.all),
    };
  }
}
