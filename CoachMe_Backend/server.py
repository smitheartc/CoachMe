# 📁 server.py -----

import json
from os import environ as env
from urllib.parse import quote_plus, urlencode

from flask_cors import CORS
from flask import Flask
import os
import requests
from flask import request, jsonify
from dotenv import load_dotenv, find_dotenv
ENV_FILE = find_dotenv()
if ENV_FILE:
    load_dotenv(ENV_FILE)

app = Flask(__name__)
CORS(app)

AUTH0_DOMAIN = os.environ.get('AUTH0_DOMAIN')
AUTH0_CLIENT_ID = os.environ.get('AUTH0_CLIENT_ID')
AUTH0_CLIENT_SECRET = os.environ.get('AUTH0_CLIENT_SECRET')
AUTH0_AUDIENCE = os.environ.get('AUTH0_AUDIENCE', f'https://{AUTH0_DOMAIN}/api/v2/')

@app.route("/")
def home():
    return {"status": "Backend running"}

@app.route('/api/signup', methods=['POST'])
def api_signup():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    name = data.get('name')
    if not email or not password:
        return jsonify({'error': 'Email and password required'}), 400

    # Get Management API token
    token_url = f'https://{AUTH0_DOMAIN}/oauth/token'
    token_payload = {
        'client_id': AUTH0_CLIENT_ID,
        'client_secret': AUTH0_CLIENT_SECRET,
        'audience': AUTH0_AUDIENCE,
        'grant_type': 'client_credentials'
    }
    token_resp = requests.post(token_url, json=token_payload)
    if not token_resp.ok:
        return jsonify({'error': 'Failed to get management token', 'details': token_resp.text}), 500
    mgmt_token = token_resp.json()['access_token']

    # Create user
    user_url = f'https://{AUTH0_DOMAIN}/api/v2/users'
    user_payload = {
        'email': email,
        'password': password,
        'connection': 'Username-Password-Authentication',
        'name': name
    }
    headers = {'Authorization': f'Bearer {mgmt_token}', 'Content-Type': 'application/json'}
    user_resp = requests.post(user_url, json=user_payload, headers=headers)
    if user_resp.status_code == 201:
        return jsonify({'success': True, 'user': user_resp.json()})
    else:
        print("Auth0 error details:", user_resp.text)
        return jsonify({'error': 'Failed to create user', 'details': user_resp.text}), 400

@app.route('/api/login', methods=['POST'])
def api_login():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    if not email or not password:
        return jsonify({'error': 'Email and password required'}), 400

    token_url = f'https://{AUTH0_DOMAIN}/oauth/token'
    token_payload = {
        'grant_type': 'password',
        'username': email,
        'password': password,
        'audience': AUTH0_AUDIENCE,
        'scope': 'openid profile email',
        'client_id': AUTH0_CLIENT_ID,
        'client_secret': AUTH0_CLIENT_SECRET,
        'realm': 'Username-Password-Authentication'  # Explicitly specify the connection
    }
    token_resp = requests.post(token_url, json=token_payload)
    if token_resp.ok:
        return jsonify(token_resp.json())
    else:
        print("Auth0 login error:", token_resp.text)
        return jsonify({'error': 'Login failed', 'details': token_resp.text}), 401

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000)