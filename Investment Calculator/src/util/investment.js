// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)
export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  let investmentValue = Number(initialInvestment);
  let totalInvestedCapital = Number(initialInvestment);
  let totalInterest = 0;
  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = Number(investmentValue) * (Number(expectedReturn) / 100);
    investmentValue += Number(interestEarnedInYear) + Number(annualInvestment);
    totalInterest += Number(interestEarnedInYear);
    totalInvestedCapital += Number(annualInvestment);
    
    annualData.push({
      year: i + 1, // year identifier
      interest: interestEarnedInYear, // the amount of interest earned in this year
      valueEndOfYear: investmentValue, // investment value at end of year
      annualInvestment: annualInvestment, // investment added in this year
      totalInterest: totalInterest,
      totalInvestedCapital: totalInvestedCapital,
    });
  }
  return annualData;
}

export function calculateInvestmentGoalLength({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  targetInvestment,
}) {
  const annualData = [];
  let investmentValue = Number(initialInvestment);
  let i = 1;
  while(Number(investmentValue) < Number(targetInvestment)){
    const interestEarnedInYear = i === 1 ? Number(investmentValue) * (Number(expectedReturn) / 100) : Number(investmentValue) * (Number(expectedReturn + Math.floor(Math.random() * 6) + 1) / 100) ;
    investmentValue += Number(interestEarnedInYear) + Number(annualInvestment);
    annualData.push({
      year: i++,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: annualInvestment,
    });
  }
  return annualData;
}
// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export const testFormatter = new Intl.NumberFormat('en-US', {
  // style: 'currency',
  // currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
