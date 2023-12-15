import ChartsTabs from "./ChartsTabs";
import new_vaccinations_per_day from "../data/new_vaccinations_per_day.json";
import total_vaccinations_per_day from "../data/total_vaccinations_per_day.json";
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

export default function VaccinationsPerDay() {
  return  <ChartsTabs tabs={ vaccinationsTabs }/>

}
