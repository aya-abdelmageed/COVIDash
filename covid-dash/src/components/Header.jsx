import { Box, Typography } from "@mui/material"

export const Header = () =>
{
  return (
    <Box
      sx={ {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
        backgroundColor: "#3f51b5",
        color: "white",
        marginBottom: "20px",
      }
        }
    >
      <Box
        sx={ {
           textAlign: "center",
          maxWidth:"800px",
          marginBottom: "20px",

        } }
      >
        <Typography
          variant="h3"
            component="h1"
        >
          COVID-19 CORONAVIRUS PANDEMIC
        </Typography>
        <Typography
          variant="h5"

        >
          this is a simple react app that shows the current covid-19 statistics
        </Typography>
        <Typography
          variant="h6"

        >
          we have analyzed the data from the world health organization (WHO) and
          the center for systems science and engineering to provide the latest updates on the COVID-19
          coronavirus pandemic.
        </Typography>
      </Box>
    </Box>
  )
}