import { MainTitle, RestaurantsList } from '@components/index'
import './Restaurant.css'
import { Container } from 'react-bootstrap'


const Restaurant = () => {
    return (
        <div className="rest">
            <Container>
                <MainTitle>Restuarants</MainTitle>
                <RestaurantsList />
            </Container>
        </div>
    )
}

export default Restaurant
