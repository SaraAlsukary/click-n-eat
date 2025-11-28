import { minusItemCart, plusItemCart, removeFromCart } from '@store/cart/CartSlice'
import './CartCardCheck.css'
import { useDispatch } from 'react-redux'
type TCartCard = {
    id?: number,
    img?: string,
    title: string,
    count: number,
    price?: number
}
const CartCard = ({ img, title, count, price, id }: TCartCard) => {
    const dispatch = useDispatch();
    const removeHandler = () => {
        dispatch(removeFromCart(id))

    }
    const plusHandler = () => {
        dispatch(plusItemCart(id))

    }
    const minusHandler = () => {
        dispatch(minusItemCart(id))


    }
    return (
        <div className="cartItem">
            <div className="remove" onClick={removeHandler}>x</div>
            <img src={img} alt="" />
            <div className="title">{title}</div>
            <div className="counting">
                <span className="minus" onClick={minusHandler}>-</span>
                <div className='num'>{count}</div>
                <span className='plus' onClick={plusHandler}>+</span>
            </div>
            <div className="price">${price}</div>
        </div>
    )
}

export default CartCard
