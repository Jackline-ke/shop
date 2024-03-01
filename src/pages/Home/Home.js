import React from 'react'
import Featured from '../../component/Featured/Featured'
import Slider from '../../component/Slider/Slider'

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <Featured type='Featured'/>
      <Featured type='Trending'/>
    </div>
  )
}

export default Home