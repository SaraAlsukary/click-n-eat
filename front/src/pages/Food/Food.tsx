import { Container } from 'react-bootstrap'
import './Food.css'
import { Cart, MainTitle, MealsList } from '@components/index'
const Food = () => {

    return (
        <div className='food'>
            <Container>
                <MainTitle>Food</MainTitle>
                <Cart count={0} />
                <MealsList />
            </Container>
        </div>
    )
}

export default Food
