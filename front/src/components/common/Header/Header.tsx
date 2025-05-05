import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Button from '@components/feedBack/Button/Button';
import DishIcon from '@assets/svgs/dish-plate-svgrepo-com.svg?react';
import './Header.css'
const Header = () => {
    return (

        <Navbar expand="lg" className="bg-body-white nav">
            <Container className='cont'>
                <Navbar.Brand className='logo' href="/">
                    <DishIcon style={{ width: '40px', height: '40px', marginRight: '3px' }} />
                    <p>
                        Click'n Eat
                    </p>
                </Navbar.Brand>
                <Navbar.Toggle className='toggle' aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav navlinks">
                    <Nav className="me-auto links">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="food">Food</NavLink>
                        <NavLink to="restaurant">Restaurants</NavLink>
                        <NavLink to="login"><Button>Login</Button></NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
