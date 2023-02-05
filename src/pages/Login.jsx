import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate()

    const [isLogged, setIsLogged] = useState(false)

    const {reset, register, handleSubmit} = useForm()

    const submit = data => {
        const URL = 'https://e-commerce-api.academlo.tech/api/v1/users/login'
        axios.post(URL, data)
            .then(res => {
                //console.log(res.data.data.token)
                localStorage.setItem('token', res.data.data.token)
                setIsLogged(true)
                navigate('/')
            })
            .catch(error => console.log(error))

            /*reset({
                email: "",
                password: ""
            })*/
    }

    useEffect(() => {
        const condition = localStorage.getItem('token') ? true : false
        setIsLogged(condition)
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token')
        setIsLogged(false)
    }

    if(isLogged) {
        return (
            <div className='logout'>
                <div className='logout__btn-container'>
                    <h2>You are Logged</h2>
                    <button className='logout__btn' onClick={handleLogout}>Log out</button>
                </div>
            </div>
        )

    }

    return (
        <div className='login'>
            <form className='login-form' onSubmit={handleSubmit(submit)}>
                <h2 className='login-form__title'>Welcome! Enter your email and password online</h2>
                <div className='login-form__input-container'>
                    <label className='login-form__label' htmlFor="email">Email</label>
                    <input className='login-form__input' type="text" id="email" {...register("email")}/>
                </div>
                <div>
                    <label className='login-form__label' htmlFor="password">Password</label>
                    <input className='login-form__input' type="password" id="password" {...register("password")}/>
                </div>
                <button className='primary-btn--login'>Login</button>
            </form>
        </div>
    );
};

export default Login;

