from flask import Flask, request, jsonify
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv
from flask_cors import CORS

load_dotenv()  # Load environment variables

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": ["https://phoebekardita.netlify.app", "http://localhost:5173"]}})

EMAIL_USER = os.getenv("EMAIL_USER")
EMAIL_PASS = os.getenv("EMAIL_PASS")

@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "API is working!"}), 200

@app.route("/contact", methods=["POST"])
def contact():
    try:
        data = request.json

        # Validate required fields
        required_fields = ["firstName", "email", "message"]
        for field in required_fields:
            if not data.get(field):
                return jsonify({"error": f"{field} is required"}), 400

        first_name = data.get("firstName")
        last_name = data.get("lastName", "")
        email = data.get("email")
        phone = data.get("phone", "Not provided")
        message = data.get("message")

        # Compose the email
        subject = f"Contact Form Message from {first_name}"
        body = f"""
        You have a new message from {first_name} {last_name} ({email}):
        
        Phone Number: {phone}
        
        Message: {message}
        """
        
        msg = MIMEMultipart()
        msg["From"] = EMAIL_USER  # Ensure this is the sender's email
        msg["To"] = EMAIL_USER
        msg["Subject"] = subject
        msg.attach(MIMEText(body, "plain"))

        # Connect to the email server
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(EMAIL_USER, EMAIL_PASS)
            server.sendmail(EMAIL_USER, EMAIL_USER, msg.as_string())

        return jsonify({"message": "Message sent successfully!"}), 200

    except Exception as e:
        print("Error:", e)
        return jsonify({"error": "Failed to send email."}), 500

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
