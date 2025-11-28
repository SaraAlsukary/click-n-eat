import './OrderCard.css'
type TOrderCard = {
    id?: number,
    media: { original_url: string }[],
    title: string,
    count?: number,
    price?: number
}
const OrderCard = ({ media, title, price }: TOrderCard) => {
    return (
        <>
            <div className="cartItem">
                <img src={media[0].original_url} alt="" />
                <div className="title">{title}</div>
                <div className="counting">
                </div>
                <div className="price">${price}</div>
            </div>
            <hr />
        </>
    )
}

export default OrderCard
