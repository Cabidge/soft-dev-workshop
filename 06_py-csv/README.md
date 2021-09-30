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

...