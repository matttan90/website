import logging
from flask import Flask, jsonify
app = Flask(__name__)
app.logger.setLevel(logging.INFO)

@app.route('/api/')
def hello():
    app.logger.info('bye api called')
    resp = {"name": "joshua"}
    return jsonify(resp)
