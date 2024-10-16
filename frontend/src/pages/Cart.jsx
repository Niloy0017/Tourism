import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cartitem from '../components/Cartitem';
import axios from 'axios';

export const Cart = () => {
    const navigate = useNavigate();

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        handleTotal()
    }, [cart]);

    useEffect(() => {
        console.log('total updated to : ',total);
    }, [total]);

    const handleTotal = () => 
    {
        if (cart && cart.length > 0) 
        {
            let sum = 0;
            for (let item of cart) 
            {
                let price = item.price * item.person;
                sum += price ;
            }
            console.log('sum : ',sum);
            setTotal(sum);
        }
    }

    const handleClearCart = async () => {
        let token = localStorage.getItem('usertoken');

        const response = await axios.delete('http://localhost:7000/user/deleteallcart', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        console.log("clearcart response : ", response);
        getcart();
    }

    const handleItemDelete = () => {
        getcart();
    }

    const handleTotalCost =()=>{
        getcart();
    }

    const handleContinue = () => {
        navigate('/tours');
    }

    const getcart = async () => 
    {
        let token = localStorage.getItem('usertoken');

        const response = await axios.get(`http://localhost:7000/user/getcart`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        console.log("response : ", response.data);

        setCart(response.data.cart);
        handleTotal();

        setLoading(false);
    }

    useEffect(() => {
        getcart()
    }, [])

    return (
        <div className="my-5 d-flex flex-column flex-md-row justify-content-center">
            {loading ? (
                <div className='h3'>Loading...</div>
            ) : (
                cart && cart.length > 0 ? (
                    <>
                        <section className='col-12 col-md-6 d-flex flex-column justify-content-center align-items-center'>
                            {cart.map((item) => (
                                <Cartitem 
                                    key={item._id} 
                                    item={item} 
                                    handleItemDelete={handleItemDelete} 
                                    handleTotalCost={handleTotalCost} 
                                />
                            ))}
                        </section>
    
                        <section className="card mb-4 col-md-3 summary-cart">
                            <div className='card-title h2'>Your Cart</div>
                            <div className='card-body py-1'>
                                <p className="font-bold cart-font">Total Items: {cart.length}</p>
                                <p className="font-bold cart-font">Total Amount: {total}</p>
                            </div>
                            <div className="d-flex justify-content-end flex-column gap-3">
                                <button type="button" className="btn btn-info btn-lg me-2" onClick={handleClearCart}>
                                    Clear Cart
                                </button>
    
                                <button type="button" className="btn btn-primary btn-lg me-2" onClick={handleContinue}>
                                    Continue
                                </button>
                            </div>
                        </section>
                    </>
                ) : (
                    <div className="text-center">
                        <div className='h1'>Cart is {cart.length === 0 ? 'Empty' : ''}</div>
                        <Link to="/tours">
                            <button className="btn btn-primary">
                                Shop Now
                            </button>
                        </Link>
                    </div>
                )
            )}
        </div>
    );
    
}

export default Cart;






