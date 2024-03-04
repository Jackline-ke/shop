import React from 'react'
import{Link} from 'react-router-dom'
import './Card.scss'

const Card = ({item}) => {
  return (
    <div className='card'>
      <div className='image'>
        {item.isNew && <span>New Arrival</span>}
        <img src={item.image1} className='mainImage' alt=''/>
        <img src={item.image2} className='secondImage' alt=''/>
      </div>
      <h2>{item.title}</h2>
      <div className='prices'>
          <p className='price'>{item.oldPrice}</p>
          <p className='price'>{item.price}</p>
      </div>
      <Link to={`/product/${item.id}`} className='link'>
        <button className='button'>Add To Cart</button>
      </Link>
    </div>  
  )
}

export default Card