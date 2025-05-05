import { useDispatch } from "react-redux";
import "./RestaurantsList.css"
import { actGetResrtaurants, RestaurantsRecordsCleanUp } from "@store/restaurants/restaurantsSlice";
import { useEffect } from "react";
import { useAppSelector } from "@store/hook";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { Row } from "react-bootstrap";
const RestaurantsList = () => {
    const dispatch = useDispatch();
    const { data, error, loading } = useAppSelector(state => state.restaurants)
    useEffect(() => {
        var promise = dispatch<any>(actGetResrtaurants())
        return () => {
            promise.abort();
            dispatch(RestaurantsRecordsCleanUp());
        };
    }, [dispatch]);
    const restaurantsCards = data?.data.map((cate) => <RestaurantCard id={cate.id} address={cate.address} name={cate.name} media={cate.media} />);
    return (
        <Row className="restList">
            {restaurantsCards}
        </Row>
    )
}

export default RestaurantsList
