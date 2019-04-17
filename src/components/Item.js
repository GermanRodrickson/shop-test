import React from 'react';
import styled from 'styled-components';

import Cabify from '../images/cabify.png';

const Card = styled.div`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  width: 30%;
  height: 300px;
  display: inline-block;
  margin: 10px;
  padding: 10px;
`;

const Image = styled.img`
  width: 100px;
  display: block;
  margin: 50px auto;
`;

const Button = styled.button`
  width: 40%;
  display: block;
  margin: 0 auto;
  padding: 10px;
  background-color: transparent;
  font-size: 18px;
`;

const Title = styled.h3`
  text-align: center;
  font-size: 22px;
`;

const Item = props => {
  return (
    <Card>
      <Title>{props.title}</Title>
      <Image src={Cabify} />
      <Button
        onClick={() => {
          props.addToCart(props.title, props.item);
        }}
      >
        Add to cart
      </Button>
    </Card>
  );
};

export default Item;
