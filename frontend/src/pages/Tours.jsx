import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Tourcard } from '../components/Tourcard'

export const Tours = () => {

  const [tours, setTours] = useState([])

  const getalltours = async () => 
  {
    const response = await axios.get("https://tourism-backend-y99v.onrender.com/user/getalltour");
    console.log("response : ", response.data);
    setTours(response.data.alltour);
  }

  useEffect(() => {
    getalltours()
  },[])

  return (
    <div className='patro'>
      <div className="title">Tours</div>
      <div className='d-flex flex-wrap justify-content-center cards container mb-4'>
        {
          tours.length > 0 ? (tours.map((tour) => (
            <Tourcard key={tour.id} tour={tour} ></Tourcard>
          )))
            :
            (<div>Empty no tours</div>)
        }
      </div>
    </div>
  )
}
