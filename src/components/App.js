import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Item from './Item';
import Cart from './Cart';
import CartItem from './CartItem';
import data from '../data.json';
import Menu from './Menu';
import {
  sumTotal,
  groupByItem,
  addItems,
  hasBulkPromotion,
  hasBOGOF
} from '../helpers';
import { DISCOUNT_BULK_PURCHASE } from '../constants';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #865bf3;
`;

const Wrapper = styled.article`
  display: flex;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
`;

const WrapperItems = styled.article`
  max-width: 1200px;
  margin: 0 auto;
`;

const App = () => {
  const [cart, setCart] = useState([]);
  const [checkOut, setcheckOut] = useState(0);
  const [avaliableItems] = useState(data);

  let [menuOpen, setmenuOpen] = useState(false);
  const groupedItems = groupByItem(cart);

  const openCart = () => setmenuOpen(true);

  menuOpen
    ? (menuOpen = (
        <WrapperItems>
          <Cart openCart={openCart} checkout={checkOut}>
            {groupedItems.map((item, id) => (
              <CartItem
                key={id}
                times={item.times}
                title={item.title}
                price={item.price}
              />
            ))}
          </Cart>
        </WrapperItems>
      ))
    : (menuOpen = <Menu itemsCart={cart.length} openCart={openCart} />);

  const addToCart = (title, price, promotion) => {
    setCart([
      ...cart,
      {
        title,
        price,
        promotion
      }
    ]);
  };

  const result = groupedItems.map(item => {
    let total = 0;
    const { price, promotion, times } = item;

    if (hasBOGOF(promotion)) {
      const half = Math.ceil(times / 2);
      return addItems(half, price, total);
    }

    if (hasBulkPromotion(promotion, times)) {
      return addItems(times, DISCOUNT_BULK_PURCHASE, total);
    }

    return times * price + total;
  });

  useEffect(() => setcheckOut(result.reduce(sumTotal, 0)), [cart]);

  return (
    <section>
      <Title>Test Shop</Title>
      <Wrapper>
        {avaliableItems.map(item => {
          return (
            <Item
              title={item.title}
              price={item.price}
              promotion={item.promotion}
              key={item.id}
              addToCart={addToCart}
            />
          );
        })}
      </Wrapper>
      {menuOpen}
    </section>
  );
};

export default App;
