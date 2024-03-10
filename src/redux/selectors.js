import { createSelector } from "@reduxjs/toolkit";

export const selectGoods = (state) => state.goods.goods;
export const selectOrders = (state) => state.orders.orders;
export const selectCartGoods = (state) => state.cart.cartGoods;
export const selectCurrentShopID = (state) => state.goods.currentShopID;

export const selectCartGoodsByShopId = createSelector(
  selectCartGoods,
  selectCurrentShopID,
  (cartGoods, currentShopID) => {
    const filtered = cartGoods.filter(
      (item) => item.shopId === currentShopID.toString()
    );

    return filtered;
  }
);
