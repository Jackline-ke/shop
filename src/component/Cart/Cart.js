import React from 'react'
import './Cart.scss'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Cart = () => {
  const cartItems =[
    {
      id: 2,
      image1: 'https://i.pinimg.com/236x/cf/64/77/cf6477d8cddf575809537e1d626e960b.jpg',
      title: 'White T-shirt',
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      isNew: false,
      oldPrice: 'Ksh.1200',
      price: 'Ksh.1000'
    }
  ]
  return (
    <div className='cart'>
      <h2>Product in your cart</h2>
        {cartItems?.map( item=>(
          <div className='cartItems' key={item.id}>
            <img src={item.image1} alt=''/>
            <div className='details'>
              <h2>{item.title}</h2>
              <p>{item.desc.substring(0, 100)}</p>
              <div className='detailBottom'>
                <span>1 x {item.price}</span>
                <DeleteOutlineIcon className='delete'/>
              </div>
            </div>
          </div>
        ))}
      <div className='total'>
        <span>SUBTOTAL</span>
        <span>Ksh.1000</span>
      </div>
      <div className='checkout'>
        <button className='checkout'>CHECKOUT</button>
        <span className='reset'>Reset</span>
      </div>
    </div>
  )
}

export default Cart