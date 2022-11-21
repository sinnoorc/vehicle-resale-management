import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from matplotlib import style

df=pd.read_csv("/car.csv")

car_count=df['Make'].value_counts()

result = car_count.head(5)

plt.style.use('dark_background')
result.plot()

plt.show()