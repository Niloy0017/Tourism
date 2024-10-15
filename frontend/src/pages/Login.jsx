import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { usertokenadd } from "../redux/reduxslices/authslice";


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const touridSelector = useSelector(state => state.tourid.id)
    const dispatch = useDispatch();

    const handleChange = (event) => {
        event.preventDefault();

        const { name, value } = event.target;
        if (name == 'email') {
            setEmail(value)
        }
        if (name == 'password') {
            setPassword(value)
        }
    }

    const submithandler = async (event) => {
        event.preventDefault();

        if (email && password) 
        {
            let userlogin = await axios.post('https://tourism-backend-c2dp.onrender.com/user/userlogin', {
                email: email,
                password: password
            })
            console.log('admin login data : ', userlogin.data);

            if (userlogin?.data) 
            {
                localStorage.removeItem('token');
                localStorage.setItem('usertoken', userlogin.data.token);

                dispatch(usertokenadd({ token: userlogin.data.token }));

                if (touridSelector) {
                    navigate(`/tourdetails/${touridSelector}`)
                }
                else {
                    navigate('/tours')
                }
            }
        }
        else {
            toast.error('Login failed. Please check your info.');
        }
    }

    function registerhandler() 
    {
        navigate("/register")
    }

    return (
        <div className=" d-flex flex-column flex-md-row justify-content-center align-items-center vw-100 p-3">

            <div className="col-12 col-md-6">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    className="w-100" />
            </div>

            <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">

                <div className="h1">Log In</div>

                <form className="d-flex flex-column justify-content-center align-items-center p-3 mt-3 gap-3">

                    <div className="d-flex flex-column ">
                        <label htmlFor="mail" className="fontstyle">Email</label>
                        <input name="email" id="mail" type="email" placeholder="enter your email"
                            value={email} onChange={handleChange} />
                    </div>

                    <div className="d-flex flex-column">
                        <label htmlFor="password" className="fontstyle">Password</label>
                        <input name="password" id="password" type="password" placeholder="enter your password"
                            value={password} onChange={handleChange} />
                    </div>

                    <button id="btn" style={{ backgroundColor: 'coral' }} type="button" onClick={submithandler}>LOGIN</button>

                </form>

                <p className="fontstyle">Don't have an account ? <span className="text-danger cursor" onClick={registerhandler}>Register</span></p>
            </div>

        </div>
    )
}

export default Login;

