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
      {results.map((yearlyResult) => {
        return (
          <>
            <tr>
              <td>{yearlyResult.year}</td>
              <td>{formatter.format(yearlyResult.valueEndOfYear)}</td>
              <td>{formatter.format(yearlyResult.interest)}</td>
              <td>{formatter.format(yearlyResult.totalInterest)}</td> 
              <td>{formatter.format(yearlyResult.totalInvestedCapital)}</td>
            </tr> 
          </>
        )
      })}
      </tbody>
    </table>
    </>
  );
}