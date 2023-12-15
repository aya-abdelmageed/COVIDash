import ChartsTabs from "./ChartsTabs";
import new_tests_per_day from "../data/new_tests_per_day.json";
import total_tests_per_day from "../data/total_tests_per_day.json";

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
export default function TestsPerDay() {
  return (
    
      <ChartsTabs tabs={ testsTabs }/> 

     
  )
}
