import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import List from '../../component/List/List'
import './Categories.scss'

const Categories = () => {

  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(1000)
  const [sort, setSort] = useState(null)

  return (
    <div className='products'>
      {/* left */}
      <div className='left'>
        <div className='filterItem'>
          <h2>Product Categories</h2>
          <div className='inputItem'>
            <input type='checkbox'id='1' value={1}/>
            <label htmlFor='1'>Shoes</label>
          </div>
          <div className='inputItem'>
            <input type='checkbox'id='1' value={2}/>
            <label htmlFor='1'>Dresses</label>
          </div>
          <div className='inputItem'>
            <input type='checkbox'id='1' value={3}/>
            <label htmlFor='1'>Accesories</label>
          </div>
          <div className='inputItem'>
            <input type='checkbox'id='1' value={4}/>
            <label htmlFor='1'>Casual</label>
          </div>
        </div>
        <div className='filterItem'>
          <h2>Filter by price</h2>
          <div className='inputItem'>
            <span>0</span>
            <input type='range' min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className='filterItem'>
          <h2>Sort by</h2>
          <div className='inputItem'>
            <input type='radio' id='asc' value='asc' name='price' onChange={(e => setSort('asc'))}/>
            <label htmlFor='asc'>Price (Lowest)</label>
          </div>
          <div className='inputItem'>
            <input type='radio' id='desc' value='asc' name='price' onChange={((e) => setSort('desc'))}/>
            <label htmlFor='desc'>Price (Highest)</label>
          </div>
        </div>
      </div>
      {/* right */}
      <div className='right'>
        <div className='catImage'>
          <img src='https://i.pinimg.com/564x/48/84/da/4884da8c1571bb0dd1be9f72aec4e2fd.jpg' alt=''/>
        </div>
        <List catId={catId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}

export default Categories