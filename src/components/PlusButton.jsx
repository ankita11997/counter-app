import React, { useContext } from 'react'
import NumberContext from '../context/NumberContext'

const PlusButton = () => {

    const {plusNumber} = useContext(NumberContext)

  return (
   <button className='btn btn-success rounded-0 w-100' onClick={plusNumber}>Increase Value</button>
  )
}

export default PlusButton
