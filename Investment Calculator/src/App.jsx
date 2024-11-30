import { useEffect, useState } from 'react';
import Header from './components/Header.jsx'
import Input from './components/Input.jsx';
import Results from './components/Results.jsx';
import { calculateInvestmentResults } from './util/investment.js';

const initialInputState = {
  initialInvestment: 1000,
  annualInvestment: 2400,
  expectedReturn: 10000,
  duration: 5, 
};

function App() {
  const [inputValue, setInputValueState] = useState(initialInputState);

  useEffect(() => {

  }, [inputValue]);
  function handleInputChange(id, newValue) {
    setInputValueState((prev) => ({
      ...prev,
      [id]: newValue
    }));
  }

  return (
    <>
      {/* Title + Logo */}
      <Header/>

      
      {/* Input Block */}
      <Input inputs={inputValue} handleInput={handleInputChange}/>

      {/* Results Table */}
      <Results/>
    </>


    //Input
    // INITIAL INVESTMENT 
    // ANNUAL INVESTMENT
    // EXPECTED RETURN
    // DURATION
    //Display
    // 5 columns
    // YEAR INVESTMENT VALUE INTEREST(YEAR) TOTAL INTEREST INVESTED CAPITAL
  )
}

export default App
