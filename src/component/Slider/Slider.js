import React, { useState } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './Slider.scss'

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0)

    const data = [
        "https://images.unsplash.com/photo-1506956191951-7a88da4435e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1506956191951-7a88da4435e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"
    ]

    const previousSlide = () =>{
        setCurrentSlide( currentSlide === 0 ? 2 : (prev) => prev-1 )
    }

    const nextSlide = () =>{
        setCurrentSlide( currentSlide === 2 ? 0 : (prev) => prev+1 )
    }


  return (
    <div className='slider'>
        <div className='container' style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt="slider1"/>
            <img src={data[1]} alt="slider2"/>
            <img src={data[2]} alt="slider3"/>
        </div>
        <div className='icons'>
            <div className='icon' onClick={previousSlide}>
                <ArrowBackIcon/>
            </div>
            <div className='icon' onClick={nextSlide}>
                <ArrowForwardIcon/>
            </div>
        </div>
    </div>
  )
}

export default Slider