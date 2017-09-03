
import Vue from 'vue/dist/vue.common';

export function mount<T, U>(Component: T, propsData: U) {
  const Ctor = Vue.extend(Component);
  const vm = new Ctor({ propsData });
  const container = document.createElement('div');
  document.body.appendChild(container);
  vm.$mount(container);

  return {
    vm,
    clear() {
      document.body.innerHTML = '';
    },
  };
}

export { default as Vue } from 'vue/dist/vue.common';

export const $ = document.querySelector.bind(document);
export const $$ = document.querySelectorAll.bind(document);
