import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import { RootState } from "@store/index";
import { TOrder } from "@customtypes/order";
import Cookie from 'cookie-universal';

type TResponse = TOrder;
const cookie = Cookie()

const actGetUserOrders = createAsyncThunk(
  "orders/actGetUserOrders",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState, signal } = thunkAPI;
    const auth = getState() as RootState;

    try {
      const res = await axios.get<TResponse>(
        `/order/${auth.auth.data?.user.id}/show`,
        // `/orders/${auth.auth.data?.user.id}/`,
        {
          signal,
          headers: {
            Authorization: 'Bearer' + cookie.get('token'),
            'Content-Type': 'application/json'

          }
        }
      );
      console.log(res.data?.data)
      return res.data?.data;
    } catch (error) {
      console.log(error)
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetUserOrders;
