import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Card from './Item';
import data from '../data.json';

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
  const [avaliableItems] = useState(data);

  const addToCart = (title, price) => {
    setCart([...cart, title]);
    setcheckOut(checkOut + price);
  };

  return (
    <section>
      <Title>Test Shop</Title>
      <Wrapper>
        {avaliableItems.map(item => {
          return (
            <Card
              title={item.title}
              price={item.price}
              key={item.id}
              addToCart={addToCart}
            />
          );
        })}
      </Wrapper>
      <div>Items: {cart.join(', ')}</div>
      <div>Total: {checkOut} €</div>
    </section>
  );
};

export default App;
