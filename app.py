from flask import Flask, render_template

app = Flask(__name__)


@app.get("/")
def home():
    return render_template("index.html")


@app.get("/menu")
def menu():
    return render_template("menu.html")


@app.get("/nosotros")
def about():
    return render_template("nosotros.html")


@app.get("/visitanos")
def visit():
    return render_template("visitanos.html")


if __name__ == "__main__":
    app.run(debug=True)
