import { createSlice } from "@reduxjs/toolkit";
import actGetUserOrders from "./act/actGetUserOrders";
import { TLoading } from "@customtypes/loading";
import { TOrder } from "@customtypes/order";
import { isString } from "@customtypes/guard";
import actAddUserOrders from "./act/actAddUserOrder";

interface IOrdersState {
  ordersList: TOrder | null;
  loading: TLoading;
  error: string | null;
}

const initialState: IOrdersState = {
  ordersList: null,
  loading: "idle",
  error: null,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    resetOrderStatus: (state) => {
      state.error = null;
      state.loading = "idle";
    },
  },
  extraReducers: (builder) => {
    // place order
    // builder.addCase(actPlaceOrder.pending, (state) => {
    //   state.loading = "pending";
    // });
    // builder.addCase(actPlaceOrder.fulfilled, (state) => {
    //   state.loading = "succeeded";
    // });
    // builder.addCase(actPlaceOrder.rejected, (state, action) => {
    //   state.loading = "failed";
    //   if (isString(action.payload)) {
    //     state.error = action.payload;
    //   }
    // });
    // get order by logged in user
    builder.addCase(actGetUserOrders.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(actGetUserOrders.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.ordersList = action.payload;
    });
    builder.addCase(actGetUserOrders.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });


    builder.addCase(actAddUserOrders.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(actAddUserOrders.fulfilled, (state, action) => {
      state.loading = "succeeded";
      // state.ordersList = action.payload;
    });
    builder.addCase(actAddUserOrders.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export { actGetUserOrders, actAddUserOrders };
export const { resetOrderStatus } = ordersSlice.actions;
export default ordersSlice.reducer;
