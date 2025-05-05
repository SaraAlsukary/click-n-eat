import './Checkout.css'
import { Alert, Container, Form } from 'react-bootstrap'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@components/index'
import { z } from 'zod';
import { actAuthRegister } from '@store/auth/authSlice';
import { useForm, SubmitHandler } from "react-hook-form";
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useAppDispatch } from '@store/hook';
const schema = z.object({
    Name: z.string({ required_error: 'required field', invalid_type_error: 'username is required!' }),
    email: z.string({ required_error: 'required field', invalid_type_error: 'email is required!' }).email(),
    password: z.string({ required_error: 'required field', invalid_type_error: 'password is required!' }).min(8),
});

type Inputs = z.infer<typeof schema>;
type TUser = {
    name: string,
    email: string,
    password: string

}
const Checkout = () => {

    const [Name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const data: TUser = {
        name: Name,
        email: email,
        password: password

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
            dispatch(actAuthRegister(data))
                .unwrap()
                .then(() => navigate('/'))
            setEmail('')
            setName('')
            setPassword('')

        } catch (error) {
            setError("email", {
                message: 'This email is already taken'
            })
        }
    }

    return (
        <div className='check'>
            <Container>
                <div className="left">
                    <h1>Basic Information</h1>
                    <Form className='form' onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Control
                                required type="text" placeholder="First Name"
                                value={Name} {...register("Name"
                                )}
                                onChange={(e: any) => setName(e.target.value)} />
                            {/* {errors.email && <span>{errors.email.message}</span>} */}
                            {!errors.Name ? <Form.Text className="text-muted">
                            </Form.Text> : <Alert className='dangerAlert' key='danger' variant='danger'>{errors.Name.message}</Alert>}
                        </Form.Group>

                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Control required type="text" placeholder="Last Name" {...register("email"

                            )}
                                value={email}
                                onChange={(e: any) => setEmail(e.target.value)}
                            />
                            {/* {errors.email && <span>{errors.email.message}</span>} */}
                            {!errors.email ? <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text> : <Alert className='dangerAlert' key='danger' variant='danger'>{errors.email.message}</Alert>}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control required type="password" placeholder="Password" {...register('password'

                            )}
                                value={password}
                                onChange={(e: any) => setPassword(e.target.value)} />
                        </Form.Group>
                        {errors.password && <Alert className='dangerAlert' key='danger' variant='danger'>{errors.password.message}</Alert>}

                        <div className="textCreate">
                            <NavLink to='/login'>You have already an Account?</NavLink>
                        </div>
                        <div className="loginBtn">
                            <Button
                                disabled={isSubmitting} type="submit">
                                {isSubmitting ? "Loading..." : "Submit"}
                            </Button>
                        </div>
                    </Form>
                </div>
                <div className="right"></div>
            </Container>
        </div>
    )
}

export default Checkout
