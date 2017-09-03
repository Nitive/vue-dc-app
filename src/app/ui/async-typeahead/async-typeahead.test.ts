import { Vue, mount, $ } from '../../test-utils';
import { DcAsyncTypeahead } from './async-typeahead.component';

const requestSuggestions = () => Promise.resolve(['one', 'two', 'one1']);

describe('async typeahead', () => {
  it('should render input', () => {
    const propsData = {
      value: 'o',
      requestSuggestions,
    };
    const { clear } = mount(DcAsyncTypeahead, propsData);

    const input = $<HTMLInputElement>('input');
    expect(input).toBeTruthy();
    expect(input.value).toBe('o');
    clear();
  });

  it('should render suggestions returned from requestSuggestions', async() => {
    const propsData = {
      value: '',
      requestSuggestions,
    };
    const { vm, clear } = mount(DcAsyncTypeahead, propsData);

    vm.input('o');
    await Vue.nextTick();

    expect(vm.suggestions).toEqual(['one', 'two', 'one1']);
    clear();
  });
});
