import { useParams } from 'react-router-dom';
import MealsCard from '../MealCard/MealCard'
import './MealsList.css'
// import pizza from '@assets/imgs/pizza.jpg'
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@store/hook';
import { actGetMealsByIds, cleanUpMealsRecords } from '@store/meals/mealsSlice';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
const ProductList = () => {
    const { mealsId } = useParams();
    // console.log(mealsId)
    const dispatch = useDispatch();
    const { data, error, loading } = useAppSelector(state => state.meals);
    const { id } = useAppSelector(state => state.categories);
    const mealsData = data?.meal;
    const mealsCard = mealsData?.map(meal => <MealsCard id={meal.id} title={meal.name} text={meal.description} />)
    useEffect(() => {
        var promise = dispatch<any>(actGetMealsByIds(mealsId as string))
        return () => {
            promise.abort();
            dispatch(cleanUpMealsRecords());
        };
    }, [dispatch]);

    return (
        <Row className='productList'>
            {mealsCard}
            {/* <ProductCard key={2} title='pizza' text='is delicious dish' img={pizza} price={20} /> */}
        </Row>
    )
}

export default ProductList

