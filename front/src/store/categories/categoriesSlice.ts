import { createSlice } from "@reduxjs/toolkit";
import actGetCategoriesByRest from "./act/actGetCategoriesByRest";

import { TLoading } from '@customtypes/loading'
import { TCategoryProperty } from '@customtypes/category'
import { isString } from "@customtypes/guard";
interface ICategoriesState {
  data: TCategoryProperty;
  loading: TLoading;
  id: number | null
  error: string | null;
}

const initialState: ICategoriesState = {
  data: null,
  id: null,
  loading: "idle",
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    categoriesRecordsCleanUp: (state) => {
      state.data = null;
    },

  },
  extraReducers: (builder) => {
    builder.addCase(actGetCategoriesByRest.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetCategoriesByRest.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.data = action.payload;
    });
    builder.addCase(actGetCategoriesByRest.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export { actGetCategoriesByRest };
export const { categoriesRecordsCleanUp } = categoriesSlice.actions;
export default categoriesSlice.reducer;
