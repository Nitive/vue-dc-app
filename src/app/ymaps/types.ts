export type YmapsCoords = [number, number];
export type Vector = [YmapsCoords, YmapsCoords];
export type YmapsBoundedBox = Vector;

export interface YmapsSuggestOptions {
  boundedBy?: YmapsBoundedBox;
  strictBounds?: boolean;
}

export interface YmapsSuggestion {
  displayName: string;
  hl: Array<[number, number]>;
  type: string;
  value: string;
}

export interface MapOptions {
  center: YmapsCoords;
  zoom: number;
}

export interface Map {
  geoObjects: GeoObjects;
}

export interface Geometry {
  getCoordinates(): YmapsCoords;
}

export interface GeoObject {
  geometry: Geometry;
}

export interface PlacemarkOptions {
  hintContent: string;
}

export interface Placemark {
}

export interface GeoObjects {
  get(index: number): GeoObject;
  add(placemark: Placemark): void;
}

export interface Ymaps {
  Map: new(id: string, options: MapOptions) => Map;
  Placemark: new(center: YmapsCoords, placemarkOptions: PlacemarkOptions) => Placemark;
  ready(cb: () => void): void;
  load(modules: string[], cb: (ymaps: Ymaps) => void, errback: (err: Error) => void): void;
  suggest(query: string, options?: YmapsSuggestOptions): Promise<YmapsSuggestion[]>;
  geocode(query: string): Promise<{ geoObjects: GeoObjects }>;
}
