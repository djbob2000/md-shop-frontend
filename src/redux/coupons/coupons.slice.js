import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_HOST;

export const fetchCoupons = createAsyncThunk(
  "coupons/fetchCoupons",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/coupons");
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const couponsSlice = createSlice({
  name: "coupons",
  initialState: {
    coupons: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoupons.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCoupons.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.coupons = action.payload;
      })
      .addCase(fetchCoupons.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default couponsSlice.reducer;

const persistConfig = {
  key: "coupons",
  storage,
  whitelist: ["coupons"],
};
export const couponsReducer = persistReducer(
  persistConfig,
  couponsSlice.reducer
);
