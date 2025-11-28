import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import Button from '@components/feedBack/Button/Button';
import DishIcon from '@assets/svgs/dish-plate-svgrepo-com.svg?react';
import './Header.css'
import Cookie from 'cookie-universal';
import { useAppSelector } from '@store/hook';
const Header = () => {
    const cookie = Cookie();
    const { data } = useAppSelector(state => state.auth)
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
                        {cookie.get('token') ?
                            <NavLink to="/profile">
                                <div className='profile'><i className="pi pi-user"></i>{data?.user?.name}</div>
                            </NavLink>
                            :
                            <NavLink to="login">
                                <Button>Login</Button>
                            </NavLink>

                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
