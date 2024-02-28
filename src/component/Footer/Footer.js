import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div className='item'>
          <h2>Categories</h2>
          <span>Woman</span>
          <span>Man</span>
          <span>Shoes</span>
          <span>New Arrivals</span>
        </div>
        <div className='item'>
          <h2>Quick Links</h2>
          <span>Home</span>
          <span>About</span>
          <span>Category</span>
          <span>New Arrivals</span>
        </div>
        <div className='item'>
          <h2>About Us</h2>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </span>
        </div>
      </div>
      <div className='bottom'>
        <h1>Qlynn's Shopping Center</h1>
        <span> &copy; Copyright 2024: All Rights Are Reserved</span>
      </div>
    </div>
  )
}

export default Footer