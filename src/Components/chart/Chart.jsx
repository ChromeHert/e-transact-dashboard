import React from 'react';
import {Chart as ChartJS, CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement } from "chart.js"
import { Bar } from "react-chartjs-2";
import dataSet from "../data/dataSet.json"


ChartJS.register(
  CategoryScale, 
  LinearScale, 
  Title, 
  Tooltip, 
  Legend, 
  BarElement);


const Chart = () => {
  return (
    <div>
     <Bar className='m-2 lg:p-3'
        data={{
            labels: dataSet.map((data) => data.label),
            datasets: [
                {label: "count",
                data: dataSet.map((data) => data.value),
                backgroundColor:[
                    "#3b82f6",
                    "#e11d48",
                    "#475569",
                ],
                borderRadius:5,
            },
               
            ]
        }}
     />
    </div>
  );
}

export default Chart;