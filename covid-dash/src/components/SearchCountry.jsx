// Importing the TextField component from the Material-UI library
import TextField from "@mui/material/TextField";

// Exporting the SearchCountry component as the default export
export default function SearchCountry({
  countries, // Array of countries
  setCountriesList, // Function to update the countries list
}) {
  // Function to handle the search input change
  const handleSearch = (event) => {
    const { value } = event.target;
    // Filtering the countries array based on the search input value
    const filteredCountries = countries.filter((country) => {
      return country.toLowerCase().includes(value.toLowerCase());
    });

    // Updating the countries list with the filtered countries
    setCountriesList(filteredCountries);
  };

  // Rendering the TextField component with the search functionality
  return (
    <TextField
      sx={{ width: 300 }}
      onChange={handleSearch}
      placeholder="Search for a country"
      label="Search"
      variant="outlined"
    />
  );
}
