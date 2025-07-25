# MERN Inventory App Setup Guide

## 1. MongoDB Setup

### Option A: MongoDB Atlas (Cloud - Recommended)
1. Go to [mongodb.com/atlas](https://mongodb.com/atlas)
2. Create a free account
3. Create a new cluster (FREE tier)
4. Set up database access:
   - Go to "Database Access" → "Add New Database User"
   - Create username and password
   - Select "Read and write to any database"
5. Set up network access:
   - Go to "Network Access" → "Add IP Address"
   - Click "Allow Access from Anywhere" (for development)
6. Get your connection string:
   - Go to "Database" → "Connect" → "Connect your application"
   - Copy the connection string

### Option B: Local MongoDB
1. Download MongoDB Community Server from [mongodb.com/try/download/community](https://mongodb.com/try/download/community)
2. Install following the wizard
3. MongoDB will run as a Windows service automatically

## 2. Environment Configuration

Create a `.env` file in the `backend` folder with the following content:

```
# For MongoDB Atlas (replace with your connection string):
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/mern-inventory?retryWrites=true&w=majority

# For Local MongoDB:
MONGO_URI=mongodb://localhost:27017/mern-inventory

# JWT Secret (change this in production):
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Server Port:
PORT=5000
```

## 3. Install Dependencies

### Backend
```bash
cd backend
npm install
```

### Frontend
```bash
cd frontend
npm install
```

## 4. Start the Application

### Start Backend
```bash
cd backend
npm run dev
```

### Start Frontend (in a new terminal)
```bash
cd frontend
npm start
```

## 5. Test the API

The backend will be running on `http://localhost:5000`

Available endpoints:
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/user` - Get user data (protected)
- `GET /api/protected` - Test protected route

## 6. Example API Usage

### Register a new user:
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "email": "test@example.com",
    "password": "password123"
  }'
```

### Login:
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
``` 