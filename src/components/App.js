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
    setCart([
      ...cart,
      {
        title,
        price
      }
    ]);
    setcheckOut(checkOut + price);
  };

  // useEffect(() => {
  //   console.log(cart);
  // }, [cart]);

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
      <span>Items: </span>
      {cart.map(item => (
        <span>{item.title} </span>
      ))}

      <div>Total: {checkOut} €</div>
    </section>
  );
};

export default App;
