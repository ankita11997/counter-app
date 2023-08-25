import React from 'react';
import Number from './components/Number';
import PlusButton from './components/PlusButton';
import MinusButton from './components/MinusButton';
import CheckEven from './components/CheckEven';
import { NumberProvider } from './context/NumberContext';

const App = () => {
  return (
   <>
    <NumberProvider>
       <div className="container p-3">
          <Number/>
          <PlusButton/>
          <MinusButton/>
           <CheckEven/>
     </div>
       </NumberProvider>
   </>
  )
}

export default App
