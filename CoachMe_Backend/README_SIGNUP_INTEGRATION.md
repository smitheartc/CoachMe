# CoachMe Signup Integration Guide

## 🎯 Overview

Your React frontend signup pages are now connected to your Flask backend APIs! Users can create coach and athlete accounts that are stored in your SQLite database.

## 🔗 API Endpoints

### Coach Signup

- **URL**: `http://127.0.0.1:5000/coach/create/`
- **Method**: POST
- **Required Fields**:
  - `email` (string)
  - `name` (string)
  - `location1` (float) - latitude
  - `location2` (float) - longitude
  - `blurb` (string) - description
  - `sport` (string)
  - `speciality` (string)
  - `rate` (float) - hourly rate

### Athlete/Client Signup

- **URL**: `http://127.0.0.1:5000/client/create/`
- **Method**: POST
- **Required Fields**:
  - `age` (integer)
  - `location` (string)
  - `name` (string)
  - `sport` (string)
  - `skill` (integer) - 1-10 scale
  - `email` (string)

## 📝 Updated Frontend Pages

### Coach Signup Flow

1. **CoachSignup.jsx** - Collects basic info (name, DOB, address)
2. **CoachSignUp2.jsx** - Collects coaching details and submits to API

### Athlete Signup Flow

1. **AtheleteSignUp.jsx** - Collects basic info (name, DOB, address)
2. **AtheleteSignUp2.jsx** - Collects sports details and submits to API

## 🚀 How to Test

### 1. Start the Flask Backend

```bash
cd CoachMe_Backend
python app.py
```

You should see: `* Running on http://127.0.0.1:5000`

### 2. Test the APIs

```bash
python test_api.py
```

This will test both coach and client creation endpoints.

### 3. Test the Frontend

1. Start your React frontend
2. Navigate to the signup pages
3. Fill out the forms
4. Submit and check the browser console for API responses

## 🔧 Key Features Added

### State Management

- Form data is stored in localStorage between steps
- Data is combined and sent to the API on final submission

### Error Handling

- Network error alerts
- Form validation
- Loading states during submission

### Data Transformation

- **Coach**: Address is converted to lat/lng coordinates
- **Athlete**: DOB is converted to age calculation
- **Both**: Form data is mapped to API requirements

## 📊 Database Schema

### Coach Table

- id, created_at, email, name, location1, location2, blurb, sport, speciality, rate, image

### Client Table

- id, created_at, age, location, name, sport, skill, email

## 🛠️ Troubleshooting

### Common Issues

1. **"Connection refused" errors**

   - Make sure Flask server is running: `python app.py`

2. **"ModuleNotFoundError: No module named 'prisma.models'"**

   - Generate Prisma client: `prisma generate`

3. **"This endpoint is already set" error**

   - Fixed by adding unique endpoint names in app.py

4. **CORS errors in browser**
   - CORS is enabled in Flask app for development

### Testing Commands

```bash
# Test APIs
python test_api.py

# View coaches in database
cd database
python view_coaches.py

# Check Flask server status
curl http://127.0.0.1:5000/
```

## 🎉 Success Indicators

When everything is working:

- ✅ Flask server runs without errors
- ✅ `python test_api.py` shows "All tests passed"
- ✅ Signup forms submit successfully
- ✅ Users are redirected to dashboard after signup
- ✅ Data appears in SQLite database

## 🔄 Next Steps

1. **Add Authentication** - Implement login/logout
2. **Add Image Upload** - Handle coach profile pictures
3. **Add Geocoding** - Convert addresses to coordinates automatically
4. **Add Email Verification** - Verify email addresses
5. **Add Password Fields** - Secure user accounts

Your signup system is now fully functional! 🚀
