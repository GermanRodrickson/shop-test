import React, { useEffect, useState } from 'react';
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
  return (
    <section>
      <Title>Test Shop</Title>
      <Wrapper>
        <Card title="VOUCHER" />
        <Card title="TSHIRT" />
        <Card title="MUG" />
      </Wrapper>
    </section>
  );
};

export default App;
