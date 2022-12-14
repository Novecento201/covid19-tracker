import { useState, useEffect } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import api from "../../clientAPI.js";
import axios from "axios";

import "./tableusa.css";

import numeral from "numeral";

function TableUsa() {
  const [states, setStates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchStates = async () => {
        const response = await axios.get(api.fetchStates);
        const data = response.data;

        // console.log("TABLE USA", data);

        const states = data.map((state) => ({
          name: state.state,
          cases: state.cases,
          deaths: state.deaths,
          todayCases: state.todayCases,
          todayDeaths: state.todayDeaths,
        }));

        setStates(states);
        setIsLoading(false);
      };
      fetchStates();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="table">
      {!isLoading && (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer className="table_usa">
            <Table stickyHeader aria-label="sticky table">
              <TableHead className="tablehead">
                <TableRow className="row">
                  <TableCell className="font_header"> U.S.A. STATE</TableCell>
                  <TableCell className="font_header" align="right">
                    Cases
                  </TableCell>
                  <TableCell className="font_header" align="right">
                    Deaths
                  </TableCell>
                  <TableCell className="font_header" align="right">
                    Today Cases
                  </TableCell>
                  <TableCell className="font_header" align="right">
                    Today Death
                  </TableCell>
                </TableRow>
              </TableHead>

              {states.length && (
                <TableBody>
                  {states.map((state) => (
                    <TableRow
                      key={state.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell className="font" component="th" scope="row">
                        {state.name}
                      </TableCell>
                      <TableCell className="font" align="right">
                        {numeral(state.cases).format("0.0a")}
                      </TableCell>
                      <TableCell className="font" align="right">
                        {numeral(state.deaths).format("0.0a")}
                      </TableCell>
                      <TableCell className="font" align="right">
                        {numeral(state.todayCases).format("0.0a")}
                      </TableCell>
                      <TableCell className="font" align="right">
                        {numeral(state.todayDeaths).format("0.0a")}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              )}
              {!states?.length && <h3 className="loading">Loading...</h3>}
            </Table>
          </TableContainer>
        </Paper>
      )}

      {isLoading && <h3 className="loading">Loading data...</h3>}
    </div>
  );
}

export default TableUsa;
