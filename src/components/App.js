import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Item';
import Cart from './Cart';

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
  const [voucher, setVoucher] = useState(0);
  const [tshirt, setTshirt] = useState(0);
  const [mug, setMug] = useState(0);
  const [cart, setCart] = useState([]);
  const [price, setprice] = useState(0);

  const addToCart = (title, item) => {
    if (title === 'VOUCHER') {
      setVoucher(item + 1);
    }
    if (title === 'TSHIRT') {
      setTshirt(item + 1);
    }
    if (title === 'MUG') {
      setMug(item + 1);
    }

    setCart([...cart, title]);
  };

  return (
    <section>
      <Title>Test Shop</Title>
      <Wrapper>
        <Card title="VOUCHER" price={10} item={voucher} addToCart={addToCart} />
        <Card title="TSHIRT" price={10} item={tshirt} addToCart={addToCart} />
        <Card title="MUG" price={10} item={mug} addToCart={addToCart} />
      </Wrapper>
      <div>Items: {cart.join(', ')}</div>
      <div>Total: </div>
    </section>
  );
};

export default App;
