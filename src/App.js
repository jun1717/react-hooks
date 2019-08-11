import React, { useState, useEffect } from 'react';

const App = (props) => {
  const [state, setState] = useState(props);

  const reset = () => {
    setState(props);
  }

  useEffect(() => {
    console.log('This is like componentDidmount or componentDidUpdate');
  });

  useEffect(() => {
    console.log('This is like componentDidmount');
  }, []);

  useEffect(() => {
    console.log('This callback is for name only');
  }, [state.name, state.price]);

  const { name, price } = state;
  return (
    <>
      <p>現在の{name}は{price}円です</p>
      <button onClick={() => setState({ ...state, price: price + 1 })}>+1</button>
      <button onClick={() => setState({ ...state, price: price - 1 })}>-1</button>
      <button onClick={reset}>Reset</button>
      <input value={name} onChange={e => setState({ ...state, name: e.target.value })} />
    </>
  );
}

App.defaultProps = {
  name: '',
  price: 1000,
}

export default App;
