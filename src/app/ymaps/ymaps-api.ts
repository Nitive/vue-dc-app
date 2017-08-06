import { loadYmaps } from './ymaps-loading';
import { Ymaps, SuggestItem } from './types';

export interface YmapsApiInterface {
  preloadYmaps(): Promise<void>;
  suggest(search: string): Promise<SuggestItem[]>;
}

export class YmapsApi implements YmapsApiInterface {
  private ymapsP: Promise<Ymaps>;

  public async preloadYmaps() {
    await this.loadYmaps();
  }

  public async suggest(search: string) {
    // const ymaps = await this.loadYmaps();
    return [{ displayName: `${search}, displayName`, value: `${search}, value` }];
  }

  private loadYmaps() {
    if (!this.ymapsP) {
      this.ymapsP = loadYmaps();
    }
    return this.ymapsP;
  }
}
