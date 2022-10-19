import { Line } from "react-chartjs-2";

function UsaChart({ usaHistoryCases }) {
  return (
    <div>
      <Line
        data={{
          datasets: [
            {
              backgroundColor: "#6e57e0",
              borderColor: "#c1b6fc",
              data: usaHistoryCases,
            },
          ],
        }}
      />
    </div>
  );
}

export default UsaChart;
