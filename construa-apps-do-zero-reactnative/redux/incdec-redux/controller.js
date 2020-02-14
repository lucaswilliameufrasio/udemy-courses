// action types and action creators
const INCREMENT = 'INCREMENT';
const increment = () => ({
  type: INCREMENT
});

const DECREMENT = 'DECREMENT';
const decrement = () => ({
  type: DECREMENT
});

const reducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

const store = Redux.createStore(reducer);

// Manipulação de view
const display = document.getElementById('display');
const render = () => {
  display.innerText = store.getState();
}

store.subscribe(render);
render();

document
  .getElementById('btn-minus')
  .addEventListener('click', e => {
    store.dispatch(decrement());
  });

document
  .getElementById('btn-plus')
  .addEventListener('click', e => {
    store.dispatch(increment());
  });



/**
 * Este pen faz parte do curso de React Native
 * https://www.udemy.com/construa-aplicativos-mobile-do-zero-com-react-native/?couponCode=CODEPEN
 * Cupom de desconto: CODEPEN
 */