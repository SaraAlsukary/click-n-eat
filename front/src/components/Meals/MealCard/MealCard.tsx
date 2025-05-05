import { Card, Col } from 'react-bootstrap';
import './MealCard.css'
import Button from '@components/feedBack/Button/Button';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@store/cart/CartSlice';
import { useAppSelector } from '@store/hook';
type TMeal = {
    id?: number,
    text: string,
    title: string,
    img?: string,
    price?: React.ReactNode
}
function MealCard({ img, title, text, price, id }: TMeal) {
    const dispatch = useDispatch();
    const { itemsCart } = useAppSelector(state => state.cart);
    const { data } = useAppSelector(state => state.meals);
    const dataCart = data?.meal.find(meal => meal.id === id)
    console.log(itemsCart);
    const addToCartHandler = () => {
        const data = {
            id: dataCart?.id,
            name: dataCart?.name,
        }
        dispatch(addToCart(data))

    }
    return (
        <Col sm={12} xs={12} md={6} lg={4} xl={4} style={{ marginBottom: '20px', flex: 0 }}>
            <Card key={id} style={
                {
                    width: '18rem',
                    height: '700px'
                }
            }> <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {text}                </Card.Text>
                    <Card.Text className='price'>
                        {price}$
                    </Card.Text>
                    <Button onClick={addToCartHandler}>Buy</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default MealCard;