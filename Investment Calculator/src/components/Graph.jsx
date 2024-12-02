import { useEffect, useState } from 'react';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
import { formatter, testFormatter} from '../util/investment.js';

export default function Graph({data}) {

  console.log("Data", data);
  const yearLabels = data.map((data) => {
    return (data.year)
  });

  const yearlyReturns = data.map((data) => {
    return data.valueEndOfYear;
  });

  console.log("yearly returns", yearlyReturns);
  console.log("Year Labels", yearLabels);
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
    ]
  };
  // const [chartData, setChartData] = useState({
  //   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  //   // labels: data.map((data) => ({data.year})),
  //   datasets: [{
  //     label:"My Investment Portfolio",
  //     data: data.map((data) => {
  //       return (data.valueEndOfYear);
  //     }),
  //     fill: false,
  //     borderColor: 'rgb(75,192,192)',
  //     tension: 0.1,
  //   }]
  // });

  console.log("Chart Data", chartData);
  return (
    <>
      <Line data={chartData} />
    </> 
  );
}