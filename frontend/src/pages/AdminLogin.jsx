import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { admintokenadd } from '../redux/reduxslices/authslice';

export const AdminLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (event) => 
    {
        event.preventDefault();

        const { name, value } = event.target;
        if (name == 'email') {
            setEmail(value)
        }
        if (name == 'password') {
            setPassword(value)
        }
    }

    const submithandler = async (event) =>
    {
        event.preventDefault();

        if (email && password) 
        {
            let adminlogin = await axios.post('https://tourism-backend-c2dp.onrender.com/admin/adminlogin',{
                email:email,
                password:password
            })
            console.log('admin login data : ', adminlogin.data);

            if(adminlogin?.data)
            {
                localStorage.removeItem('usertoken');
                localStorage.setItem('token',adminlogin.data.token);

                dispatch(admintokenadd({token:adminlogin.data.token}));
            }
            navigate('/admin')
        }
    }


    return (
        <div className=" d-flex flex-column flex-md-row justify-content-center align-items-center vw-100 p-3">

            <div className="col-12 col-md-6">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    className="w-100" />
            </div>

            <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">

                <div className="h1">Admin Sign In</div>

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

            </div>

        </div>
    )
}
