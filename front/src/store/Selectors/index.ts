import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../index";






const addToCartQuantitySelector = createSelector((state: RootState) => state.cart.items, (items) => {
    const totalQuantity = Object.values(items).length > 0 ? Object.values(items).reduce((acc, el) => acc + el) : 0;
    return totalQuantity;
});

export { addToCartQuantitySelector }