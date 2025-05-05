import './CartList.css'
import { useState } from 'react';
import CartIcon from '../CartIcon/CartIcon';
const CartList = ({ count }: { count: number }) => {
    const [show, setShow] = useState(false);
    const showHandler = () => {
        setShow(true);
    }
    return (
        <>
            <CartIcon count={count} showHandler={showHandler} />
            <div className={show ? "cartList show" : "cartList"}>

                <div className="total">
                    Total Price : 200$
                </div>
                <div className="btns">
                    <button onClick={() => setShow(!show)} className='close'>Close</button>
                    <button className='checkout'>Checkout</button>
                </div>
            </div>
        </>
    )
}
export default CartList
