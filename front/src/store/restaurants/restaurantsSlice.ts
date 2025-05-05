import { createSlice } from "@reduxjs/toolkit";
import { TLoading } from '@customtypes/loading'
import { isString } from "@customtypes/guard";
import actGetResrtaurants from "./act/actGetResrtaurants";
import { TRestaurantProperty } from "@customtypes/restaurant";
interface IRestaurantsState {
    data: TRestaurantProperty;
    loading: TLoading;
    error: string | null;
}

const initialState: IRestaurantsState = {
    data: null,
    loading: "idle",
    error: null,
};

const restaurantsSlice = createSlice({
    name: "restaurants",
    initialState,
    reducers: {
        RestaurantsRecordsCleanUp: (state) => {
            state.data = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(actGetResrtaurants.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        });
        builder.addCase(actGetResrtaurants.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.data = action.payload;
        });
        builder.addCase(actGetResrtaurants.rejected, (state, action) => {
            state.loading = "failed";
            if (isString(action.payload)) {
                state.error = action.payload;
            }
        });
    },
});

export { actGetResrtaurants };
export const { RestaurantsRecordsCleanUp } = restaurantsSlice.actions;
export default restaurantsSlice.reducer;
