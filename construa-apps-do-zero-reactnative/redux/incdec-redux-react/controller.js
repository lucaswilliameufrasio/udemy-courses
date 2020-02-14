//Teste isso no codepen

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
  switch (action.type) {
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
const { Provider, connect } = ReactRedux;

const IncrementApp = ({
  value,
  dispatchDecrement,
  dispatchIncrement
}) => (
    <div>
      <button className="btn btn-primary"
        onClick={e => {
          // store.dispatch(decrement())
          dispatchDecrement()
        }}
      >-</button>

      <span>{` ${value}`}</span>

      <button className="btn btn-primary"
        onClick={e => {
          // store.dispatch(increment())
          dispatchIncrement()
        }}
      >+</button>
    </div>
  );

function mapStateToProps(state) {
  return {
    value: state
  }
}

const mapDispatchToProps = {
  dispatchDecrement: decrement,
  dispatchIncrement: increment
}

const ConnectedIncrementApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(IncrementApp)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedIncrementApp />
  </Provider>,
  document.getElementById('app')
);