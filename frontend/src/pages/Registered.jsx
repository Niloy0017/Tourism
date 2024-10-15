import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        event.preventDefault();

        const { name, value } = event.target;
        if (name == 'email') {
            setEmail(value)
        }
        else if (name == 'password') {
            setPassword(value)
        }
        else if (name == 'name') {
            setName(value)
        }
    }

    const submithandler = async (event) => {
        event.preventDefault();

        if (name && email && password) 
        {
            let useregister = await axios.post('https://tourism-backend-y99v.onrender.com/user/useregister', {
                name: name,
                email: email,
                password: password
            })
            console.log('admin login data : ', useregister.data);

            if (useregister?.data) {
                navigate('/login')
            }
        }
    }

    return (
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center vw-100">

            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                <img
                    src="https://cdni.iconscout.com/illustration/premium/thumb/user-registration-4489364-3723271.png"
                    className="w-100"
                    alt="Registration"
                />
            </div>

            <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
                <div className="h1">Sign Up</div>

                <form className="d-flex flex-column justify-content-center align-items-center p-3 mt-3 gap-3" onSubmit={submithandler}>

                    <div className="d-flex flex-column">
                        <label htmlFor="firstnam" className="fontstyle">Name</label>
                        <input name="name" id="firstnam" placeholder="Enter your name"
                            value={name} onChange={handleChange} required />
                    </div>

                    <div className="d-flex flex-column">
                        <label htmlFor="mail" className="fontstyle">Email</label>
                        <input name="email" id="mail" type="email" placeholder="Enter your email"
                            value={email} onChange={handleChange} required />
                    </div>

                    <div className="d-flex flex-column">
                        <label htmlFor="password" className="fontstyle">Password</label>
                        <input name="password" id="password" type="password" placeholder="Enter your password"
                            value={password} onChange={handleChange} required />
                    </div>

                    <button id="btn" style={{ backgroundColor: 'coral' }} type="submit">SUBMIT</button>

                </form>
            </div>
        </div>
    );
}

export default Register;



