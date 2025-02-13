from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__, 
            static_url_path='/static',
            static_folder='static',
            template_folder='templates')

@app.route('/')
def root():
    return render_template('index.html')

@app.route('/<path:path>')
def static_files(path):
    return send_from_directory('.', path)