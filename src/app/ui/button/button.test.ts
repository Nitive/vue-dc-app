import { Vue, mount } from '../../test-utils';
import { DcButton } from './button.component';

describe('button', () => {
  it('should render button with children', async() => {
    const { clear } = mount({
      template: `<dc-button>Test</dc-button>`,
      components: { DcButton },
    });

    await Vue.nextTick();
    expect(document.body.innerHTML).toBe('<button class="button">Test</button>');
    clear();
  });
});
