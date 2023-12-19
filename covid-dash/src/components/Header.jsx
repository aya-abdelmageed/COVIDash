// Importing necessary components from Material-UI library
import { Box, Typography } from "@mui/material"

// Defining the Header component
export const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
        backgroundColor: "#3f51b5",
        color: "white",
        marginBottom: "20px",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          maxWidth: "800px",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h3" component="h1">
          COVID-19 CORONAVIRUS PANDEMIC
        </Typography>
        <Typography variant="h5">
          This is a simple react app that shows the current covid-19 statistics
        </Typography>
        <Typography variant="h6">
          We have analyzed the data from the Our World in Data GitHub repository and 
          created some charts to visualize the data to help you understand the current situation
          and how it is changing over time
        </Typography>
      </Box>
    </Box>
  )
}
