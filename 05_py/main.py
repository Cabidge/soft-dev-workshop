# Wen Hao Dong
# SoftDev
# K05 -- Random Name Selector Amalgamate
# 2021-09-20

# Summary of trio discussion
# We discussed about how to combine code together and learning how each other's code worked and learned what was the good parts of each code (my input selector, file structure of Jonathan's, and Wenhao's random choice thing)

# Discoveries
# We found out that we could probably just use random.choice when we are selecting a random item from a dictionary, as well as building the database within the file instead of accessing an outside file.

# Questions
# No questions at all.

# Comments
# We should've used GitHub to get all the students names instead of using placeholder names

import random

classes = {
    "pd1": [
        "Owen Yaggy", "Haotian Gan", "Ishraq Mahid", "Ivan Lam", "Michelle Lo"
        "Christopher Liu", "Ivan Mijacika", "Lucas Lee", "Josephine Lee", "Rayat Roy",
        "Emma Buller", "William Chen", "Rachel Xiao", "Andrew Juang", "Yuqing Wu"
        "Renggeng Zheng", "Annabel Zhang", "Alejandro Alonso", "Deven Maheshwari",
        "Oscar Wang", "Tami Takada", "Yusuf Elsharawy", "Ella Krechmer", "Tomas Acuna",
        "Tina Nguyen", "Theo Fahey", "Sadid Ethun"
    ],
    "pd2": [
        "Patrick Ging", "Wenhao Dong", "Raymond Yeung", "Kevin Cao", "Michael Borczuk",
        "Alif Abdullah", "Justin Zou", "Andy Lin", "Shadman Rakib", "David Chong",
        "Daniel Sooknanan", "Cameron Nelson", "Austin Ngan", "Yaying Liang Li", "Eric Guo",
        "Noakai Aronesty", "Roshani Shrestha", "Yoonah Chang",
        "Qina Liu", "Han Zhang", "Joshua Kloepfer"
    ]
}

# get input of what period the user wants to get random person
input = input("Input period number (1 or 2)")
# see if period 1 or 2, or invalid input
if input == "1":
    # get random person from period 1
    print(random.choice(classes['pd1']))
elif input == "2":
    # get random person from period 2
    print(random.choice(classes['pd2']))
else:
    # tell user they put invalid option
    print("invalid period--please try again")
