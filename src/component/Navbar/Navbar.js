import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='left'>
          <div className='item'>
            <span>Kenya</span>
            <KeyboardArrowDownIcon/>
          </div>
          <div className='categories'>
            <div className='item'>
              <Link className="link" to='/products/1'>Woman</Link>
            </div>
            <div className='item'>
              <Link className="link" to='/products/2'>Man</Link>
            </div>
            <div className='item'>
              <Link className="link" to='/products/3'>Shoes</Link>
            </div>
          </div>
        </div>
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
            <div className='cartIcon'>
              <ShoppingCartIcon/>
              <span>10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar