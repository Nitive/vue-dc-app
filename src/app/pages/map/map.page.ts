import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { DcMap } from '../../ui/map/map.component';
import { Map, Ymaps, YmapsCoords } from '../../ymaps/types';
import './map.style.scss';

@Component({
  template: `
    <dc-map
      :center="mapCenter"
      class="map-page__map-container"
      map-id="main-map"
      @init="mapInit"
    />
  `,
  components: {
    DcMap,
  },
})
export class DcMapPage extends Vue {
  @Prop({ type: Number, required: true })
  public lat: number;

  @Prop({ type: Number, required: true })
  public lon: number;

  @Prop({ type: String, required: true })
  public address: string;

  public get mapCenter(): YmapsCoords {
    return [this.lat, this.lon];
  }

  public mapInit({ ymaps, map }: { ymaps: Ymaps, map: Map }) {
    const placemark = new ymaps.Placemark(this.mapCenter, { hintContent: this.address });
    map.geoObjects.add(placemark);
  }
}
