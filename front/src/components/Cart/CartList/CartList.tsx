import './CartList.css'
import { useEffect, useState } from 'react';
import burger from '@assets/imgs/burger.jpg';
import CartIcon from '../CartIcon/CartIcon';
import { useAppDispatch, useAppSelector } from '@store/hook';
import CartCard from '../CartCard/CartCard';
import { getTotalPrice, getTotalQuantity, } from '@store/cart/CartSlice';
import { useNavigate } from 'react-router-dom';
const CartList = () => {
    const [show, setShow] = useState(false);
    const showHandler = () => {
        setShow(true);
    }
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { itemsCart, totalQuantity, totalPrice } = useAppSelector(state => state.cart);
    console.log(itemsCart)
    const itemsCartCards = itemsCart?.map(item => {
        return <CartCard id={item.id} price={item.price} img={item.img} title={item.name} count={item.quantity} key={item.id} />
    })
    useEffect(() => {
        dispatch(getTotalQuantity());
        dispatch(getTotalPrice());

    }, [itemsCart])
    return (
        <>
            <CartIcon count={totalQuantity} showHandler={showHandler} />
            <div className={show ? "cartList show" : "cartList"}>
                {itemsCart.length > 0 ? itemsCartCards : <span className='empty'>Your List is Empty!</span>}
                <div className="total">
                    <div className="price">
                        <span>Total Price :</span> {totalPrice}
                    </div>
                    <div className="quantity">
                        <span>Total Quantity :</span> {totalQuantity}


                    </div>
                </div>
                <div className="btns">
                    <button onClick={() => setShow(!show)} className='close'>Close</button>
                    <button className='checkout' onClick={() => navigate('checkout')} >Checkout</button>
                </div>
            </div>
        </>
    )
}
export default CartList
