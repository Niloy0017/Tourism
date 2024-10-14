import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  let navigate = useNavigate();

  function clickHandler() {
    navigate("/tours");
  }

  return (
    <div className='bg-success position-relative home-container'>
      <img src='https://images3.alphacoders.com/279/279609.jpg' className='w-100 h-100' />
      <button className=' position-absolute home-button' onClick={clickHandler}>Explore</button>
    </div>
  )
}



