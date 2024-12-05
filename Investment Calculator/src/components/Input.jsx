import { useEffect, useState } from "react";

export default function Input({inputs, handleInput}) {
  const [inputValue, setInputValueState] = useState(inputs);
  
  function handleValue(id, newValue) {
    setInputValueState((prev) => ({
      ...prev,
      [id]: newValue
    }));
    handleInput(id, newValue);
  }

  return (
    <section id="user-input">
        <div className='input-group'>
          <p>
            <label>Initial Investment</label>
            <input type="number" value={inputValue.initialInvestment} onChange={(e) => handleValue('initialInvestment', e.target.value)}/>
          </p>
          <p>
            <label>Annual Investment</label>
            <input type="number" value={inputValue.annualInvestment} onChange={(e) => handleValue('annualInvestment', e.target.value)}/>
          </p>
        </div>

        <div className='input-group'>
          <p>
            <label>Expected Return</label>
            <input type="number" value={inputValue.expectedReturn} onChange={(e) => handleValue('expectedReturn', e.target.value)}/>
          </p>
          <p>
            <label>Duration (Years)</label>
            <input type="number" value={inputValue.duration} onChange={(e) => handleValue('duration', e.target.value)}/>
          </p>
        </div>

        <div className='input-group'>
          <p>
            <label>Investment Goal</label>
            <input type="number" value={inputValue.targetInvestment} onChange={(e) => handleValue('targetInvestment', e.target.value)}/>
          </p>
        </div>
    </section>
    
  )
  
}