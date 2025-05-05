import { createSlice } from "@reduxjs/toolkit";
import actGetMealsByIds from "./act/actGetMealsByIds";
import { TLoading } from '@customtypes/loading'
import { isString } from "@customtypes/guard";
import { TMealProperty } from "@customtypes/meal";
interface IMeals {
  data: TMealProperty;
  loading: TLoading;
  error: string | null;
}

const initialState: IMeals = {
  data: null,
  loading: "idle",
  error: null,
};

const mealsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    cleanUpMealsRecords: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetMealsByIds.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetMealsByIds.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.data = action.payload;
    });
    builder.addCase(actGetMealsByIds.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export const { cleanUpMealsRecords } = mealsSlice.actions;
export { actGetMealsByIds };
export default mealsSlice.reducer;
