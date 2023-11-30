import { Box, TextField } from "@mui/material";
import "chartjs-adapter-moment";
import ChartsTabs from "components/ChartsTabs"
import { Header } from "components/Header"
import countries from "data/countries.json";
import new_cases_per_day from "data/new_cases_per_day.json";
import new_deaths_per_day from "data/new_deaths_per_day.json";
import new_tests_per_day from "data/new_tests_per_day.json";
import new_vaccinations_per_day from "data/new_vaccinations_per_day.json";
import total_cases_per_day from "data/total_cases_per_day.json";
import total_deaths_per_day from "data/total_deaths_per_day.json";
import total_tests_per_day from "data/total_tests_per_day.json";
import total_vaccinations_per_day from "data/total_vaccinations_per_day.json";
import { useState } from "react"

import "./App.css";
import { useNavigate } from "react-router-dom"
// import countriesData from "data/country_data.json";
const casesTabs = [
  {
    value: "new_cases",
    label: "New Cases Per Day",
    records: new_cases_per_day,
    x: "date",
    y: "new_cases",
  },
  {
    value: "total_cases",
    label: "Total Cases Per Day",
    records: total_cases_per_day,
    x: "date",
    y: "total_cases",
  },
];

const deathsTabs = [
  {
    value: "new_deaths",
    label: "New Deaths Per Day",
    records: new_deaths_per_day,
    x: "date",
    y: "new_deaths",
  },
  {
    value: "total_deaths",
    label: "Total Deaths Per Day",
    records: total_deaths_per_day,
    x: "date",
    y: "total_deaths",
  },
];

const vaccinationsTabs = [
  {
    value: "new_vaccinations",
    label: "New Vaccinations Per Day",
    records: new_vaccinations_per_day,
    x: "date",
    y: "new_vaccinations",
  },
  {
    value: "total_vaccinations",
    label: "Total Vaccinations Per Day",
    records: total_vaccinations_per_day,
    x: "date",
    y: "total_vaccinations",
  },
];

const testsTabs = [
  {
    value: "new_tests",
    label: "New Tests Per Day",
    records: new_tests_per_day,
    x: "date",
    y: "new_tests",
  },
  {
    value: "total_tests",
    label: "Total Tests Per Day",
    records: total_tests_per_day,
    x: "date",
    y: "total_tests",
  },
];

function App ()
{
  const [countriesList, setCountriesList] = useState(countries || [])
  const navigate = useNavigate();

  const handleSearch = (event) =>
  {
    const { value } = event.target;
    const filteredCountries = countries.filter((country) =>
    {

      return country.toLowerCase().includes(value.toLowerCase())
    })

    setCountriesList(filteredCountries)
  }
  return (
    <div className="App">
      <Header/>
      {/*<Box sx={{*/ }
      {/*  display: 'flex',*/ }
      {/*  flexDirection: { xs: 'column', md: 'row' },*/ }
      {/*  justifyContent: 'center',*/ }
      {/*  alignItems: 'center',*/ }
      {/*}}>*/ }

      {/*<NewCasesPerDay />*/ }
      {/*<TotalCasesPerDay />*/ }
      {/*</Box>*/ }
      <ChartsTabs tabs={ casesTabs }/>

      <ChartsTabs tabs={ deathsTabs }/>

      <ChartsTabs tabs={ vaccinationsTabs }/>

      <ChartsTabs tabs={ testsTabs }/>
      <Box>
        <TextField
          sx={ { width: 300 } }
          onChange={ handleSearch }
          placeholder="Search for a country"
          label="Search" variant="outlined"/>
        <Box sx={ {
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        } }
        >
          {
            countriesList.map((country) => (
              <Box sx={ {
                padding: 2,
                margin: 2,
                border: 1,
                width: 150,
                borderColor: "primary.main",
                borderRadius: 1,
                "&:hover": {
                  cursor: "pointer",
                  backgroundColor: "primary.main",
                  color: "white",
                },
              } }
                    key={ country }
                   onClick={ () => navigate(`/${ country }`) }
              >
                { country }
              </Box>
            ))
          }
        </Box>
      </Box>
      <Box>
       welcome to the covid tracker
        
      </Box>
    </div>
  );
}

export default App;
