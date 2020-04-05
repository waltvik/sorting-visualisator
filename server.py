import random

from flask import Flask, render_template, url_for, request

app = Flask(__name__)


@app.route('/')
def index():
    rand = random_filler()
    return render_template('layout.html', rand=rand)


def random_filler():
    return [random.randint(50, 600) for x in range(1, 101)]


def main():
    app.run(debug=True)


if __name__ == '__main__':
    main()
