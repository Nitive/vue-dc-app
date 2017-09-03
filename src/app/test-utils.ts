import Vue from 'vue';

export function mount<T, U>(Component: T, propsData: U) {
  const Ctor = Vue.extend(Component);
  const vm = new Ctor({ propsData });
  const container = document.createElement('div');
  document.body.appendChild(container);
  vm.$mount(container);

  return {
    vm: vm as any,
    clear() {
      document.body.innerHTML = '';
    },
  };
}

export { Vue };

export function $<T extends Element>(selector: string): T {
  return document.querySelector(selector) as T;
}

export function $$<T extends Element>(selector: string): NodeListOf<T> {
  return document.querySelectorAll(selector) as NodeListOf<T>;
}
