import ChartsTabs from "./ChartsTabs";
import testing_data from "../data/testing_data.json";

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
export default function TestsResult() {
  return <ChartsTabs tabs={testTabs} />;
}
