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

rand_list = random.choice([pd1, pd2])
rand_name = random.choice(rand_list)
print(rand_name)
