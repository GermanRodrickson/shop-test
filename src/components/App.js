import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Item';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
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

    setCart([...cart, item + title]);
  };

  return (
    <section>
      <Title>Test Shop</Title>
      <Wrapper>
        <Card title="VOUCHER" item={voucher} addToCart={addToCart} />
        <Card title="TSHIRT" item={tshirt} addToCart={addToCart} />
        <Card title="MUG" item={mug} addToCart={addToCart} />
      </Wrapper>
      <div>MUG {mug}</div>
      <div>VOUCHER {voucher}</div>
      <div>TSHIRT {tshirt}</div>
      <div>
        {cart.map(x => (
          <p>{x}</p>
        ))}
      </div>
    </section>
  );
};

export default App;
