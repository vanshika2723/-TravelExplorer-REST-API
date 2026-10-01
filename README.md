# 🌍 TravelExplorer REST API

TravelExplorer REST API is a backend application built using **Node.js, Express.js, MongoDB and Mongoose**.

The API provides complete CRUD operations for managing travel destinations.

## 🚀 Features

* Create destinations
* Get all destinations
* Get a single destination
* Update destinations
* Delete destinations
* MongoDB database integration
* RESTful API architecture
* JSON request and response handling
* CORS support
* Environment variable configuration
* Request validation through Mongoose

## 🛠️ Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* JavaScript
* REST API
* Postman

## 📂 Project Structure

```text
TravelExplorer-API/
│
├── config/
│
├── controllers/
│   └── destinationController.js
│
├── models/
│   └── Destination.js
│
├── routes/
│   └── destinationRoutes.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## ⚙️ Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Move into the project:

```bash
cd TravelExplorer-API
```

Install dependencies:

```bash
npm install
```

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Never commit the `.env` file to GitHub.

## ▶️ Run the Server

Development mode:

```bash
npm run dev
```

Production/start mode:

```bash
npm start
```

Server:

```text
http://localhost:5000
```

## 🔗 API Endpoints

Base URL:

```text
http://localhost:5000/api/destinations
```

### 1. Create Destination

**POST**

```text
/api/destinations
```

Example request:

```json
{
  "name": "Royal Jaipur",
  "country": "India",
  "category": "Culture",
  "description": "Explore Jaipur's royal palaces, historic forts and traditional culture.",
  "price": 19999,
  "duration": "5 Days / 4 Nights",
  "rating": 4.9,
  "image": "https://example.com/jaipur.jpg"
}
```

Successful response:

```json
{
  "success": true,
  "message": "Destination created successfully",
  "data": {}
}
```

### 2. Get All Destinations

**GET**

```text
/api/destinations
```

Example:

```text
GET http://localhost:5000/api/destinations
```

Response:

```json
{
  "success": true,
  "count": 1,
  "data": []
}
```

### 3. Get Destination by ID

**GET**

```text
/api/destinations/:id
```

Example:

```text
GET http://localhost:5000/api/destinations/DESTINATION_ID
```

Response:

```json
{
  "success": true,
  "data": {}
}
```

### 4. Update Destination

**PUT**

```text
/api/destinations/:id
```

Example:

```text
PUT http://localhost:5000/api/destinations/DESTINATION_ID
```

Request body:

```json
{
  "name": "Royal Jaipur Updated",
  "country": "India",
  "category": "Culture",
  "description": "Explore Jaipur's royal heritage.",
  "price": 19999,
  "duration": "5 Days / 4 Nights",
  "rating": 4.9,
  "image": "https://example.com/jaipur.jpg"
}
```

Successful response:

```json
{
  "success": true,
  "message": "Destination updated successfully",
  "data": {}
}
```

### 5. Delete Destination

**DELETE**

```text
/api/destinations/:id
```

Example:

```text
DELETE http://localhost:5000/api/destinations/DESTINATION_ID
```

Successful response:

```json
{
  "success": true,
  "message": "Destination deleted successfully"
}
```

## 🧪 API Testing

All CRUD endpoints were tested using **Postman**.

| Operation | Method | Endpoint                | Status |
| --------- | ------ | ----------------------- | ------ |
| Create    | POST   | `/api/destinations`     | ✅ 201  |
| Get All   | GET    | `/api/destinations`     | ✅ 200  |
| Get One   | GET    | `/api/destinations/:id` | ✅ 200  |
| Update    | PUT    | `/api/destinations/:id` | ✅ 200  |
| Delete    | DELETE | `/api/destinations/:id` | ✅ 200  |

## 🗄️ Database

Database:

```text
MongoDB
```

ODM:

```text
Mongoose
```

Collection:

```text
destinations
```

Each destination contains:

* name
* country
* category
* description
* price
* duration
* rating
* image
* createdAt
* updatedAt

## 🔒 Security

* MongoDB credentials are stored in `.env`.
* `.env` is excluded using `.gitignore`.
* `node_modules` is excluded from Git.
* Input validation is handled by Mongoose schema rules.

## 📌 Task Requirements

* [x] Node.js backend
* [x] Express.js
* [x] REST APIs
* [x] Create operation
* [x] Read operation
* [x] Update operation
* [x] Delete operation
* [x] MongoDB integration
* [x] API endpoint testing
* [x] API documentation
* [x] GitHub-ready project

## 👩‍💻 Author

**Vanshika Khandelwal**

B.Tech – Computer Science Engineering

## 📄 License

This project is created for educational and internship purposes.
