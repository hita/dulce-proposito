from flask import Flask, render_template
import os

app = Flask(__name__, 
    static_folder='static',  # Explicitly set static folder
    template_folder='templates'  # Explicitly set template folder
)

@app.route('/')
def root():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)