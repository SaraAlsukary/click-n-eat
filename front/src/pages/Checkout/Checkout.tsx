import './Checkout.css'
import { Alert, Container, Form } from 'react-bootstrap'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, CartCardCheck, MainTitle } from '@components/index'
import { number, z } from 'zod';
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hook';
import { actAddUserOrders } from '@store/orders/ordersSlice';
import { TOrder } from '@customtypes/order';
import { removeCart } from '@store/cart/CartSlice';
const schema = z.object({
    first: z.string({ required_error: 'required field', invalid_type_error: 'First Name is required!' }),
    last: z.string({ required_error: 'required field', invalid_type_error: 'Last Name is required!' }),
    type: z.string({ required_error: 'required field', invalid_type_error: 'type Name is required!' }),
    bank: z.string(),
    address: z.string({ required_error: 'required field', invalid_type_error: 'address is required!' }),
    password: z.string({ required_error: 'required field', invalid_type_error: 'Bank password is required!' }).min(8),
    phone: z.string().min(10),
});

type Inputs = z.infer<typeof schema>;

const Checkout = () => {
    const { itemsCart, totalPrice } = useAppSelector(state => state.cart);
    const auth = useAppSelector(state => state.auth);
    const items = itemsCart.map(item => item.mealId);
    const itemsCartCard = itemsCart.map(item => <CartCardCheck title={item.name} count={item.quantity} price={item.price} key={item.id} img={item.img} id={item.id} />)
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [type, setType] = useState('');
    const [bankNum, setBankNum] = useState(0);
    const [phone, setPhone] = useState(0);
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');

    const data: TOrder = {
        firstName: first,
        lastName: last,
        phone: phone,
        address: address,
        bankNumber: bankNum,
        bankPassword: password,
        priceTotal: totalPrice,
        type: type,
        items: items

    }
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<Inputs>({
        resolver: zodResolver(schema),

    });
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<Inputs> = async () => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000))
            // throw new Error();
            // console.log(data)
            dispatch(actAddUserOrders(data))
                .unwrap()
                .then(() => {
                    dispatch(removeCart())
                    alert('Your Order Registed!')
                })
            setFirst('')
            setLast('')
            setPhone(0)
            setBankNum(0)
            setAddress('')
            setPassword('')

        } catch (error) {
            // setError("bank", {
            //     message: 'This bank number is already taken'
            // })
        }
    }

    return (
        <div className='check'>
            <MainTitle>Checkout</MainTitle>
            <Container className='content'>
                <div className="left">
                    <Form className='form' onSubmit={handleSubmit(onSubmit)}>
                        <div className="username">
                            <Form.Group className="mb-3 " controlId="formBasicEmail">
                                <Form.Control
                                    required type="text" placeholder="First Name"
                                    value={first} {...register("first"
                                    )}
                                    onChange={(e: any) => setFirst(e.target.value)} />
                                {!errors.first ? <Form.Text className="text-muted">
                                </Form.Text> : <Alert className='dangerAlert' key='danger' variant='danger'>{errors.first.message}</Alert>}
                            </Form.Group>

                            <Form.Group className="mb-3 " controlId="formBasicEmail">
                                <Form.Control required type="text" placeholder="Last Name" {...register("last"

                                )}
                                    value={last}
                                    onChange={(e: any) => setLast(e.target.value)}
                                />
                                {/* {errors.email && <span>{errors.email.message}</span>} */}
                                {!errors.last ? <Form.Text className="text-muted">
                                </Form.Text> : <Alert className='dangerAlert' key='danger' variant='danger'>{errors.last.message}</Alert>}
                            </Form.Group>

                        </div>
                        <div className="location">
                            <Form.Group className="mb-3 " controlId="formBasicEmail">
                                <Form.Control required type="number" placeholder="Phone" {...register("phone"

                                )}
                                    onChange={(e: any) => setPhone(e.target.value)}
                                />
                                {/* {errors.email && <span>{errors.email.message}</span>} */}
                                {!errors.phone ? <Form.Text className="text-muted">
                                </Form.Text> : <Alert className='dangerAlert' key='danger' variant='danger'>{errors.phone.message}</Alert>}
                            </Form.Group>

                            <Form.Group className="mb-3 " controlId="formBasicEmail">
                                <Form.Control required type="text" placeholder="Address" {...register("address"

                                )}
                                    value={address}
                                    onChange={(e: any) => setAddress(e.target.value)}
                                />
                                {/* {errors.email && <span>{errors.email.message}</span>} */}
                                {!errors.address ? <Form.Text className="text-muted">
                                </Form.Text> : <Alert className='dangerAlert' key='danger' variant='danger'>{errors.address.message}</Alert>}
                            </Form.Group>
                        </div>


                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Control required type="number" placeholder="Bank Number" {...register("bank"

                            )}
                                onChange={(e: any) => {
                                    setBankNum(e.target.value)
                                }
                                }
                            />
                            {/* {errors.email && <span>{errors.email.message}</span>} */}
                            {!errors.bank ? <Form.Text className="text-muted">
                            </Form.Text> : <Alert className='dangerAlert' key='danger' variant='danger'>{errors.bank.message}</Alert>}
                        </Form.Group>

                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Control required type="text" placeholder="payment type" {...register("type"

                            )}
                                onChange={(e: any) => setType(e.target.value)}
                            />
                            {/* {errors.email && <span>{errors.email.message}</span>} */}
                            {!errors.type ? <Form.Text className="text-muted">
                            </Form.Text> : <Alert className='dangerAlert' key='danger' variant='danger'>{errors.type.message}</Alert>}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control required type="password" placeholder="Password" {...register('password'

                            )}
                                onChange={(e: any) => setPassword(e.target.value)} />
                        </Form.Group>
                        {errors.password && <Alert className='dangerAlert' key='danger' variant='danger'>{errors.password.message}</Alert>}

                        <div className="loginBtn">
                            <Button
                                disabled={isSubmitting} type="submit">
                                {isSubmitting ? "Loading..." : "Submit"}
                            </Button>
                        </div>
                    </Form>
                </div>
                <div className="right">
                    <div className="cartItems">
                        <h1>Cart List</h1>
                        <div className="list">
                            {itemsCart.length ? itemsCartCard : "Your Cart is empty!"}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Checkout
