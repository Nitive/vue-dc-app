import { Vue, mount, $ } from '../../test-utils';
import { DcMap } from './map.component';

describe('map', () => {
  it('should create element with map id', async() => {
    const { clear } = mount({
      template: `
        <dc-map map-id="test-id" />
      `,
      components: { DcMap },
    });

    await Vue.nextTick();
    expect($('#test-id')).toBeTruthy();
    clear();
  });
});
