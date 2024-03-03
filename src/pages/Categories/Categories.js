import React from 'react'

const Categories = () => {
  return (
    <div className='products'>
      {/* left */}
      <div className='left'>
        <div className='filterItem'>
          <h2>Product Categories</h2>
          <div className='inputItems'>
            <input type='checkbox'id='1' value={1}/>
            <label htmlFor='1'>Shoes</label>
          </div>
          <div className='inputItems'>
            <input type='checkbox'id='1' value={2}/>
            <label htmlFor='1'>Dresses</label>
          </div>
          <div className='inputItems'>
            <input type='checkbox'id='1' value={3}/>
            <label htmlFor='1'>Accesories</label>
          </div>
          <div className='inputItems'>
            <input type='checkbox'id='1' value={4}/>
            <label htmlFor='1'>Casual</label>
          </div>
        </div>
        <div className='filterItem'>
          <h2>Filter by price</h2>
          <div className='inputItems'>
            <span>0</span>
            <input type='range' min={0} max={1000}/>
            <span>1000</span>
          </div>
        </div>
        <div className='filterItem'>
          <h2>Sort by</h2>
          <div className='inputItem'>
            <input type='radio' id='asc' value='asc' name='price'/>
            <label htmlFor='asc'>Price (Lowest)</label>
          </div>
          <div className='inputItem'>
            <input type='radio' id='desc' value='asc' name='price'/>
            <label htmlFor='desc'>Price (Highest)</label>
          </div>
        </div>
      </div>
      {/* right */}
      <div className='right'></div>
    </div>
  )
}

export default Categories