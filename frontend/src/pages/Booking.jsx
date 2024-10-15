import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Booking = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [item, setItem] = useState('');

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value)
    }

    function cancelhandler() {
        navigate("/tours")
    }

    async function handleBuy() {
        if (name && email) {
            let token = localStorage.getItem('usertoken');
            console.log(item._id);

            const response = await axios.post('https://tourism-backend-y99v.onrender.com/user/tourorder', {
                username: name, email, tourname: item.name, person: item.person, price: item.price,
                total: item.total, tour: item._id, startdate: item.startdate, image: item.image
            },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                })
            console.log('order : ', response.data)
            navigate("/order");
        }
    }

    const getuser = async () => {

        let token = localStorage.getItem('usertoken');

        const response = await axios.get('https://tourism-backend-y99v.onrender.com/user/getuser', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        });
        console.log('user : ', response.data);

        setName(response.data.user.name)
        setEmail(response.data.user.email)
    }

    useEffect(() => {
        setItem(location.state?.item);
        getuser();
    }, [])

    return (
        <div className="card mb-4 bg-warning ">
            <div className="card-body py-4 col-12 col-sm-10 col-md-8">
                <div className='h1 mb-3 text-center'>Booking</div>

                <img src={item?.image} className="img-fluid" alt="Generic placeholder image" />

                <div className="col-12 mb-3">
                    <p className="small text-muted cart-font">Name</p>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>

                <div className="col-12 mb-3">
                    <p className="small text-muted cart-font">Email</p>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>

                <div className="col-12 mb-3">
                    <p className="small text-muted cart-font">Name</p>
                    <p className="lead fw-normal">{item?.name}</p>
                </div>

                <div className="col-12 mb-3">
                    <p className="small text-muted cart-font">Person</p>
                    <p className="lead fw-normal">{item?.person}</p>
                </div>

                <div className="col-12 mb-3">
                    <p className="small text-muted cart-font">Price</p>
                    <p className="lead fw-normal mb-0">€{item?.price}</p>
                </div>

                <div className="col-12 mb-3">
                    <p className="small text-muted cart-font">Total</p>
                    <p className="lead fw-normal mb-0">€{item?.total}</p>
                </div>

                <button type="button" className="btn btn-primary btn-lg me-2 mb-2" onClick={handleBuy}>
                    Buy
                </button>
                <button type="button" className="btn btn-primary btn-lg mb-2" onClick={cancelhandler}>
                    Cancel
                </button>

            </div>
        </div>
    )
}

