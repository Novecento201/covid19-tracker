import React, { useState, useEffect } from "react";

import api from "../../clientAPI";
import "./linechart.css";

import axios from "axios";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const buildChartData = (data, casesType) => {
  let chartData = [];
  let lastDataPoint;
  for (let date in data.cases) {
    if (lastDataPoint) {
      let newDataPoint = {
        x: date,
        y: data[casesType][date] - lastDataPoint,
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[casesType][date];
  }
  return chartData;
};

function LineChart({ casesType }) {
  const [data, setData] = useState({});

  useEffect(() => {
    try {
      const fetchHistoryData = async () => {
        const response = await axios.get(api.fetchHistory);

        const data = response.data;
        // console.log("LineChart", data);

        let chartData = buildChartData(data, casesType);
        setData(chartData);
      };
      fetchHistoryData();
    } catch (error) {
      // console.log(error);
    }
  }, [casesType]);

  return (
    <div>
      {data?.length > 0 ? (
        <Line
          data={{
            datasets: [
              {
                backgroundColor: "#6e57e0",
                borderColor: "#c1b6fc",
                data: data,
              },
            ],
          }}
        />
      ) : (
        <h3 className="info">Loading Data...</h3>
      )}
    </div>
  );
}

export default LineChart;
