import { useState } from 'react';

import Header from "./Components/Header";
import Calculation from "./Components/Calculation";
import Results from "./Components/Results";

function App() {

  const [inputValue, setInputValue] = useState({
    initialInvestment: 10000,   //초기 투자액
    annualInvestment: 1000,     // 연간투자액
    expectedReturn: 10,         //percentage
    duration: 10                //years
  });

  const userInputValid = inputValue.duration >= 1;

  function handleChange( inputIdentifier, newValue ){
    setInputValue(prevInputValue => {
        return {
            ...prevInputValue,
            [inputIdentifier]: +newValue
        }
    })
}

  return(
    <>
      <Header />
      <Calculation calculator = { inputValue } onChange = {handleChange}/>
      {!userInputValid && <p className='center'>Please, Enter correct Duration!</p>}
      {userInputValid && <Results input = {inputValue}/>}
    </>
    
  )
}

export default App 