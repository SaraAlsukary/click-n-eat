import { useAppSelector } from "@store/hook";
var totalQuantity = 0;
const { items } = useAppSelector(state => state.cart);
const useGetCartTotalQuantitySelector = () => {
    for (let index = 0; index < items.length; index++) {
        totalQuantity = totalQuantity + items[index]!.quantity;
    }

    return totalQuantity;
}



export { useGetCartTotalQuantitySelector };
