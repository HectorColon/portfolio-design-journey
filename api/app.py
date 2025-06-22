import os
import logging
from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from flask_mail import Mail, Message
from dotenv import load_dotenv
from datetime import datetime

app = Flask(__name__)
logger = app.logger.setLevel(logging.DEBUG)

cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

load_dotenv() # Load environment variables from .env
# Flask-Mail config
app.config['MAIL_SERVER'] = 'smtp.gmail.com'  # Example: Gmail
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv('GMAIL_USER') 
app.config['MAIL_PASSWORD'] = os.getenv('GMAIL_PASSWORD')   
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('GMAIL_USER')

mail = Mail(app)

@app.route('/hello', methods=["GET"])
@cross_origin()
def hello():
    response = jsonify(message="Hello from Flask!")
    return response

@app.route('/send-email', methods=['POST'])
@cross_origin()
def send_email():
    logger.info("📩 Request received to send email.")
    data = request.json
    subject = data.get('subject')
    body = f'''
    Date {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}
    
    From: {data.get('name')}
    {data.get('email')}

    {data.get('message')}
    '''

    logger.debug(f"📩 Email data: {data}")
    
    if not subject or not body:
        return jsonify(error="Missing fields"), 400

    try:
        msg = Message(subject=subject, recipients=[os.getenv('GMAIL_USER')], body=body)
        mail.send(msg)
        logger.info("📧 email sent.")
        return jsonify(message="Email sent successfully!"), 200
    except Exception as e:
        return jsonify(error=str(e)), 500

# CORS Headers 
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization,true')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response

if __name__ == '__main__':
    app.run(debug=True)
