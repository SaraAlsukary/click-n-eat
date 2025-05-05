import './CategoryList.css'
import { Row } from 'react-bootstrap'
// import Burger from '@assets/imgs/burger.jpg'
// import Pizza from '@assets/imgs/pizza.jpg'
// import Noodles from '@assets/imgs/noodles.jpeg'
// import Donut from '@assets/imgs/donut.jpeg'
// import Salad from '@assets/imgs/salad.jpeg'
// import hotDog from '@assets/imgs/hotDog.webp'
// import Ice from '@assets/imgs/iceCream.webp'
import CategoryCard from '../CategoryCard/CategoryCard'
import { useEffect } from 'react'
import { actGetCategoriesByRest, categoriesRecordsCleanUp } from '@store/categories/categoriesSlice'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '@store/hook'
import { useParams } from 'react-router-dom'
// const dataCate = [{
//     img: Burger,
//     name: 'Burger'
// },
// {
//     img: Pizza,
//     name: 'Pizza'
// }, {
//     img: Noodles,
//     name: 'Noodles'
// }, {
//     img: Donut,
//     name: 'Donut'
// }, {
//     img: Salad,
//     name: 'Salad'
// }, {
//     img: hotDog,
//     name: 'Hot Dog'
// }, {
//     img: Ice,
//     name: 'Ice Cream'
// },]
const CategoryList = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { data, error, loading } = useAppSelector(state => state.categories);
    const categoryData = data?.category;

    useEffect(() => {
        var promise = dispatch<any>(actGetCategoriesByRest(id as string))
        return () => {
            promise.abort();
            dispatch(categoriesRecordsCleanUp());
        };
    }, [dispatch]);
    const CategoriesCard = categoryData?.map((cate) => <CategoryCard id={cate.id} name={cate.name}
    // media={cate.media}
    />)
    return (

        <Row className="menuList">
            {CategoriesCard}
        </Row>
    )
}

export default CategoryList
