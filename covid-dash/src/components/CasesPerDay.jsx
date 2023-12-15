import ChartsTabs from "./ChartsTabs";
import new_cases_per_day from "../data/new_cases_per_day.json";
import total_cases_per_day from "../data/total_cases_per_day.json";

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

export default function CasesPerDay() {
  return (
    <ChartsTabs tabs={ casesTabs }/>

     

  )
}
