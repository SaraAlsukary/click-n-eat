import { Alert, Container, Form } from 'react-bootstrap'
import './Login.css'
import { zodResolver } from '@hookform/resolvers/zod'
import './Login.css'
import { Button } from '@components/index'
import { z } from 'zod';
import { useForm, SubmitHandler } from "react-hook-form";
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAppDispatch } from '@store/hook'
import { actAuthLogin } from '@store/auth/authSlice'
const schema = z.object({
    email: z.string({ required_error: 'required field', invalid_type_error: 'email is required!' }).email(),
    password: z.string({ required_error: 'required field', invalid_type_error: 'password is required!' }).min(8),

});

type Inputs = z.infer<typeof schema>;
type TUser = {
    email: string,
    password: string
}
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const data: TUser = {
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
            dispatch(actAuthLogin(data))
                .unwrap()
                .then(() => navigate('/'))
            setEmail('')
            setPassword('')

        } catch (error) {
            setError("email", {
                message: 'This email is already taken'
            })
        }
    }
    return (
        <div className="login">
            <Container className='loginCont'>
                <Form className='form' onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" {...register("email"

                        )} />
                        {/* {errors.email && <span>{errors.email.message}</span>} */}
                        {!errors.email ? <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text> : <Alert className='dangerAlert' key='danger' variant='danger'>{errors.email.message}</Alert>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" {...register('password'

                        )} />
                    </Form.Group>
                    {errors.password && <Alert className='dangerAlert' key='danger' variant='danger'>{errors.password.message}</Alert>}

                    <div className="textCreate">
                        <NavLink to='/registeration'>Create a new account</NavLink>
                    </div>
                    <div className="loginBtn">
                        <Button
                            disabled={isSubmitting} type="submit">
                            {isSubmitting ? "Loading..." : "Submit"}
                        </Button>
                    </div>
                </Form>
            </Container>
        </div>
    )
}

export default Login
