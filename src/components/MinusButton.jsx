import React, { useContext } from 'react'
import NumberContext from '../context/NumberContext'

const MinusButton = () => {
  const {minusNumber} = useContext(NumberContext);

  return (
    <button className='btn btn-warning rounded-0 w-100 my-2' onClick={minusNumber}>Decrease Value</button>
  )
}

export default MinusButton
