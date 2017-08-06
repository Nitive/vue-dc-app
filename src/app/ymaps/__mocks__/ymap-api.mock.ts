import { YmapsApiInterface } from '../ymaps-api';
import { SuggestItem } from '../types';

interface Options {
  suggestResults?: Array<(search: string) => SuggestItem[]>;
}

export function createYmapsApiMock(opts: Options) {
  let suggestRequestsCount = 0;

  return class YmapsApiMock implements YmapsApiInterface {
    public preloadYmaps() {
      return Promise.resolve();
    }

    public suggest(search: string) {
      if (!opts.suggestResults) {
        throw new Error('No suggest results provided');
      }

      const requestCount = suggestRequestsCount++;
      const result = opts.suggestResults[requestCount](search);

      if (!result) {
        throw new Error(`No result for request #${requestCount} provided`);
      }

      return Promise.resolve(result);
    }
  };
}
