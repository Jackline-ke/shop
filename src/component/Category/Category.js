import React from 'react'
import './Category.scss'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <div className='category'>
        <div className='column'>
            <div className='row'>
                <img src='https://images.unsplash.com/photo-1593528977592-47f94831186c?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
                <button>
                    <Link className='link' to='/products/1'>Casual Wear</Link>
                </button>
            </div>
            <div className='row'>
                <img src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D' alt=''/>
                <button>
                    <Link className='link' to='/products/1'>Shoes</Link>
                </button>
            </div>
        </div>

        <div className='column'>
            <div className='row'>
                <img src='https://images.unsplash.com/photo-1603140625439-eef905ebfc6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8' alt=''/>
                <button>
                    <Link className='link' to='/products/1'>Ankara</Link>
                </button>
            </div>
        </div>

        <div className='column'>
            <div className='row'>
                <img src='https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFjY2Vzc29yaWVzfGVufDB8fDB8fHww' alt=''/>
                <button>
                    <Link className='link' to='/products/1'>Accessories</Link>
                </button>
            </div>
            <div className='row'>
                <img src='https://images.unsplash.com/photo-1627511306341-f9d96646b91d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
                <button>
                    <Link className='link' to='/products/1'>Dresses</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Category