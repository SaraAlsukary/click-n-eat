import { createSlice } from "@reduxjs/toolkit";
// import actGetProductsByItems from "./act/actGetProductsByItems";
import { TLoading } from '@customtypes/loading'
import { TCart } from "@customtypes/cart";

interface ICartState {
    itemsCart: TCart[];
    index: number,
    loading: TLoading;
    error: null | string;
}

const initialState: ICartState = {
    itemsCart: [],
    index: 0,
    loading: "idle",
    error: null,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        removeFromCart: (state, action) => {
            const id = action.payload.id;
            state.itemsCart = state.itemsCart.filter(item => item !== id)
        },
        addToCart: (state, action) => {
            console.log(state.itemsCart)
            const id = action.payload.id;
            if (state.itemsCart.length) {
                const item = state.itemsCart?.find(item => item.id === id);
                if (item) {
                    const indx = state.itemsCart.findIndex(item => item.id === id)
                    state.itemsCart[indx].quantity++;
                } else {
                    state.itemsCart.push({ ...action.payload, quantity: 1 })
                }
                // const item = state.itemsCart?.find(item => item.id === id);
                // if (!item) {
                //     state.itemsCart?.push({ ...action.payload, quantity: 1 })

                // } else {
                //     const indx = state.itemsCart.findIndex(item => item.id === id)
                //     state.itemsCart[indx].quantity++;

                // }
            }
        }
        , cartItemChangeQuantity: (state, action) => {
            state.itemsCart[action.payload.id] = action.payload.quantity;
        },
        // cartItemRemove: (state, action) => {
        //     delete state.items[action.payload];
        //     state.productsFullInfo = state.productsFullInfo.filter(
        //         (el) => el.id !== action.payload
        //     );
        // },
        // cleanCartProductsFullInfo: (state) => {
        //     state.productsFullInfo = [];
        // },
        // clearCart: (state) => {
        //     state.items = {};
        //     state.productsFullInfo = [];
        // },
    },
    // extraReducers: (builder) => {
    //     builder.addCase(actGetProductsByItems.pending, (state) => {
    //         state.loading = "pending";
    //         state.error = null;
    //     });
    //     builder.addCase(actGetProductsByItems.fulfilled, (state, action) => {
    //         state.loading = "succeeded";
    //         // state.productsFullInfo = action.payload;
    //     });
    //     builder.addCase(actGetProductsByItems.rejected, (state, action) => {
    //         state.loading = "failed";
    //         if (isString(action.payload)) {
    //             state.error = action.payload;
    //         }
    //     });
    // },
});


export const {
    addToCart,
    removeFromCart,
    cartItemChangeQuantity,
    // cartItemRemove,
    // cleanCartProductsFullInfo,
    // clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
