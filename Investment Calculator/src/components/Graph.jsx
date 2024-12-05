import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default function Graph({investment, goal}) {

  function extractDataPoints(chartData, targetDataPoint){
    return chartData.map((chartDataPoint) => {
      return chartDataPoint[targetDataPoint];
    });
  }

  function extractedXAxis(investment, goal){
    if(investment.length > goal.length){
      return extractDataPoints(investment, 'year');
    } else {
      return extractDataPoints(goal, 'year');
    }
  }
  
  const yearLabels = extractedXAxis(investment, goal); 
  const yearlyReturns = extractDataPoints(investment, 'valueEndOfYear');
  const targetReturns = extractDataPoints(goal, 'valueEndOfYear');

  const chartData = {
    labels: yearLabels,
    datasets: [
      {
        label: "My Investments",
        data: yearlyReturns,
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Target Investment",
        data: targetReturns,
        fill: false,
        backgroundColor:   "rgba(255,255,255,0.2)",
        borderColor:  "rgba(255,255,255,1)",
      },
    ]
  };

  return (
    <>
      <Line data={chartData} />
    </> 
  );
}