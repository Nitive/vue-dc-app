import { Vue, mount, $, $$ } from '../../test-utils';
import { DcTypeahead } from './typeahead.component';

describe('typeahead', () => {
  it('should render input', () => {
    const propsData = { value: 'o', suggestions: ['one', 'two', 'one1'] };
    const { clear } = mount(DcTypeahead, propsData);

    const input = $<HTMLInputElement>('input');
    expect(input).toBeTruthy();
    expect(input.value).toBe('o');
    clear();
  });

  it('should render suggestions list when input focused', async() => {
    const propsData = { value: '', suggestions: ['one', 'two', 'one1'] };
    const { clear } = mount(DcTypeahead, propsData);

    const input = $<HTMLInputElement>('input');
    input.focus();
    await Vue.nextTick();

    const ul = $('ul');
    expect(ul).toBeTruthy();
    clear();
  });

  it('should rerender when suggestions changed', async() => {
    const propsData = { value: '', suggestions: ['one', 'two', 'one1'] };
    const { vm, clear } = mount(DcTypeahead, propsData);

    const input = $<HTMLInputElement>('input');
    input.focus();

    await Vue.nextTick();
    expect($$('li').length).toBe(3);

    vm.suggestions = ['one'];
    await Vue.nextTick();

    expect($$('li').length).toBe(1);
    clear();
  });
});
