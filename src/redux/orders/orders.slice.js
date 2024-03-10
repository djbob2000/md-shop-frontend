import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { ordersInitState } from "./orders.initState";
import { addOrder } from "./orders.operations";
import { fetchOrders } from "./orders.operations";

const ordersSlice = createSlice({
  name: "orders",
  initialState: ordersInitState,
  reducers: {
    resetOrders: (state) => {
      state.orders = [];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(addOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addOrder.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addOrder.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOrders.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.orders = payload;
      })
      .addCase(fetchOrders.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { resetOrders } = ordersSlice.actions;

const persistConfig = {
  key: "orders",
  storage,
  whitelist: ["orders"],
};

export const ordersReducer = persistReducer(persistConfig, ordersSlice.reducer);
