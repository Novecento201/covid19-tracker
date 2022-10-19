import "./usa.css";
import numeral from "numeral";
import { useState, useEffect } from "react";
import { InfoBox, TableUsa, UsaChart } from "../../components";
import axios from "axios";
import api from "../../clientAPI";

function Usa() {
  const [usaInfo, setUsaInfo] = useState([]);
  const [usaHistory, setUsaHistory] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchUsaData = async () => {
        const response = await axios.get(api.fetchUsaData);
        const data = response.data;

        // console.log("USA", data);

        setUsaInfo(data);
        setIsLoading(false);
      };
      fetchUsaData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    try {
      const getUsaHistory = async () => {
        const response = await axios.get(api.fetchUsaHistory);
        const data = response.data.timeline;

        const usaHistory = {
          cases: data.cases,
          deaths: data.deaths,
        };
        setUsaHistory(usaHistory);
        setIsLoading(false);
      };
      getUsaHistory();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="usa">
      <div className="container">
        <h1 className="usa_title">USA Covid-19 Tracker</h1>

        <div className="usa_stats">
          <div className="container_table">
            <TableUsa />
          </div>
          {!isLoading && (
            <div className="container_InfoBox">
              <InfoBox
                isRed
                title="Cases"
                cases={usaInfo.todayCases}
                total={numeral(usaInfo.cases).format("0.0a")}
              />
              <InfoBox
                title="Recovered"
                cases={usaInfo.todayRecovered}
                total={numeral(usaInfo.recovered).format("0.0a")}
              />
              <InfoBox
                isRed
                title="Deaths"
                cases={usaInfo.todayDeaths}
                total={numeral(usaInfo.deaths).format("0.0a")}
              />
            </div>
          )}
        </div>

        <hr />

        <div className="container_usa_chart">
          <div className="chart_cases">
            <h3>Cases in the last 30 days</h3>
            <UsaChart usaHistoryCases={usaHistory.cases} />
          </div>

          <div className="chart_deaths">
            <h3>Deaths in the last 30 days</h3>
            <UsaChart usaHistoryCases={usaHistory.deaths} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usa;
