import React, { useState } from 'react';
import styled from 'styled-components';

import Card from './Item';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #865bf3;
`;

const Wrapper = styled.article`
  display: flex;
  justify-content: space-around;
`;

const App = () => {
  const [cart, setCart] = useState([]);
  const [checkOut, setcheckOut] = useState(0);

  const addToCart = (title, price) => {
    setCart([...cart, title]);
    setcheckOut(checkOut + price);
  };

  return (
    <section>
      <Title>Test Shop</Title>
      <Wrapper>
        <Card title="VOUCHER" price={5.0} addToCart={addToCart} />
        <Card title="TSHIRT" price={20.0} addToCart={addToCart} />
        <Card title="MUG" price={7.5} addToCart={addToCart} />
      </Wrapper>
      <div>Items: {cart.join(', ')}</div>
      <div>Total: {checkOut} €</div>
    </section>
  );
};

export default App;
