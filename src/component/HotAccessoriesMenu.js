import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/HotAccessoriesLink.css'
const HotAccessoriesMenu = () => {
  return (
    <div className='HotAccessoriesMenu'>
        <Link className='HotAccessoriesLink' to="music">Music Store</Link>
        <Link className='HotAccessoriesLink' to="smartDevices">SmartDevices</Link>
        <Link className='HotAccessoriesLink' to="home"> Home</Link>
        <Link className='HotAccessoriesLink' to="LifeStyles"> LifeStyles</Link>
        <Link className='HotAccessoriesLink' to="mobileAccessories"> Mobile Accessories</Link>
    </div>
  )
}

export default HotAccessoriesMenu