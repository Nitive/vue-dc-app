import { Ymaps } from './types';

declare const window: Window & {
  ymaps: Ymaps;
};

export function insertScriptToLoadYmaps(): Promise<Ymaps> {
  return new Promise((resolve, reject) => {
    if (window.ymaps) {
      resolve(window.ymaps);
      return;
    }

    const scriptTag = window.document.createElement('script');

    function clean() {
      window.document.body.removeChild(scriptTag);
    }

    scriptTag.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
    scriptTag.async = true;
    scriptTag.defer = true;
    scriptTag.onload = () => {
      window.ymaps.ready(() => {
        resolve(window.ymaps);
        clean();
      });
    };
    scriptTag.onerror = () => {
      reject(new Error('Unable to load Yandex Maps API'));
      clean();
    };
    window.document.body.appendChild(scriptTag);
  });
}
