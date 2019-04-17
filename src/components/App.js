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
  const [voucher, setVoucher] = useState(0);
  const [tshirt, setTshirt] = useState(0);
  const [mug, setMug] = useState(0);
  const [cart, setCart] = useState([]);
  const [finalPrice, setFinalPrice] = useState(0);

  const addToCart = (title, item, price) => {
    if (title === 'VOUCHER') {
      setVoucher(item + 1);
    }
    if (title === 'TSHIRT') {
      setTshirt(item + 1);
    }
    if (title === 'MUG') {
      setMug(item + 1);
    }

    if (voucher % 2 === 0 && voucher !== 0) {
      price = 0;
    }

    if (tshirt >= 3) {
      price = 19.0;
    }

    setCart([...cart, title]);
    setFinalPrice(finalPrice + price);
  };

  return (
    <section>
      <Title>Test Shop</Title>
      <Wrapper>
        <Card
          title="VOUCHER"
          price={5.0}
          item={voucher}
          addToCart={addToCart}
        />
        <Card title="TSHIRT" price={20.0} item={tshirt} addToCart={addToCart} />
        <Card title="MUG" price={7.5} item={mug} addToCart={addToCart} />
      </Wrapper>
      <div>Items: {cart.join(', ')}</div>
      <div>Total: {finalPrice} €</div>
    </section>
  );
};

export default App;
