import './Slider.scss'
// import React from 'react-slideshow-image/dist'
// import { Fade} from 'react-slideshow-image'

const Slider = () => {

    const data = [
        "https://images.unsplash.com/photo-1506956191951-7a88da4435e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1506956191951-7a88da4435e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"
    ]

  return (
    <div className='slider'>
        <div className='container'>
            {/* left */}
            <div className='left'>
                <h1 className=''>Best Collection</h1>
                <h2 className=''>Get the latest and quality pieces</h2>
                <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            {/* right */}
            <div className='right'>
               
                    <div className='rightImage'>
                        <img src={data[0]} alt="slider"/>
                    </div>
                    <div className='rightImage'>
                        <img src={data[1]} alt="slider"/>
                    </div>
                    <div className='rightImage'>
                        <img src={data[2]} alt="slider"/>
                    </div>
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