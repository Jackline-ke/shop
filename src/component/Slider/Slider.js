import { Link } from 'react-scroll'
import './Slider.scss'

const Slider = () => {

    const data = [
        "https://res.cloudinary.com/dmpr1moai/image/upload/v1706595060/qlynnshop/hero_fnuxzq.png",
        "https://images.unsplash.com/photo-1506956191951-7a88da4435e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"
    ]

  return (
    <div className='slider'>
        <div className='container'>
             {/* right */}
             <div className='right'>
                <div className='rightImage'>
                    <img src={data[0]} alt="slider"/>
                </div>
            </div>
            {/* left */}
            <div className='left'>
                <h1 className=''>Best Collection</h1>
                <h2 className=''>Get the latest and quality pieces</h2>
                <p className=''>Explore our curated selection of the most stylish and elegant women's fashion items, carefully chosen to keep you ahead of the trends. Whether you're looking for chic dresses, sophisticated accessories, or statement pieces, we have everything you need to elevate your wardrobe.</p>
                <button>
                    <Link to='feature' smooth={true} duration={2000} className='link'>Shop Now</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Slider






// .right{
        //     display: flex;
        //     height: 60vh;
        //     width: 30vw;
        //     transition: all 1s ease;
    
        //     img{
        //         height: 60vh;
        //         width: 30vw;
        //         object-fit: cover;
        //     }
        // }