// Importing necessary components and hooks
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { LineChart } from "components/LineChart"
import { useState } from "react"

// Exporting the ChartsTabs component
export default function ChartsTabs({tabs}) {
  // Setting up state for the selected tab
  const [value, setValue] = useState(tabs[0].value);

  // Function to handle tab change
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Rendering the ChartsTabs component
  return (
    <Box sx={{
      maxWidth: 800,
      typography: 'body1',
      m:3,
      mx: "auto",
      p:2,
      border: "1px solid #ccc",
      borderRadius: "8px",
      shadow: "0 0 10px #ccc",
    }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {/* Rendering the tab list */}
            {tabs.map((tab, index) => (
              <Tab key={index} label={tab.label} value={tab.value} />
            ))}
          </TabList>
        </Box>
        {/* Rendering the tab panels */}
        {tabs.map((tab, index) => (
          <TabPanel key={index} value={tab.value}>
            {/* Rendering the LineChart component */}
            <LineChart records={tab.records} x={tab.x} y={tab.y} label={tab.label} />
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
}
