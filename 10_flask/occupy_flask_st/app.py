from flask import Flask
import occupations
app = Flask(__name__)

@app.route("/")
def h():
    return f"""
        {"<br>".join(occupations.jobs)} 
        <br>
        <b>Random weighted occupation:</b> {occupations.weighted_selection()}
    """

if __name__ == "__main__":
    app.debug = True
    app.run()
