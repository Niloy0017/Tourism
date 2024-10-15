import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Admintours } from '../components/Admintours';

export const Admin = () => {

    const navigate = useNavigate();
    const [tours, setTours] = useState([]);

    const clickhandler = () => {
        navigate('/addtour');
    }

    const getours = async () => {
        let token = localStorage.getItem('token');

        let response = await axios.get('https://tourism-backend-y99v.onrender.com/admin/getalltour', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        });
        console.log('response : ', response.data.tour);
        setTours(response.data.tour)
    }

    useEffect(() => {
        getours();
    }, []);

    return (

        <div className='patro'>
            <div className="title">ALL TOURS</div>
            <div className='d-flex flex-wrap justify-content-center cards container mb-4'>
                {
                    tours && tours.length > 0 ? (
                        tours.map((tour) => (
                            <Admintours tour={tour} key={tour.id} getours={getours} />
                        ))
                    ) : (<div>Empty No tours</div>)
                }
            </div>
        </div>
    )
}
