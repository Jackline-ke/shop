import React, { useState } from 'react';
//import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import './Navbar.scss'
import Cart from '../Cart/Cart';

const Navbar = () => {
  const[open, setOpen] = useState(false)

  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='center'>
          <Link className="link" to='/'>Qlynns' Shopping Center</Link>
        </div>
        <div className='right'>
          <div className='linkPages'>
            <div className='item'>
              <Link className="link" to='/'>Home</Link>
            </div>
            <div className='item'>
              <Link className="link" to='/'>About</Link>
            </div>
            <div className='item'>
              <Link className="link" to='/'>Contact</Link>
            </div>
          </div>
          <div className='icons'>
            <SearchIcon/>
            <PersonIcon/>
            <FavoriteBorderIcon/>
            <div className='cartIcon' onClick={() =>setOpen(!open)}>
              <ShoppingCartIcon/>
              <span>10</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  )
}

export default Navbar