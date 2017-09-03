import { Vue, mount } from '../../test-utils';
import { DcTitle } from './title.component';

describe('title', () => {
  it('should render title with children', async() => {
    const { clear } = mount({
      template: `<dc-title>Test</dc-title>`,
      components: { DcTitle },
    });

    await Vue.nextTick();
    expect(document.body.innerHTML).toBe('<h1 class="title">Test</h1>');
    clear();
  });
});
