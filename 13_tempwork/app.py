from flask import Flask

app = Flask(__name__)

@app.route("/occupyflaskst")
def main():
    return ""

app.run()
