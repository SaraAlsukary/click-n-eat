import CartIconSvg from '@assets/svgs/bag-svgrepo-com.svg?react';
import './CartIcon.css'
type TCart = {
    count: number,
    showHandler: () => void
}
const CartIcon = ({ count, showHandler }: TCart) => {
    return (
        <div className="cart" onClick={showHandler}>
            <div className="count">{count}</div>
            <CartIconSvg style={{ width: '50px', height: '50px' }} />
        </div>
    )
}

export default CartIcon
