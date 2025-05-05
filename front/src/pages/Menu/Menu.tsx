import { MainTitle } from '@components/index'

import './Menu.css'
import { Container } from 'react-bootstrap'
import CategoryList from '@components/Categories/CategoryList/CategoryList'
const Menu = () => {
    return (

        <div className='food'>
            <Container>
                <MainTitle>Menu</MainTitle>
                <CategoryList />

            </Container>
        </div>

    )
}

export default Menu
