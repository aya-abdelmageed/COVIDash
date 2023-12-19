import { Box } from "@mui/material";
import "chartjs-adapter-moment";
import { Header } from "components/Header"
import "./App.css";
import Countries from "components/Countries";
import CasesPerDay from "components/CasesPerDay";
import DeathsPerDay from "components/DeathsPerDay";
import TestsPerDay from "components/TestsPerDay";
import TestsResult from "components/TestsResult";
import VaccinationsPerDay from "components/VaccinationsPerDay";


function App ()
{
  
  return (
    <div className="App">
      <Header/>
      <CasesPerDay />
      <DeathsPerDay />
      <TestsPerDay />
      <TestsResult />
      <VaccinationsPerDay />
      <Countries />
      <Box>
       welcome to the covid tracker
      </Box>
    </div>
  );
}

export default App;
