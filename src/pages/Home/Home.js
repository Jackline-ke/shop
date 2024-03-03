import React from 'react'
import Category from '../../component/Category/Category'
import Featured from '../../component/Featured/Featured'
import Slider from '../../component/Slider/Slider'

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <Featured type='Featured'/>
      <Category/>
      <Featured type='Trending'/>
    </div>
  )
}

export default Home