import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from matplotlib import style

df=pd.read_csv("/bikes.csv")

bike_count=df['brand'].value_counts()

result = bike_count.head(5)

plt.style.use('dark_background')
result.plot()

plt.show()