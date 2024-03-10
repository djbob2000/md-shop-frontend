import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_HOST;

export const fetchGoods = createAsyncThunk(
  "goods/fetchGoods",
  async (_, thunkAPI) => {
    try {
      const { currentShopID } = thunkAPI.getState().goods;

      const { data } = await axios.get(`/shops/${currentShopID}/products`, {
        // params: {
        //   page: 1,
        //   limit: 30,
        // },
      });
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
