import React from 'react'
import './Category.scss'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <div className='category'>

        <div className='column'>
            <div className='row'>
                <img src='https://images.unsplash.com/photo-1631233859262-0d7b12ea7d4c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
                <button>
                    <Link className='link' to='/products/1'>Sale</Link>
                </button>
            </div>
            <div className='row'>
                <img src='https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8fDA%3D' alt=''/>
                <button>
                    <Link className='link' to='/products/1'>Shoes</Link>
                </button>
            </div>
        </div>

        <div className='column'>
            <div className='row'>
                <img src='https://i.pinimg.com/564x/91/e6/25/91e62507044ef7be0a321a26a35352c2.jpg' alt=''/>
                <button>
                    <Link className='link' to='/products/1'>Dresses</Link>
                </button>
            </div>
        </div>

        <div className='column column-large'>
            <div className='row'>
                <div className='column'>
                    <div className='row'>
                        <img src='https://images.unsplash.com/photo-1536924430914-91f9e2041b83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D' alt=''/>
                        <button>
                            <Link className='link' to='/products/1'>Glasses</Link>
                        </button>
                    </div>
                </div>
                <div className='column'>
                    <div className='row'>
                        <img src='https://images.unsplash.com/photo-1621441885264-eff8a6a851fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWNlc3Nvcmllc3xlbnwwfHwwfHx8MA%3D%3D' alt=''/>
                        <button>
                            <Link className='link' to='/products/1'>Accesories</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className='row'>
                <img src='https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D' alt=''/>
                <button>
                    <Link className='link' to='/products/1'>Trending</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Category