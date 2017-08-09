import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { YmapsCoords } from '../../ymaps/types';

@Component({
  template: `
    <div :id="mapId" />
  `,
})
export class DcMap extends Vue {
  @Prop({ type: String, required: true })
  public mapId: string;

  @Prop({ type: Array, default: [55.76, 37.64] })
  public center: YmapsCoords;

  @Prop({ type: Number, default: 7 })
  public zoom: number;

  public async mounted() {
    const { YmapsApi } = await import('../../ymaps/ymaps-api');
    const ymapsApi = new YmapsApi();
    const ymaps = await ymapsApi.loadYmaps(['Map']);
    const map = new ymaps.Map(this.mapId, { center: this.center, zoom: this.zoom });

    this.$emit('init', { map, ymaps });
  }
}
