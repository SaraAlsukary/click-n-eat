import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import { TAuth } from "@customtypes/auth";

type TResponse = TAuth;
type TFormData = {
  name: string;
  email: string;
  password: string;
}
// };
// type TResponse = {
//   user: {
//     id: Number,
//     name: string;
//     email: string;
//     password: string;
//   },
//   authorisation: {
//     token: string

//   }
// };
const actAuthRegister = createAsyncThunk(
  "auth/actAuthRegister",
  async (formData: TFormData, thunk) => {
    const { rejectWithValue } = thunk;

    try {
      const res = await axios.post<TResponse>("auth/register", JSON.stringify(formData), {
        headers: { 'Content-Type': 'application/json' },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actAuthRegister;
