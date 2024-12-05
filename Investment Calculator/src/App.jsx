import { useEffect, useState } from 'react';
import Header from './components/Header.jsx'
import Input from './components/Input.jsx';
import Graph from './components/Graph.jsx';
import Results from './components/Results.jsx';

import { calculateInvestmentGoalLength, calculateInvestmentResults } from './util/investment.js';

const initialInputState = {
  initialInvestment: 15000, // Base Investment Value
  annualInvestment: 1200, // Yearly Amount of Investment
  expectedReturn: 6, // % return
  duration: 10, // Duration of investment in years
  targetInvestment: 100000, // Target Investment
};

function App() {
  const [inputValue, setInputValueState] = useState(initialInputState);

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
      <Input inputs={inputValue} handleInput={handleInputChange}/>
      <Results results={calculateInvestmentResults(inputValue)}/>
      <Graph investment={calculateInvestmentResults(inputValue)} goal={calculateInvestmentGoalLength(inputValue)}/>
    </>
  )
}

export default App
