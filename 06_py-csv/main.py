import random


def split_values(row):
    # Check if the row starts with a quote
    if row.startswith('"'):
        rindex = row.rindex('"')  # Finds the index of the closing quote
        label = row[1:rindex]  # Splices the string inside the quotes
        # Splices the value after the closing quote and comma
        percentage = row[rindex+2:]
    else:
        # Split the row into the Job Class and Percentage
        values = row.split(",")
        label = values[0]
        percentage = values[1]
    return label, float(percentage)


data = {}

with open("occupations.csv", "r") as f:
    f.readline()  # Skip the first line
    for line in f:
        line = line.rstrip()
        label, percentage = split_values(line)

        # Adds the Job Class and Percentage into the data dictionary as a key-value pair
        if label != "Total":
            data[label] = percentage

# Convert the jobs and percentages into their own lists
jobs = list(data.keys())
weights = list(data.values())


# Uses the built in random.choices weights parameter
# to get a weighted selection
def weighted_selection():
    return random.choices(
        population=jobs,
        weights=weights
    )[0]  # random.choices returns a list, so it needs to be indexed


# Tests if the weights are working correctly
def test():
    d = {}
    n = 0
    for i in range(100000):
        j = weighted_selection()
        if j not in d:
            d[j] = 0
        d[j] += 1
        n += 1
    for j in d:
        print(j, d[j] / n)

# test()
