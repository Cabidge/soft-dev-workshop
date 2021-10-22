#Clyde "Thluffy" Sinclair
#SoftDev  
#skeleton/stub :: SQLITE3 BASICS
#Dec 2020 -- The Time of the Rona

import sqlite3   #enable control of an sqlite database
import csv       #facilitate CSV I/O


DB_FILE="discobandit.db"

db = sqlite3.connect(DB_FILE) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops -- you will use cursor to trigger db events

#==========================================================


# < < < INSERT YOUR TEAM'S POPULATE-THE-DB CODE HERE > > >

# -- courses.csv
c.execute("CREATE TABLE courses (code TEXT, mark INTEGER, id INTEGER)")

with open("courses.csv", "r") as courses_file:
    reader = csv.DictReader(courses_file)
    for row in reader:
        command = f"""
            INSERT INTO courses VALUES
              ({repr(row['code'])},
               {row['mark']},
               {row['id']})
        """
        c.execute(command)

# -- students.csv
c.execute("CREATE TABLE students (name TEXT, age INTEGER, id INTEGER)")

with open("students.csv", "r") as students_file:
    reader = csv.DictReader(students_file)
    for row in reader:
        command = f"""
            INSERT INTO students VALUES
              ({repr(row['name'])},
               {row['age']},
               {row['id']})
        """
        c.execute(command)

#==========================================================

db.commit() #save changes
db.close()  #close database


