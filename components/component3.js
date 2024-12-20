import { html } from 'https://cdn.jsdelivr.net/npm/mettle/dist/mettle.full-esm.js';
import {
  ref,
  defineComponent,
  reactive,
  watchProps,
} from 'https://unpkg.com/mettle-web-components@0.1.1/dist/mettle-web-components.esm.js';

export const MyComponent = defineComponent(() => {
  const state = reactive({
    text: 'Hello',
    arr: [1, 2],
  });
  const increase = () => {
    state.arr.unshift('1');
  };

  return () =>
    html`<fragment
      ><button onClick=${increase}>add</button>
      <p>${state.arr.toString()}</p>
      <my-child msg=${state.arr.toString()}></my-child
    ></fragment>`;
});

export const MyChild = defineComponent(
  {
    props: ['msg'],
  },
  ({ props }) => {
    const msg = ref('');
    watchProps(() => {
      msg.value = props.msg;
    });

    return () => html`<p>${msg.value}</p> `;
  }
);
