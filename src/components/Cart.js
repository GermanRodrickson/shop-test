import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 6px;
  padding: 10px;
  width: 300px;
  background: #f8f8f8;
  top: 20px;
  right: 20px;
  position: fixed;
`;

const Checkout = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid black;
  padding-bottom: 20px;
`;

const Cart = props => {
  return (
    <Wrapper>
      <Checkout>
        <span>Total: {props.checkout}€</span>
        <span role="img" aria-label="cart">
          🛒
        </span>
      </Checkout>
      {props.children}
    </Wrapper>
  );
};

export default Cart;
