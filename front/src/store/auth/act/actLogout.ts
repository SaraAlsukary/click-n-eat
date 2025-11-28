import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import { TAuth } from "@customtypes/auth";
import Cookie from 'cookie-universal';

type TResponse = {};
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
const cookie = Cookie()

const actLogout = createAsyncThunk(
    "auth/actLogout",
    async (_, thunk) => {
        const { rejectWithValue } = thunk;

        try {
            const res = await axios.post<TResponse>("auth/logout", {}, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer' + cookie.get('token'),

                },
            });
            return res.data;
        } catch (error) {
            return rejectWithValue(axiosErrorHandler(error));
        }
    }
);

export default actLogout;
