import { createSlice } from "@reduxjs/toolkit";
import actAuthRegister from "./act/actAuthRegister";
import actAuthLogin from "./act/actAuthLogin";
import { isString } from "@customtypes/guard";
import { TLoading } from "@customtypes/loading";
import { TAuth } from "@customtypes/auth";
import actLogout from "./act/actLogout";
interface IAuthState {
  data: TAuth | null
  loading: TLoading;
  error: string | null;
}

const initialState: IAuthState = {
  data: null,
  loading: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetUI: (state) => {
      state.loading = "idle";
      state.error = null;
    },
    authLogout: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    //register
    builder.addCase(actAuthRegister.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actAuthRegister.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.data = action.payload;
    });
    builder.addCase(actAuthRegister.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
    //logout
    builder.addCase(actLogout.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actLogout.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.data = action.payload;
    });
    builder.addCase(actLogout.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });

    // login
    builder.addCase(actAuthLogin.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actAuthLogin.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.data = action.payload;
    });
    builder.addCase(actAuthLogin.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export { actAuthRegister, actAuthLogin, actLogout };
export const { resetUI, authLogout } = authSlice.actions;
export default authSlice.reducer;
