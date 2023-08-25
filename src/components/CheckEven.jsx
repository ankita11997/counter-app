import React, { useContext } from 'react'
import NumberContext from '../context/NumberContext'

const CheckEven = () => {
  const { evenNumber , checkEven} = useContext(NumberContext);

  const handleChange = (e) => {
    checkEven(e.target.value);
  };

  return (
   <>
     <input type='number'className='form-control rounded-0 w-100' onChange={handleChange}/>
     
    <h1 className= {evenNumber % 2 === 0 ? "display-3 text-center my-2 text-success" : "display-3 text-center my-2 text-danger"}>{evenNumber}</h1>
    <h1 className='display-3 text-center my-2'>{evenNumber % 2 === 0 ? "EVEN NUMBER" : "ODD NUMBER" }</h1>
   </>
  )
}

export default CheckEven
