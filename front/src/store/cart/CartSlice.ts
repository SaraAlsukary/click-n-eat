import { createSlice } from "@reduxjs/toolkit";
// import actGetProductsByItems from "./act/actGetProductsByItems";
import { TLoading } from '@customtypes/loading'
import { TCart } from "@customtypes/cart";

interface ICartState {
    itemsCart: TCart[];
    index: number,
    loading: TLoading;
    totalQuantity: number,
    totalPrice: number,
    error: null | string;
}

const initialState: ICartState = {
    itemsCart: [],
    index: 0,
    totalQuantity: 0,
    totalPrice: 0,
    loading: "idle",
    error: null,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        removeFromCart: (state, action) => {
            const id = action.payload;
            state.itemsCart = state.itemsCart.filter(item => item.id !== id)
        },
        addToCart: (state, action) => {
            const id = action.payload.id;
            const item = state.itemsCart?.find(item => item.id === id);
            if (item) {
                const indx = state.itemsCart.findIndex(item => item.id === id)
                state.itemsCart[indx].quantity++;
            } else {
                state.itemsCart.push({ ...action.payload, quantity: 1 })
            }

        },
        plusItemCart: (state, action) => {
            const indx = state.itemsCart.findIndex(item => item.id === action.payload)
            state.itemsCart[indx].quantity++;

        },
        minusItemCart: (state, action) => {
            const indx = state.itemsCart.findIndex(item => item.id === action.payload)
            if (state.itemsCart[indx].quantity === 1) {
                const itemExist = state.itemsCart.find(item => item.id === action.payload)
                state.itemsCart = state.itemsCart.filter(item => item.id !== itemExist?.id)
            } else {
                state.itemsCart[indx].quantity--;
            }
        }
        , cartItemChangeQuantity: (state, action) => {
            state.itemsCart[action.payload.id] = action.payload.quantity;
        },
        getTotalQuantity: (state) => {

            if (state.itemsCart.length > 0) {
                const quantites = state.itemsCart.map(item => item.quantity);

                state.totalQuantity = quantites.reduce((prev, curr) => prev + curr);

            } else {
                state.totalQuantity = 0;

            }
        },
        getTotalPrice: (state) => {
            state.totalPrice = state.itemsCart.reduce((total, item) => {
                return total + (item.price * item.quantity);
            }, 0);
        }, removeCart: (state) => {
            state.itemsCart = []
        }
    }
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
    minusItemCart,
    plusItemCart,
    getTotalQuantity,
    getTotalPrice,
    removeCart
} = cartSlice.actions;

export default cartSlice.reducer;
