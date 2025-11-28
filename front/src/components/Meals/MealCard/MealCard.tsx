import { Card, Col } from 'react-bootstrap';
import './MealCard.css'
import Button from '@components/feedBack/Button/Button';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@store/cart/CartSlice';
import { useAppSelector } from '@store/hook';
type TMeal = {
    id: number,
    text: string,
    title: string,
    media: { original_url: string }[],
    price: React.ReactNode
}
function MealCard({ media, title, text, price, id }: TMeal) {
    const dispatch = useDispatch();
    const { data } = useAppSelector(state => state.meals);
    const dataCart = data?.meal.find(meal => meal.id === id);
    const addToCartHandler = () => {
        const data = {
            mealId: dataCart?.pivot.meal_id,
            id: dataCart?.id,
            name: dataCart?.name,
            price: dataCart?.pivot.price,
            img: dataCart?.media[0].original_url
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
            }> <Card.Img variant="top" src={media[0]?.original_url} className='image'/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
                    <Card.Text className='price'>
                        ${price}
                    </Card.Text>
                    <Button onClick={addToCartHandler}>Add to cart</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default MealCard;