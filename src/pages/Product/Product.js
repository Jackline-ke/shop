import React, { useState } from 'react'
import './Product.scss'

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    'https://i.pinimg.com/736x/58/96/33/589633d562368457e5ba4c11efd0c9a2.jpg',
    'https://i.pinimg.com/236x/c7/d6/f8/c7d6f867aa6bbbbb58361d1e776a50d8.jpg'
  ]
  return (
    <div className='product'>
      <div className='left'>
        <div className='image'>
          <img src={images[0]} alt="" onClick={e=> setSelectedImage(0)}/>
          <img src={images[1]} alt='' onClick={e=> setSelectedImage(1)}/>
        </div>
        <div className='mainImage'>
          <img src={images[selectedImage]}/>
        </div>
      </div>
      <div className='right'></div>
    </div>
  )
}

export default Product