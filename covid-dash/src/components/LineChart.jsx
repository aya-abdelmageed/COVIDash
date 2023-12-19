// Import necessary dependencies
import { Line } from "react-chartjs-2"
import Chart from "chart.js/auto"
import Box from '@mui/material/Box';

// Define the LineChart component
export const LineChart = ({ x, y, records,label }) =>
{
  return (
    <Box
      sx={ {
        width: "100%",
        maxWidth: "100%",
        height: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      } }
    >
      {/* Render the Line chart */}
      <Line
        options={ {
          responsive: true,
          scales: {
            x:
              {
                type: "time",
                time: {
                  unit: "month",
                },
              },
          },
        } }
        data={ {
          labels: [],
          datasets: [
            {
              label,
              data: records.map(
                record => ( { x: new Date(record[x]), y: record[y] } )),
              borderColor: "#58508d",
              backgroundColor: "#aaffc3",
            },
          ],
        } }
      />
    </Box>
  )
}
