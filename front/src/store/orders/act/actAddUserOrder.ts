import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import { RootState } from "@store/index";
import Cookie from 'cookie-universal';
import { TOrder } from "@customtypes/order";

type TResponse = {};
const cookie = Cookie()

const actAddUserOrders = createAsyncThunk(
    "orders/actAddUserOrders",
    async (formData: TOrder, thunkAPI) => {
        const { rejectWithValue, getState, signal } = thunkAPI;
        const auth = getState() as RootState;

        try {
            const res = await axios.post<TResponse>('/order/store', JSON.stringify(formData), {
                signal,
                headers: {
                    Authorization: 'Bearer' + cookie.get('token'),
                    'Content-Type': 'application/json'
                }
            },
            );

            return res.data;
        } catch (error) {
            return rejectWithValue(axiosErrorHandler(error));
        }
    }
);

export default actAddUserOrders;
