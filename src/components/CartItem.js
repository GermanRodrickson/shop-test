import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  margin-bottom: 10px;
`;

const Quantity = styled.span`
  float: right;
`;

const CartItem = props => {
  return (
    <section>
      <List>
        <strong>{props.title}</strong>
        <Quantity>Quantity: {props.times}</Quantity>
      </List>
    </section>
  );
};

export default CartItem;
