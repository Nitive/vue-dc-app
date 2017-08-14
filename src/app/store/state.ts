export interface MapLocation {
  name: string;
  lat: number;
  lon: number;
}

export interface AppState {
  loading: boolean;
  lastSearchedLocation?: MapLocation;
}

export const state: AppState = {
  loading: false,
};
