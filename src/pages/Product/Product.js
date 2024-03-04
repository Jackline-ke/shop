import React, { useState } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './Product.scss'

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const images = [
    'https://i.pinimg.com/564x/1d/6d/78/1d6d78f0edb6b8a9e4c2fa0429715444.jpg',
    'https://i.pinimg.com/564x/f8/f0/4c/f8f04cd7c108a4a1da6829d7fb671e2f.jpg'
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
      <div className='right'>
        <h2>Title</h2>
        <span className='price'>KSH.1000</span>
        <hr/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div className='quantity'>
          <button onClick={() => setQuantity((prev) => prev === 1 ? 1: prev-1)}>-</button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <div className='link'>
          <button className='cartButton'>
            <AddShoppingCartIcon/>
            <span>ADD TO CART</span>
          </button>
          <div className='wish'>
            <FavoriteBorderIcon/>
            <span>ADD TO WISHLIST</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product