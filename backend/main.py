from flask import Flask, render_template_string

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def hello_world():
    return "<P>Hello, World!</p>"


if __name__ == "__main__":
    app.run(debug=True, port=1111)