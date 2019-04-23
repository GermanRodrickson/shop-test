import React from 'react';
import styled from 'styled-components';

import Logo from '../images/cabify.png';

const Card = styled.div`
  width: 30%;
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

const Price = styled.p`
  font-size: 18px;
  text-align: center;
`;

const Item = props => {
  return (
    <Card>
      <Title>{props.title}</Title>
      <Image src={Logo} />
      <Price>{props.price} €</Price>
      <Button
        onClick={() => {
          props.addToCart(props.title, props.price, props.promotion);
        }}
      >
        Add to cart
      </Button>
    </Card>
  );
};

export default Item;
