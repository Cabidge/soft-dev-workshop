# Selective Soup | Justin Zou (Piggy), Wen Hao Dong (Jal Hordan), Roshani Shrestha (Pete)
# SoftDev
# K15: Sessions Greetings
# 2021-10-18

from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def root():
    pass

if __name__ == "__main__":
    app.debug = True
    app.run()
