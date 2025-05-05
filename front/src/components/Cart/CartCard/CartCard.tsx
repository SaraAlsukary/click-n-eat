type TCartCard = {
    img: string,
    title: string,
    count: string,
    price: number
}
const CartCard = ({ img, title, count, price }: TCartCard) => {
    return (
        <div className="cartItem">
            <img src={img} alt="" />
            <div className="title">{title}</div>
            <div className="counting">
                <span className='plus'>
                    +</span>
                <div className='num'>{count}</div>
                <span className="minus">-</span>
            </div>
            <div className="price">{price}$</div>
        </div>
    )
}

export default CartCard
