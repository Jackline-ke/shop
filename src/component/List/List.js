import React from 'react'
import Card from '../Card/Card'
import './List.scss'


const List = () => {

    const data = [
        {
          id: 1,
          image1: 'https://i.pinimg.com/564x/b9/a4/75/b9a4759eaad913d1158c6fcfc6de8849.jpg',
          image2: 'https://i.pinimg.com/236x/d5/d4/97/d5d497c2794a648fd548d4550bebdb9d.jpg',
          title: 'White T-shirt',
          isNew: true,
          oldPrice: 'Ksh.1200',
          price: 'Ksh.1000'
        },
        {
          id: 2,
          image1: 'https://i.pinimg.com/236x/cf/64/77/cf6477d8cddf575809537e1d626e960b.jpg',
          // image2: 'https://i.pinimg.com/236x/e8/91/d0/e891d0afb33878acda4a0e23213064bb.jpg',
          title: 'White T-shirt',
          isNew: false,
          oldPrice: 'Ksh.1200',
          price: 'Ksh.1000'
        },
        {
          id: 3,
          image1: 'https://i.pinimg.com/564x/aa/0c/c0/aa0cc0d02397d5f9095d3597c7cdaf94.jpg',
          // image2: 'https://i.pinimg.com/236x/e8/91/d0/e891d0afb33878acda4a0e23213064bb.jpg',
          title: 'White T-shirt',
          isNew: false,
          oldPrice: 'Ksh.1200',
          price: 'Ksh.1000'
        },
        {
          id: 4,
          image1: 'https://i.pinimg.com/236x/4a/7d/d1/4a7dd1cb69910dbcabcc935cab591834.jpg',
          // image2: 'https://i.pinimg.com/236x/e8/91/d0/e891d0afb33878acda4a0e23213064bb.jpg',
          title: 'White T-shirt',
          isNew: false,
          oldPrice: 'Ksh.1200',
          price: 'Ksh.1000'
        },
        {
          id: 5,
          image1: 'https://i.pinimg.com/236x/72/94/96/729496d8694cef204a83757c19d30ca7.jpg',
          // image2: 'https://i.pinimg.com/236x/e8/91/d0/e891d0afb33878acda4a0e23213064bb.jpg',
          title: 'White T-shirt',
          isNew: false,
          oldPrice: 'Ksh.1200',
          price: 'Ksh.1000'
        }
    ]
  return (
    <div className='list'>
        {data?.map(item =>(
           <Card item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default List