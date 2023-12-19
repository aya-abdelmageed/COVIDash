import { Box, Typography } from "@mui/material"
import ChartsTabs from "components/ChartsTabs"

import { useParams } from "react-router-dom"


// Export the Country component
export const Country = () =>
{
  const { country } = useParams()
  const data  = require(`../data/countries/${country}.json`)


  // Define an array of tabs for the ChartsTabs component
  const tabs =[
    [
    {
      value: "new_cases",
      label: "New Cases Per Day",
      records: data,
      x: "date",
      y: "new_cases",
    },
    {
      value: "total_cases",
      label: "Total Cases Per Day",
      records: data,
      x: "date",
      y: "total_cases",
    },
  ],
    [
    {
      value: "new_deaths",
      label: "New Deaths Per Day",
      records: data,
      x: "date",
      y: "new_deaths",
    },
    {
      value: "total_deaths",
      label: "Total Deaths Per Day",
      records: data,
      x: "date",
      y: "total_deaths",
    },
  ],
    [
    {
      value: "new_vaccinations",
      label: "New Vaccinations Per Day",
      records: data,
      x: "date",
      y: "new_vaccinations",
    },
    {
      value: "total_vaccinations",
      label: "Total Vaccinations Per Day",
      records: data,
      x: "date",
      y: "total_vaccinations",
    },
  ],
    [
    {
      value: "new_tests",
      label: "New Tests Per Day",
      records: data,
      x: "date",
      y: "new_tests",
    },
    {
      value: "total_tests",
      label: "Total Tests Per Day",
      records: data,
      x: "date",
      y: "total_tests",
    },
  ]
  ]

  // Render the Country component
  return (
  <Box>
    <Typography
      variant="h3"
      sx={{
        textAlign: "center",
        my:3,
      }}
      >
      covid-19 data for {country}
    </Typography>

    {
      tabs.map((tab, index) => (
        <ChartsTabs key={index} tabs={tab} />
      ))
    }
  </Box>
  )
}
