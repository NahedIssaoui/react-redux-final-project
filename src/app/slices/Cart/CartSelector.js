import { createSelector } from "@reduxjs/toolkit";

export const cartsItem = (state) => state.carts.carts;


export const totalCartItem = createSelector(cartsItem, (items) => {

  let total = 0;
  if (items) {
    items.map((i) => (total += i.quantity));
  }
  return total;
});

//total proudct price
export const TotalPrice = createSelector(cartsItem, (items) => {
  let total = 0;
  if (items) {
    items.map((i) => (total += i.price * i.quantity));
  }
  return total.toFixed(2);
});
