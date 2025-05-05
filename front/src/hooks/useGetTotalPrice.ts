import { useAppSelector } from "@store/hook";
var totalPrice = 0;
const { items } = useAppSelector(state => state.cart);
const useGetCartTotalQuantitySelector = () => {
    for (let index = 0; index < items.length; index++) {
        totalPrice = totalPrice + items[index]!.price;
    }

    return totalPrice;
}



export { useGetCartTotalQuantitySelector };
