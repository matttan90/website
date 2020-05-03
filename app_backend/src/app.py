import datetime as dt
import logging
from flask import Flask, request, jsonify

app = Flask(__name__)
app.logger.setLevel(logging.INFO)

@app.route('/api/comment', methods = ['POST'])
def comment():
    app.logger.info('Comment api called')
    req_data = request.get_json()
    app.logger.info(f"Text is: {req_data['text']}")

    resp = {
        "name": "Matthew Tan",
        "time": str(dt.datetime.now().time())
    }
    
    return jsonify(resp)
