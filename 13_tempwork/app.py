from flask import Flask, render_template

app = Flask(__name__)

@app.route("/occupyflaskst")
def main():
    return render_template("tablified.html")

if __name__ == "__main__":
    app.debug = True
    app.run()
