import { calculateInvestmentResults, formatter } from '../util/investment.js';

export default function Results({results}){
  console.log("results", results);
      //Display
    // 5 columns
    // YEAR INVESTMENT VALUE INTEREST(YEAR) TOTAL INTEREST INVESTED CAPITAL
  //Iterate through results
  return (
    <>
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>

      {/* year: i + 1, // year identifier */}
      {/* interest: interestEarnedInYear, // the amount of interest earned in this year */}
      {/* valueEndOfYear: investmentValue, // investment value at end of year */}
      {/* annualInvestment: annualInvestment, // investment added in this year */}
      {results.map((yearlyResult, yearlyResultIndex) => {
        const totalInterest = yearlyResult.interest;
        {/* const totalInterest = yearlyResult.valueEndOfYear - (yearlyResult.interest * yearlyResult.year); */}
        return (
            <tr key={yearlyResultIndex}>
              <td>{yearlyResult.year}</td>
              <td>{formatter.format(yearlyResult.valueEndOfYear)}</td>
              <td>{formatter.format(yearlyResult.interest)}</td>
              <td>{formatter.format(yearlyResult.totalInterest)}</td> 
              <td>{formatter.format(yearlyResult.totalInvestedCapital)}</td>
            </tr>
        )
      })}
      </tbody>
    </table>
    </>
  );
}