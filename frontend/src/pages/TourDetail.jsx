import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { addtourid, removetourid } from '../redux/reduxslices/touridslice';

export const TourDetail = () => {

    const params = useParams();
    const id = params.id;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [tour, setTour] = useState('');
    const [cart, setCart] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    const getour = async () => {
        const response = await axios.get(`https://tourism-backend-y99v.onrender.com/user/getour/${id}`);
        console.log("response : ", response.data);
        setTour(response.data.tour);
    }

    const getcart = async () => {
        let token = localStorage.getItem('usertoken');

        if (token) {
            const response = await axios.get('https://tourism-backend-y99v.onrender.com/user/getcart', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })

            console.log('cart : ', response.data);
            setCart(response?.data?.cart);

        }
    }

    const clickhandler = async () => {
        if (submitted) {
            toast.info('Tour already booked!');
            dispatch(removetourid());
            navigate('/cart')
        }
        else {
            let token = localStorage.getItem('usertoken');

            if (!token) {
                toast.success('Going for Sign in!');
                dispatch(addtourid(id))
                navigate('/login')
            }
            else {
                const response = await axios.post('https://tourism-backend-y99v.onrender.com/user/postcart', {
                    name: tour.name, image: tour.image1, person: 1, price: tour.price, total: tour.price,
                    startdate: tour.startdate, tourid: id
                },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`
                        }
                    })

                dispatch(removetourid());
                toast.success('Tour added to Cart!');

                console.log('response cart : ', response.data);
                navigate('/cart')
            }
        }
    }

    useEffect(() => {
        if (cart && cart.length > 0) 
            {
                for (let i = 0; i < cart.length; i++) 
                {
                    console.log('cart item id : ', cart[i]._id, ' tour id : ', id);
    
                    if (cart[i].tour == id) {
                        console.log('cart item id : ', cart[i]._id, ' tour id : ', id);
                        setSubmitted(true);
                    }
                }
            }
    }, [cart])

    useEffect(() => {
        getour();
        getcart();
    }, [])

    return (
        <div className='container'>

            <div className='detail-color'>
                <p className='px-3 py-4 detail-title'>
                    {tour?.name} : {tour?.tagline}
                </p>
                <div className='ps-3 pe-3 p-4 detail-inpics d-flex justify-content-center'>
                    {tour?.name} in Pictures
                </div>

                <div className='p-5'>
                    <Carousel>
                        {tour && tour.image1 && (
                            <Carousel.Item interval={3000}>
                                <img src={tour.image1} className='carousal-img' alt={`${tour.name} Image 1`} />
                            </Carousel.Item>
                        )}
                        {tour && tour.image2 && (
                            <Carousel.Item interval={3000}>
                                <img src={tour.image2} className='carousal-img' alt={`${tour.name} Image 2`} />
                            </Carousel.Item>
                        )}
                        {tour && tour.image3 && (
                            <Carousel.Item interval={3000}>
                                <img src={tour.image3} className='carousal-img' alt={`${tour.name} Image 3`} />
                            </Carousel.Item>
                        )}
                        {tour && tour.image4 && (
                            <Carousel.Item interval={3000}>
                                <img src={tour.image4} className='carousal-img' alt={`${tour.name} Image 3`} />
                            </Carousel.Item>
                        )}
                        {tour && tour.image5 && (
                            <Carousel.Item interval={3000}>
                                <img src={tour.image5} className='carousal-img' alt={`${tour.name} Image 3`} />
                            </Carousel.Item>
                        )}
                        {tour && tour.image6 && (
                            <Carousel.Item interval={3000}>
                                <img src={tour.image6} className='carousal-img' alt={`${tour.name} Image 3`} />
                            </Carousel.Item>
                        )}
                    </Carousel>
                </div>

            </div>

            <div className='detail-color'>
                <p className='p-4 detail-inpics d-flex justify-content-center'>
                    Tour Plan Overview
                </p>

                <p className='ps-3 pe-3 textcolor'>
                    Duration : <span className='color-key'>{tour?.duration} days</span>
                </p>

                <p className='ps-3 pe-3 textcolor'>
                    Starting Date : <span className='color-key'>{tour?.startdate}</span>
                </p>

                <div className='ps-3 pe-3 textcolor'>
                    Tour Plan :
                    <div className='color-plan'>
                        {tour.tourplan && tour.tourplan.split('\n').map((line, index) => (
                            <p key={index} >{line}</p>
                        ))}
                    </div>
                </div>

                <button className='ms-3 me-3 mb-5 mt-4' onClick={clickhandler}>
                    {submitted ? 'Already added to cart' : 'Add to cart'}
                </button>
            </div>
        </div>
    );
};





