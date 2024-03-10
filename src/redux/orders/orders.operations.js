import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

axios.defaults.baseURL = process.env.API_HOST;

export const addOrder = createAsyncThunk(
  "orders/add",
  async (order, thunkAPI) => {
    try {
      const { data } = await axios.post(`/orders/`, order);

      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/orders", {
        params: {
          page: 1,
          limit: 30,
        },
      });
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
