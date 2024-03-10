import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { goodsInitState } from "./goods.initState";
import { fetchGoods } from "./goods.operations";

const goodsSlice = createSlice({
  name: "goods",
  initialState: goodsInitState,
  reducers: {
    resetGoods: (state) => {
      state.goods = [];
    },
    setCurrentShop: (state, { payload }) => {
      state.currentShopID = payload;
    },
    addToFavorites: (state, { payload }) => {
      state.favorites.push(payload);
    },
    removeFromFavorites: (state, { payload }) => {
      state.favorites = state.favorites.filter((item) => item !== payload);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchGoods.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGoods.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.goods = payload;
      })
      .addCase(fetchGoods.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});
export const {
  setCurrentShop,
  resetGoods,
  addToFavorites,
  removeFromFavorites,
} = goodsSlice.actions;

const persistConfig = {
  key: "goods",
  storage,
  whitelist: ["goods", "favorites"],
};
export const goodsReducer = persistReducer(persistConfig, goodsSlice.reducer);
