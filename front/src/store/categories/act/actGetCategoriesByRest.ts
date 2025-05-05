import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import { TCategoryProperty } from "@customtypes/category";

type TResponse = TCategoryProperty;

const actGetResrtaurants = createAsyncThunk(
  "restaurants/actGetResrtaurants",
  async (id: string, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const response = await axios.get<TResponse>(`restaurant/show/${id}`, { signal });
      return response.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetResrtaurants;
