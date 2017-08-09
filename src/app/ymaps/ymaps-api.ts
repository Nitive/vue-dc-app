import { insertScriptToLoadYmaps } from './ymaps-loading';
import { Ymaps, YmapsSuggestion } from './types';

export interface YmapsApiInterface {
  preloadYmaps(modules: string[]): Promise<Ymaps>;
  suggest(search: string): Promise<YmapsSuggestion[]>;
  loadYmaps(modules: string[]): Promise<Ymaps>;
}

export class YmapsApi implements YmapsApiInterface {
  private ymapsP: Promise<Ymaps>;

  public preloadYmaps(modules: string[]) {
    return this.loadYmaps(modules);
  }

  public async suggest(search: string) {
    const ymaps = await this.loadYmaps(['suggest']);
    return ymaps.suggest(search);
  }

  public loadYmaps(modules: string[]) {
    if (!this.ymapsP) {
      this.ymapsP = insertScriptToLoadYmaps();
    }

    return this.ymapsP
      .then(ymaps => {
        return new Promise<Ymaps>((resolve, reject) => {
          ymaps.load(modules, () => {
            resolve(ymaps);
          }, reject);
        });
      });
  }
}
