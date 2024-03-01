import React from 'react'
import Featured from '../../component/Featured/Featured'
import Slider from '../../component/Slider/Slider'

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <Featured type='featured'/>
      <Featured type='trending'/>
    </div>
  )
}

export default Home