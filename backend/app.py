from flask import Flask, request, jsonify
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv
from flask_cors import CORS  # Import CORS

load_dotenv()  # Load environment variables from .env file

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": ["https://phoebekardita.netlify.app/", "http://localhost:5174"]}})

# Load your email credentials from environment variables
EMAIL_USER = os.getenv('EMAIL_USER')
EMAIL_PASS = os.getenv('EMAIL_PASS')

# Root route for health check
@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "API is working!"}), 200

@app.route("/contact", methods=["GET", "POST"])
def contact():
    if request.method == "GET":
        return jsonify({"message": "This is the contact endpoint"}), 200  # ✅ Allows GET requests

    data = request.json

    # Extract the form data from the request
    first_name = data.get('firstName')
    last_name = data.get('lastName', '')
    email = data.get('email')
    phone = data.get('phone', 'Not provided')
    message = data.get('message')

    # Set up the email content
    subject = f"Contact Form Message from {first_name}"
    body = f"""
    You have a new message from {first_name} {last_name} ({email}):
    
    Phone Number: {phone}
    
    Message: {message}
    """
    
    # Set up the email server
    try:
        msg = MIMEMultipart()
        msg['From'] = email
        msg['To'] = EMAIL_USER
        msg['Subject'] = subject
        msg.attach(MIMEText(body, 'plain'))
        
        # Connect to the Gmail SMTP server
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
            server.login(EMAIL_USER, EMAIL_PASS)
            text = msg.as_string()
            server.sendmail(email, EMAIL_USER, text)
        
        return jsonify({"message": "Message sent successfully!"}), 200
    
    except Exception as e:
        print("Error:", e)
        return jsonify({"error": "Failed to send email."}), 500

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
