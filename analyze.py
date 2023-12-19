import pandas as pd
import requests

# Define the URL to download the COVID-19 data
url = "https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/owid-covid-data.csv"

# Define the destination file path
destination = 'owid-covid-data.csv'

# # Function to download the file from the URL
# def download_file(url, destination):
#     response = requests.get(url)
#     with open(destination, "wb") as file:
#         file.write(response.content)

# # Download the file
# download_file(url, destination)

# Read the downloaded CSV file into a pandas DataFrame
df = pd.read_csv('owid-covid-data.csv', memory_map=True, low_memory=False)

# Convert the 'date' column to datetime format
df['date'] = pd.to_datetime(df['date'])

# Define the path to save the JSON files
path = "covid-dash/src/data/"

# Function to convert DataFrame to JSON and save it to a file
def convert_to_json(data, file_name):
    json_result = data.to_json(orient='records', date_format='iso', default_handler=str)
    file_path = path + file_name + '.json'
    with open(file_path, 'w') as file:
        file.write(json_result)

# Group by 'date' and calculate the sum of new cases for each day across all countries
new_cases_per_day = df.groupby('date')['new_cases'].sum().reset_index()
total_cases_per_day = df.groupby('date')['total_cases'].sum().reset_index()
new_deaths_per_day = df.groupby('date')['new_deaths'].sum().reset_index()
total_deaths_per_day = df.groupby('date')['total_deaths'].sum().reset_index()
new_tests_per_day = df.groupby('date')['new_tests'].sum().reset_index()
total_tests_per_day = df.groupby('date')['total_tests'].sum().reset_index()
new_vaccinations_per_day = df.groupby('date')['new_vaccinations'].sum().reset_index()
total_vaccinations_per_day = df.groupby('date')['total_vaccinations'].sum().reset_index()

# Get unique countries and continents
countriesList = df['location'].unique()
countries = pd.Series(countriesList, name='locations')
continentsList = df['continent'].unique()
continents = pd.Series(continentsList, name='continents')

# Convert the data to JSON format and save to files
convert_to_json(new_cases_per_day, 'new_cases_per_day')
convert_to_json(total_cases_per_day, 'total_cases_per_day')
convert_to_json(new_deaths_per_day, 'new_deaths_per_day')
convert_to_json(total_deaths_per_day, 'total_deaths_per_day')
convert_to_json(new_tests_per_day, 'new_tests_per_day')
convert_to_json(total_tests_per_day, 'total_tests_per_day')
convert_to_json(new_vaccinations_per_day, 'new_vaccinations_per_day')
convert_to_json(total_vaccinations_per_day, 'total_vaccinations_per_day')
convert_to_json(countries, 'countries')
convert_to_json(continents, 'continents')

# Group by 'location' and 'date' and calculate the sum of selected columns
countries_per_day = df.groupby(['location', 'date'])[['new_cases', "total_cases", "new_deaths", "total_deaths", "new_tests", "total_tests", "new_vaccinations", "total_vaccinations"]].sum().reset_index()
countries_per_day['date'] = pd.to_datetime(countries_per_day['date'])

# Create smaller DataFrames for each country
country_dataframes = {country: group for country, group in countries_per_day.groupby('location')}

# Convert country DataFrames to JSON format and save to files
for country, data in country_dataframes.items():
    data.to_json(path + "countries/" + country + '.json', orient='records', date_format='iso', default_handler=str)

# Select columns for testing data
testing_data = df[['location', 'date', 'total_tests', 'positive_rate', 'population']]

# Drop rows with missing values in the selected columns
testing_data = testing_data.dropna(subset=['total_tests', 'positive_rate', 'population'])
testing_data['date'] = pd.to_datetime(testing_data['date'])

# Group by date and calculate averages
grouped_data = testing_data.groupby('date').agg({
    'total_tests': 'sum',
    'positive_rate': 'mean',
    'population': 'first'  # Assuming 'population' is constant for each date
}).reset_index()

# Calculate tests per thousand
grouped_data['tests_per_thousand'] = (grouped_data['total_tests'] / grouped_data['population']) * 1000

# Sort the data by date
grouped_data = grouped_data.sort_values('date')


# Convert grouped data to JSON format and save to file
convert_to_json(grouped_data, 'testing_data')
