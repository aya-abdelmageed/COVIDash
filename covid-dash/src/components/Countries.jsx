import countries from "../data/countries.json";
import { useState } from "react";
import { Box } from "@mui/material";
import SearchCountry from "./SearchCountry";
import { useNavigate } from "react-router-dom";

export default function Countries() {
  const navigate = useNavigate();

  const [countriesList, setCountriesList] = useState(countries || []);
console.log(countries, "countries");
  return (
    <Box>
      <SearchCountry
        setCountriesList={setCountriesList}
        countries={countries}
      />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {countriesList.map((country) => (
          <Box
            sx={{
              padding: 2,
              margin: 2,
              border: 1,
              width: 150,
              borderColor: "primary.main",
              borderRadius: 1,
              "&:hover": {
                cursor: "pointer",
                backgroundColor: "primary.main",
                color: "white",
              },
            }}
            key={country}
            onClick={() => navigate(`/${country}`)}
          >
            {country}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
