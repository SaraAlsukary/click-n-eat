import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import { TRestaurantProperty } from "@customtypes/restaurant";

type TResponse = TRestaurantProperty;

const actGetResrtaurants = createAsyncThunk(
    "restaurants/actGetResrtaurants",
    async (_, thunkAPI) => {
        const { rejectWithValue, signal } = thunkAPI;
        try {
            const response = await axios.get<TResponse>("restaurant/index", { signal });
            return response.data;
        } catch (error) {
            return rejectWithValue(axiosErrorHandler(error));
        }
    }
);

export default actGetResrtaurants;
