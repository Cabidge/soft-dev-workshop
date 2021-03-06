# K06 -- StI/O: Devine your Destiny!

## Fabulous Frogs | Period 2

We first open the `occupations.csv` file using the `with open([filename]) as f:`
syntax which initializes a variable f with the appropriate file, and
automatically closes the file afterwards.

Next, we skip the first line of the file, which is the header containing
`Job Class,Percentage`, by calling `f.readline()`.

Then, we read the rest of the file line by line using a for-loop and calling
`line.rstrip()` to remove the trailing newline.

For each line, we call a function we made called `split_values` which converts
a given row into a tuple (a tuple stores multiple values, e.g. `("Hello", 2.4)`)
of the Job Class and Percentage and then store it in a dictionary as a key-value
pair.

### Dictionaries

Dictionaries are useful because they can store values based on a given key/label
and can later be accessed with the same key.

For example, the following dictionary:

```python
fruit_colors = {
    "Apple": "Red",
    "Banana": "Yellow",
    "Orange": "Orange"
}
```

stores a number of fruits and associates them with their color, and later on
can be accessed with the syntax `fruit_colors[fruit_name]` to get the appropriate
color.

### Lists

Lists are an ordered collection type with variable length.

"Ordered collection" means that items in the collection are each given a
numerical index based on the order they were added in.

"Variable length" means that, unlike fixed arrays, lists can change in length
after creation depending on how many items you add or remove.

For example, the following list:

```python
colors = [
    "Green",
    "Blue",
    "Violet",
    "Brown"
]
```

stores four colors, and later on can be accessed with the syntax `colors[index]`
where `index = 0` represents the first item `"Green"`, `index = 1` represents the second item `"Blue"`, and so on.

Note: lists don't have to be on multiple lines. In some cases, it would make
more sense to have it be all on one line like: `nums = [4, 3, 29, 12]`

### Basics of Github-flavoured markdown

GitHub has an [official guide](https://guides.github.com/features/mastering-markdown/) about it's flavor of markdown.

Here's a [handy website](https://markdownlivepreview.com/) to use if you're new
to writing markdown which shows a preview of what your markdown will render to
while you're writing it.

### Weighted randomized selection

In Python's built in random module, it contains a random.choices function that
can automatically select a random element from a list based on the given
weights. The following shows how the algorithm works.

#### Setup

1. Create a dictionary variable
    - This will be used to store the cumultive weights
1. Create a variable and initialize it with the value zero
    - This will be the accumulator, and stores the sum of the previous weights
1. Loop through the jobs and percentages and
    1. Add the current percentage to the accumulator.
    1. Add an entry to the dictionary with the key being the current value of
       the accumulator and value being the job.

#### Selection

1. Generate a random number between zero and the sum of all the weights but not
   including the sum.
1. Loop through the dictionary of cumultive weights until the random number
   that was generated is less than the cumulitive weight.
    - Upon finding it, return the job associated with the weight.

#### Pseudocode

```
// Setup
SET weightMap to EmptyDictionary
SET accumulator to 0.0
FOR each job, percentage in occupationData
    SET accumulator to accumulator + percentage
    ADD accumulator, job to weightMap
END FOR

// Selection
SET weightTotal to accumulator
FUNCTION weightedSelection
    SET rand to a random number between 0 and weightTotal
    FOR each cumulitiveWeight, job in weightMap
        IF rand < cumulitiveWeight THEN
            RETURN job
        END IF
    END FOR
END FUNCTION
```
