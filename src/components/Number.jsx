import React, { useContext } from 'react';
import NumberContext from '../context/NumberContext';

const Number = () => {
  const { number } = useContext(NumberContext);

  return (
    <>
       <h1 className='text-center display-1 my-2'>Number : {number} </h1>
    </>
  )
}

export default Number
