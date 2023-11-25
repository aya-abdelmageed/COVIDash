# Import pandas library
import pandas as pd

# Define the URL of the data set
url = "https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/owid-covid-data.csv"

# Read the data set from the URL and store it in a pandas dataframe
df = pd.read_csv(url)

# Export the dataframe to a Google Sheets spreadsheet
df.to_csv("covid-19-data.csv")

