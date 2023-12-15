import TextField from "@mui/material/TextField";

export default function SearchCountry({
  countries,
  setCountriesList,
}) {
  const handleSearch = (event) => {
    const { value } = event.target;
    const filteredCountries = countries.filter((country) => {
      return country.toLowerCase().includes(value.toLowerCase());
    });

    setCountriesList(filteredCountries);
  };

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
