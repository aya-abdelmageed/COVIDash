import ChartsTabs from "./ChartsTabs";
import new_deaths_per_day from "../data/new_deaths_per_day.json";
import total_deaths_per_day from "../data/total_deaths_per_day.json";

// Define an array of tabs for the ChartsTabs component
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

// Export the DeathsPerDay component
export default function DeathsPerDay() {

  // Render the ChartsTabs component with the tabs array as a prop
  return <ChartsTabs tabs={ deathsTabs }/>

     
}
