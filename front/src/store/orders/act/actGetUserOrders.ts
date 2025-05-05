import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import { RootState } from "@store/index";
import { TOrder } from "@customtypes/order";

type TResponse = TOrder[];

const actGetUserOrders = createAsyncThunk(
  "orders/actGetUserOrders",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState, signal } = thunkAPI;
    const auth = getState() as RootState;

    try {
      const res = await axios.get<TResponse>(
        `/orders?userId=${auth.auth.user}`,
        {
          signal,
        }
      );

      const orders = res.data.map((el) => ({
        id: el.id,
        // subtotal: el.subtotal,
        // items: el.items,
      }));

      return orders;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetUserOrders;
