import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  width: 30%;
  height: 300px;
  display: inline-block;
  margin: 10px;
`;

const Item = props => {
  return (
    <Card>
      {props.title}
      <button
        onClick={() => {
          props.addToCart(props.title, props.item);
        }}
      >
        +
      </button>
    </Card>
  );
};

export default Item;
