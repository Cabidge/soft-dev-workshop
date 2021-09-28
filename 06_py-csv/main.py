def split_values(row):
    # Check if the row starts with a quote
    if row.startswith('"'):
        rindex = row.rindex('"') # Finds the index of the closing quote
        label = row[1:rindex] # Splices the string inside the quotes
        percentage = row[rindex+2:] # Splices the value after the closing quote and comma
    else:
        values = row.split(",") # Split the row into the Job Class and Percentage
        label = values[0]
        percentage = values[1]
    return label, float(percentage)

data = {}

with open("occupations.csv", "r") as f:
    f.readline() # Skip the first line
    for line in f:
        line = line.rstrip()
        label, percentage = split_values(line)
        data[label] = percentage
