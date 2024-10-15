import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Orderitem } from '../components/Orderitem';
import axios from 'axios';

const Order = () => {

    const [orders, setOrders] = useState([]);

    const getorder = async () => {
        let token = localStorage.getItem('usertoken');

        let response = await axios.get(`https://tourism-backend-c2dp.onrender.com/user/getorders`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        console.log("orders list : ", response.data);
        setOrders(response.data.orders);
    }

    useEffect(() => {
        getorder();
    }, []);

    return (
        <div className="d-flex flex-column justify-content-center align-items-center ">
            <div className='my-1 mt-5 h2'>Order History</div>
            {
                orders.length > 0 ?
                    (
                        <section className='col-12 col-sm-10 col-md-8'>
                            {orders.map((item, index) => (
                                <Orderitem key={index} item={item} />
                            ))}
                        </section>
                    )
                    :
                    (
                        <div className="text-center h1">Order List is Empty</div>
                    )
            }
        </div>
    )
}

export default Order;
