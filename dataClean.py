import pandas as pd
import numpy as np


df = pd.read_csv("covid-19-data.csv")
# print(df.head())
print(df.info())
# print(df.iloc[0:5,0:])
missing_val = df.isnull().sum()
print(missing_val)

print(df.describe())
# duplicates = df.duplicated()
# print(duplicates.sum())
# df = df.drop_duplicates()

# s = df.isna().all()
# print(s[s == True])