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
  max-width: 1200px;
  margin: 0 auto;
`;

const App = () => {
  const [cart, setCart] = useState([]);
  const [checkOut, setcheckOut] = useState(0);
  const [avaliableItems] = useState(data);

  const addToCart = (title, price, promotion) => {
    setCart([
      ...cart,
      {
        title,
        price,
        promotion
      }
    ]);
  };

  const groupedItems = cart.reduce((acc, val) => {
    let index = acc.findIndex(item => item.title === val.title);
    return (
      index === -1 ? acc.push({ times: 1, ...val }) : acc[index].times++, acc
    );
  }, []);

  useEffect(() => {
    const result = groupedItems.map(item => {
      let total = 0;
      if (item.promotion === '2x1') {
        const half = Math.ceil(item.times / 2);
        for (let i = 0; i < half; i++) {
          total += item.price;
        }
        return total;
      }

      if (item.promotion === 'bulk-purchases' && item.times >= 3) {
        return 19.0;
      }

      return item.price;
    });

    function add(accumulator, a) {
      return accumulator + a;
    }

    setcheckOut(result.reduce(add, 0));
  }, [cart]);

  return (
    <section>
      <Title>Test Shop</Title>
      <Wrapper>
        {avaliableItems.map(item => {
          return (
            <Card
              title={item.title}
              price={item.price}
              promotion={item.promotion}
              key={item.id}
              addToCart={addToCart}
            />
          );
        })}
      </Wrapper>
      <span>Items: </span>
      {cart.map((item, id) => (
        <span key={id}>{item.title} </span>
      ))}

      <div>Total: {checkOut} €</div>
    </section>
  );
};

export default App;
