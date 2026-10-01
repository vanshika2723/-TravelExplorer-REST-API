# 🌍 TravelExplorer API

A RESTful backend API for the TravelExplorer application built using **Node.js, Express.js, MongoDB, Mongoose, JWT and bcryptjs**.

The project provides destination management APIs along with a secure authentication system.

---

## 🚀 Features

### Destination Management

* Create destinations
* Get all destinations
* Get destination by ID
* Update destination
* Delete destination
* MongoDB database integration

### Authentication

* User registration
* User login
* Password validation
* Password hashing using bcrypt
* JWT-based authentication
* Protected profile route
* Authentication error handling
* Duplicate email validation
* Invalid/expired token handling

---

## 🛠️ Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* CORS
* dotenv
* Postman
* Git & GitHub

---

## 📁 Project Structure

```text
TravelExplorer-API/
│
├── config/
│
├── controllers/
│   ├── authController.js
│   └── destinationController.js
│
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   ├── User.js
│   └── Destination.js
│
├── routes/
│   ├── authRoutes.js
│   └── destinationRoutes.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

---

# ⚙️ Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate to the project:

```bash
cd TravelExplorer-API
```

Install dependencies:

```bash
npm install
```

---

# 🔐 Environment Variables

Create a `.env` file in the project root:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
```

Do not upload `.env` to GitHub.

---

# ▶️ Run the Project

For development:

```bash
npm run dev
```

For production:

```bash
npm start
```

Server:

```text
http://localhost:5000
```

---

# 🔑 Authentication APIs

## 1. Register User

### Endpoint

```text
POST /api/auth/register
```

### Request Body

```json
{
  "name": "Vanshika Khandelwal",
  "email": "vanshika@example.com",
  "password": "Password123"
}
```

### Successful Response

```json
{
  "success": true,
  "message": "Registration successful",
  "token": "JWT_TOKEN",
  "user": {
    "id": "USER_ID",
    "name": "Vanshika Khandelwal",
    "email": "vanshika@example.com"
  }
}
```

### Validation

* Name is required
* Email is required
* Password is required
* Password must contain at least 6 characters
* Duplicate email addresses are rejected

---

# 2. Login User

### Endpoint

```text
POST /api/auth/login
```

### Request Body

```json
{
  "email": "vanshika@example.com",
  "password": "Password123"
}
```

### Successful Response

```json
{
  "success": true,
  "message": "Login successful",
  "token": "JWT_TOKEN",
  "user": {
    "id": "USER_ID",
    "name": "Vanshika Khandelwal",
    "email": "vanshika@example.com"
  }
}
```

Incorrect credentials return:

```json
{
  "success": false,
  "message": "Invalid email or password"
}
```

---

# 3. Get My Profile 🔒

This is a protected route and requires a valid JWT token.

### Endpoint

```text
GET /api/auth/profile
```

### Request Header

```text
Authorization: Bearer YOUR_JWT_TOKEN
```

### Successful Response

```json
{
  "success": true,
  "message": "Profile fetched successfully",
  "user": {
    "_id": "USER_ID",
    "name": "Vanshika Khandelwal",
    "email": "vanshika@example.com"
  }
}
```

Without a token:

```json
{
  "success": false,
  "message": "Authentication required. Please provide a valid token."
}
```

Invalid or expired tokens return:

```json
{
  "success": false,
  "message": "Invalid or expired authentication token."
}
```

---

# 🌍 Destination APIs

## Create Destination

```text
POST /api/destinations
```

Example:

```json
{
  "name": "Jaipur",
  "country": "India",
  "category": "Culture",
  "description": "Explore the historic Pink City.",
  "price": 18999,
  "duration": "4 Days / 3 Nights",
  "rating": 4.8,
  "image": "https://example.com/jaipur.jpg"
}
```

---

## Get All Destinations

```text
GET /api/destinations
```

---

## Get Destination By ID

```text
GET /api/destinations/:id
```

Example:

```text
GET /api/destinations/DESTINATION_ID
```

---

## Update Destination

```text
PUT /api/destinations/:id
```

Example:

```json
{
  "price": 19999,
  "rating": 4.9
}
```

---

## Delete Destination

```text
DELETE /api/destinations/:id
```

---

# 🧪 API Testing

All APIs were tested using **Postman**.

| API                    | Method | Status |
| ---------------------- | ------ | ------ |
| Register User          | POST   | ✅      |
| Login User             | POST   | ✅      |
| Get Profile            | GET    | ✅      |
| Wrong Password         | POST   | ✅      |
| Duplicate Registration | POST   | ✅      |
| Invalid Token          | GET    | ✅      |
| Create Destination     | POST   | ✅      |
| Get Destinations       | GET    | ✅      |
| Get Destination        | GET    | ✅      |
| Update Destination     | PUT    | ✅      |
| Delete Destination     | DELETE | ✅      |

---

# 🔒 Security Implementation

### Password Hashing

Passwords are hashed using:

```text
bcryptjs
```

Plain-text passwords are never stored in MongoDB.

### JWT Authentication

Authentication tokens are generated using:

```text
jsonwebtoken
```

Tokens expire after:

```text
7 days
```

### Protected Routes

The authentication middleware:

```text
middleware/authMiddleware.js
```

checks the JWT token before allowing access to protected routes.

### Environment Variables

Sensitive configuration such as:

```text
MONGO_URI
JWT_SECRET
```

is stored inside `.env`.

---

# 🗄️ Database

MongoDB is used as the database and Mongoose is used for schema and database operations.

Main collections:

```text
users
destinations
```

---

# 📌 Task 3 Requirements

### 1. User Registration & Login

✅ Implemented

### 2. Password Validation & Secure Authentication

✅ Implemented

### 3. Protected Routes

✅ Implemented

### 4. Success & Error Messages

✅ Implemented

---

# 🎯 Learning Outcomes

Through this project, I learned:

* REST API development
* Express.js routing
* MongoDB database integration
* Mongoose schemas
* CRUD operations
* Password hashing
* JWT authentication
* Middleware implementation
* Protected routes
* API validation
* HTTP status codes
* Postman API testing
* Environment variable management
* Backend error handling

---

# 🔮 Future Improvements

* Refresh token authentication
* Email verification
* Forgot/reset password
* Role-based authorization
* Admin dashboard
* User booking system
* Destination search and pagination
* API rate limiting
* Deployment with MongoDB Atlas and Render

---

# 👩‍💻 Author

**Vanshika Khandelwal**

B.Tech Computer Science Engineering

GitHub: `github.com/vanshika2723`

LinkedIn: `linkedin.com/in/vanshika-khandelwal27`
