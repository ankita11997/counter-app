import { createContext, useReducer } from "react";
import NumberReducer from "./NumberReducer";


const NumberContext = createContext();

export const NumberProvider = ({children}) => {
   
    const initialState = {
        number : 0,
        evenNumber : 2
    }
     
     const [state,dispatch] = useReducer(NumberReducer, initialState);
  
    const plusNumber = () => {
        dispatch({
            type: "INCREASE_NUMBER",
        });
    };
    
    const minusNumber = () => {
        dispatch({
            type: "DECREASE_NUMBER",
        });
    };

     const checkEven = (num) => {
        dispatch({
            type: "CHECK_EVEN",
            payload: num,
        });
     };




    return(
        <NumberContext.Provider value={
            { number : state.number, 
            evenNumber :state.evenNumber,
             plusNumber,minusNumber,checkEven,}}>
            {children}
        </NumberContext.Provider>
    )
}

export default NumberContext