"""
Wen Hao Dong
SoftDev
Random Name Selector
2021-09-20
"""

import random

pd1 = [
    "Adam Smith",
    "John Smith",
    "Bob Smith",
    "Smith Smith",
]

pd2 = [
    "Jane Doe",
    "Dave Doe",
    "Jeff Doe",
    "Doe Doe",
]

# Chooses a random period then a random name from said period
rand_list = random.choice([pd1, pd2])
rand_name = random.choice(rand_list)
print(rand_name)
