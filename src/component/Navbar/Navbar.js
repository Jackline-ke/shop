import React, { useState } from 'react';
//import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import './Navbar.scss'
import Cart from '../Cart/Cart';

const Navbar = () => {
  const[open, setOpen] = useState(false)

  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='center'>
          <Link className="link" to='/'>Shopping Center</Link>
        </div>
        
        <div className='right'>
          <div className='linkPages'>
            <div className='item'>
              <Link className="link" to='/'>Home</Link>
            </div>
            <div className='item'>
              <Link className="link" to='/'>Casual</Link>
            </div>
            <div className='item'>
              <Link className="link" to='/'>Ankara</Link>
            </div>
            <div className='item'>
              <Link className="link" to='/'>Shoes</Link>
            </div>
            <div className='item'>
              <Link className="link" to='/'>Dresses</Link>
            </div>
            <div className='item'>
              <Link className="link" to='/'>Accessories</Link>
            </div>
          </div>
          <div className='icons'>
            <SearchIcon className='icon'/>
            <PersonIcon className='icon'/>
            <FavoriteBorderIcon className='icon'/>
            <div className='cartIcon' onClick={() =>setOpen(!open)}>
              <ShoppingCartIcon className='icon'/>
              <span>1</span>
            </div>
          </div>
        </div>
        {/* mobile */}
        <div className='mobileMenu'>
          <MenuIcon className='menu'/>
          <CloseIcon className='close'/>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  )
}

export default Navbar