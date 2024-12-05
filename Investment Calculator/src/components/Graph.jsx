import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default function Graph({investment, goal}) {

  function handleExtractInfo(chartData, targetData){
    return chartData.map((chart) => {
      return chart[targetData];
    });
  }

  function handleChartXAxis(investment, goal){
    if(investment.length > goal.length){
      return handleExtractInfo(investment, 'year');
    } else {
      return handleExtractInfo(goal, 'year');
    }
  }
  
  const yearLabels = handleChartXAxis(investment, goal); 
  const yearlyReturns = handleExtractInfo(investment, 'valueEndOfYear');
  const targetReturns = handleExtractInfo(goal, 'valueEndOfYear');

  const chartData = {
    labels: yearLabels,
    datasets: [
      {
        label: "My Investments",
        data: yearlyReturns,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Target Investment",
        data: targetReturns,
        fill: true,
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