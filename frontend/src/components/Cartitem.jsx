import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Cartitem = ({ item, handleItemDelete, handleTotalCost }) => {
    const navigate = useNavigate();

    const [person, setPerson] = useState(item.person);
    const [total, setTotal] = useState(item.person * item.price);

    console.log('cartitem : ', item);

    async function handleBuy() {
        let token = localStorage.getItem('usertoken')

        const response = await axios.delete('http://localhost:7000/user/deletecart', {
            data: { cartid: item._id },
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        console.log('cartitem delete response : ', response);
        navigate('/booking', { state: { item } });
    }

    function increment() {
        const newPerson = person + 1;
        setPerson(newPerson);
    }

    function decrement() {
        if (person > 1) {
            const newPerson = person - 1;
            setPerson(newPerson);
        }
    }

    function personhandler(event) {
        const newPerson = parseInt(event.target.value, 10);

        if (!isNaN(newPerson)) {
            setPerson(newPerson);
        }
    }

    const updatecart = async () => {
        let token = localStorage.getItem('usertoken');

        const response = await axios.put('http://localhost:7000/user/updatecart', {
            person, cartid: item._id, total
        },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
        console.log('cart : ', response.data.cart);
    }

    async function cancelhandler() {
        let token = localStorage.getItem('usertoken');

        const response = await axios.delete('http://localhost:7000/user/deletecart', {
            data: {
                cartid: item._id
            },
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        console.log('delete response : ', response);
        if (!response.data) {
            handleItemDelete()
        }
    }

    useEffect(() => {
        setTotal(person * item.price);
    }, [person])

    useEffect(() => {
        updatecart();
        handleTotalCost();
    }, [total])

    return (
        <div className="card mb-4">
            <div className="card-body p-4 row">
                <div className='col-12 col-sm-6'>
                    <div className="col-12">
                        <img src={item.image} className="img-fluid" alt="Generic placeholder image" />
                    </div>
                    <div className="col-12 d-flex flex-column justify-content-center mb-1">
                        <p className="small text-muted cart-font">Name</p>
                        <p className="lead fw-normal">{item.name}</p>
                    </div>
                    <div className="col-12 d-flex flex-column justify-content-center mb-1">
                        <p className="small text-muted cart-font">Start Date</p>
                        <p className="lead fw-normal">{item.startdate}</p>
                    </div>
                </div>
                <div className='col-12 col-sm-6'>

                    <div className="col-12 d-flex flex-column justify-content-center mb-3">

                        <p className="small text-muted cart-font">Person</p>

                        <div className="input-group col-12">
                            <button className="text-white col-12 col-md-3 btn btn-info btn-lg" onClick={increment}>+</button>
                            <input type="number" className="text-center col-12 col-md-6" value={person} onChange={personhandler} />
                            <button className="text-white col-12 col-md-3 btn btn-info btn-lg" onClick={decrement}>-</button>
                        </div>

                    </div>

                    <div className="col-12 mb-3">
                        <p className="small text-muted cart-font">Price</p>
                        <p className="lead fw-normal mb-0">€{item.price}</p>
                    </div>

                    <div className="col-12 mb-3">
                        <p className="small text-muted cart-font">Total</p>
                        <p className="lead fw-normal mb-0">€{total}</p>
                    </div>

                </div>
            </div>
            <button type="button" className="btn btn-primary btn-lg me-2 mb-2" onClick={handleBuy}>
                Buy
            </button>
            <button type="button" className="btn btn-primary btn-lg" onClick={cancelhandler}>
                Cancel
            </button>
        </div>
    );
};

export default Cartitem;
