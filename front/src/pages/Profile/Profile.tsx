import { actLogout, authLogout } from '@store/auth/authSlice';
import './Profile.css'
import { Button, MainTitle } from '@components/index';
import { useAppDispatch, useAppSelector } from '@store/hook';
import { actGetUserOrders } from '@store/orders/ordersSlice';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useNavigate } from 'react-router-dom';
import Cookie from 'cookie-universal'
import OrderCard from '@components/Order/OrderCard';
function Profile() {
    const [activeTab, setActiveTab] = useState("MyOrders");
    const cookie = Cookie();
    const { data } = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { ordersList } = useAppSelector(state => state.orders);
    const logoutHandler = () => {
        dispatch(actLogout())
            .unwrap()
            .then(() => {
                cookie.remove('token');
                dispatch(authLogout())
                navigate('/');
            })
    }
    useEffect(() => {
        dispatch(actGetUserOrders());
    }, [])
    const ordersCard = ordersList?.items.map((order) => <OrderCard price={order.price} title={order?.meal.name} media={order.meal.media} />)
    return (
        <Container className='profile'>
            <MainTitle>Profile</MainTitle>

            <Tabs
                // defaultActiveKey="MyOrders"
                activeKey={activeTab}
                onSelect={(tab) => setActiveTab(tab!)}
                id="fill-tab-example"
                className="mb-3"
                fill
                
            >
                <Tab eventKey="Settings" title="Settings">
                    <div className="settings">
                        <div>Name: {data?.user.name}</div>
                        <div>Email: {data?.user.email}</div>
                        <div><Button onClick={logoutHandler}>Logout</Button></div>
                    </div>
                </Tab>
                <Tab eventKey="MyOrders" title="My Orders">
                    <div className="orders text-center">
                        <p>FirstName: {ordersList?.firstName}</p>
                        <p>   LastName: {ordersList?.lastName}</p>
                        <p>
                            Address: {ordersList?.address}
                        </p>
                        <p>
                            priceTotal: {ordersList?.priceTotal}
                        </p>
                        <p>
                            date: {ordersList?.created_at.split("T")[0]}
                        </p>
                        {ordersCard}
                    </div>
                </Tab>

            </Tabs>



        </Container>
    );
}

export default Profile;
