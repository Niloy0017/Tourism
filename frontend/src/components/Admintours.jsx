import React from 'react'
import { useNavigate } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';

export const Admintours = ({ tour, getours }) => {

    const navigate = useNavigate();

    const edithandler = () => {
        navigate(`/edit/${tour._id}`, { state: { tour } })
    }

    const deletehandler = async () => {
        let token = localStorage.getItem('token')

        const response = await axios.delete(`https://tourism-website-server-tau.vercel.app/admin/deletetour/${tour._id}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        console.log('delete response : ', response);
        getours();
    }

    return (
        <div className='card col-11 col-md-5 back-color'>

            <p className='px-3 py-3 detail-title'>
                <span className='tcolor'>{tour?.name}  : </span> : <span className='tvcolor'>{tour?.tagline}</span>
            </p>

            <div className='ps-3 pe-3 p-4 mb-4 overview d-flex justify-content-center'>
                {tour?.name} in Pictures
            </div>

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

            <div className='tour-info w-100'> {tour.info} </div>

            <p className='tour-info'>
                Price : <span className='color-value'>€ {tour.price}</span>
            </p>
            <p className='tour-info'>
                Starting Date : <span className='color-value'>{tour.startdate}</span>
            </p>
            <p className='tour-info'>
                Duration : <span className='color-value'>{tour.duration} days</span>
            </p>

            <p className='p-4 mt-2 overview d-flex justify-content-center'>
                Tour Plan Overview
            </p>
            <p className='tour-info'>
                <div>
                    {tour.tourplan.split('\n').map((line, index) => (
                        <p key={index} className='color-value'>{line}</p>
                    ))}
                </div>
            </p>
            <button className='tour-btn mt-0' onClick={edithandler}> Edit Details </button>
            <button className='tour-btn' onClick={deletehandler}> Delete </button>
        </div>
    )
}
