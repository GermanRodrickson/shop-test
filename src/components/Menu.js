import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  top: 20px;
  right: 20px;
  position: fixed;
`;

const Cart = styled.span`
  font-size: 30px;
  margin-right: 10px;
`;

const ItemsCart = styled.span`
  background-color: red;
  border-radius: 10px;
  color: white;
  display: inline-block;
  font-size: 12px;
  line-height: 1;
  padding: 3px 7px;
  text-align: center;
  vertical-align: top;
  white-space: nowrap;
`;

const Item = props => {
  return (
    <Wrapper onClick={props.openCart}>
      <Cart role="img" aria-label="cart">
        🛒
      </Cart>
      <ItemsCart>{props.itemsCart}</ItemsCart>
    </Wrapper>
  );
};

export default Item;
