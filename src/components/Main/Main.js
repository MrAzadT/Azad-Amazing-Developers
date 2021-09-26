import React, { useState } from 'react'
import './Main.css'
import myData from '../../myData/myData'
import Developer from '../Developer/Developer'
import Favourite from './../favourite/Favourite'

const Main = () => {
  const [data, setData] = useState(myData)
  const [cart, setCart] = useState([])

  const handleBtn = (item) => {
    const exist = cart.find((i) => i.id === item.id)
    if (exist) {
      window.alert('Already Added')
    } else {
      const newCart = [...cart, item]
      setCart(newCart)
    }
  }
  return (
    <div className='main'>
      <div className='developer'>
        {data.map((data, i) => (
          <Developer key={i} data={data} handleBtn={handleBtn} />
        ))}
      </div>
      <div className='favourite'>
        <Favourite cart={cart} />
      </div>
    </div>
  )
}

export default Main
