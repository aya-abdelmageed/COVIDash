import pandas as pd
import numpy as np


df = pd.read_csv("covid-19-data.csv")

print(df.info())

missing_val = df.isnull().sum()
print(missing_val)


print(df.describe())

df = df.drop(["excess_mortality_cumulative_absolute","excess_mortality_cumulative","excess_mortality", "excess_mortality_cumulative_per_million"], axis=1)