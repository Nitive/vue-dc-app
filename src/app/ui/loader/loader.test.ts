import { Vue, mount } from '../../test-utils';
import { DcLoader } from './loader.component';

describe('loader', () => {
  it('should render loader successfully', async() => {
    const { clear } = mount(DcLoader);

    await Vue.nextTick();
    expect(document.body.innerHTML).not.toBe('');
    clear();
  });
});
