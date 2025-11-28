import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import { TAuth } from "@customtypes/auth";

type TFormData = {
  email: string;
  password: string;
};

type TResponse = TAuth;

const actAuthLogin = createAsyncThunk(
  "auth/actAuthLogin",
  async (formData: TFormData, thunk) => {
    const { rejectWithValue } = thunk;

    try {
      // const res = await axios.post<TResponse>("auth/login", formData);
      const res = await axios.post<TResponse>("auth/login", JSON.stringify(formData), {
        headers: { 'Content-Type': 'application/json' },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actAuthLogin;
