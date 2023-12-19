import ChartsTabs from "./ChartsTabs";
import testing_data from "../data/testing_data.json";


//  Define an array of tabs for the ChartsTabs component
const testTabs = [
  {
    value: "tests_per_thousand",
    label: "tests Per thousand",
    records: testing_data,
    x: "date",
    y: "tests_per_thousand",
  },
  {
    value: "positive_rate",
    label: "positive rate",
    records: testing_data,
    x: "date",
    y: "positive_rate",
  },
];

// Export the TestsResult component
export default function TestsResult() {

  // Render the ChartsTabs component with the tabs array as a prop
  return <ChartsTabs tabs={testTabs} />;
}
