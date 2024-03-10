import { configureStore } from "@reduxjs/toolkit";
import { goodsReducer } from "./goods/goods.slice";
import { cartReducer } from "./cart/cart.slice";
import { ordersReducer } from "./orders/orders.slice";

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

export const store = configureStore({
  devTools: true,

  reducer: {
    goods: goodsReducer,
    cart: cartReducer,
    orders: ordersReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
