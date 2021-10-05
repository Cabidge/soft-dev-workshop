# Fabulous Frogs: David Chong (with Fluff), Wen Hao Dong (with Jal Hordan), and Austin Ngan (with Gerald)
# SoftDev
# 2021-10-04

from flask import Flask
import occupations
app = Flask(__name__)

@app.route("/")
def h():
    return f"""
        <h1>
            Fabulous Frogs:
            David Chong (with Fluff),
            Wen Hao Dong (with Jal Hordan),
            and Austin Ngan (with Gerald)
        </h1>
        {"<br>".join(occupations.jobs)}
        <br>
        <b>Random weighted occupation:</b> {occupations.weighted_selection()}
    """

if __name__ == "__main__":
    app.debug = True
    app.run()
