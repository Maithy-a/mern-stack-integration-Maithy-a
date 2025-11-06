# Mern Blog Backend

This is the backend API for a MERN stack blogging platform.
It handles user authentication, post management, and category endpoints, using Express, MongoDB (Mongoose), and JWT-based authentication.

## Features

- 🔐 JWT Authentication (Register, Login, Get User)
- 📝 Post Management (CRUD operations with validation)
- 🗂️ Categories API (placeholder for future expansion)
- 🖼️ Image Uploads using multer
- ⚙️ Environment Configuration via .env
- 🧱 MongoDB Integration with Mongoose

## Folder Structure

```code
server/
├── controllers/
│   ├── authController.js
│   └── postController.js
├── middleware/
│   └── auth.js
├── models/
│   ├── User.js
│   └── Post.js
├── routes/
│   ├── auth.js
│   ├── posts.js
│   └── categories.js
├── .env
├── server.js
└── package.json
```

## Installation & Setup

1. Clone the Repository

```C
git clone https://github.com/PLP-MERN-Stack-Development/mern-stack-integration-Maithy-a.git
```

2. Navigate to the DIrectory

```C
cd mern-stack-integration-Maithy-a
```

3. Install dependencies

```C
npm install
```

4. Create a `.env` file

```C
PORT=5000
MONGO_URI=your_mongo_db_URL
JWT_SECRET=your-super-secret-key
JWT_EXPIRES_IN=7d
UPLOAD_DIR=uploads
```

5. Run the server

```C
npm run dev
```

If successful, you should see:

```C
Connected to MongoDB
Server running on port 5000
```

## Testing with Thunder Client (VS Code)

### Register

POST `/api/auth/register`

Body (JSON):

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "mypassword"
}
```

### Login

POST `/api/auth/login`

Body (JSON):

```json
{
  "email": "john@example.com",
  "password": "mypassword"
}
```

Copy the returned `token`

### Get Logged-in User

GET `/api/auth/me`

### Header:

| Key           | Value                   |
| ------------- | ----------------------- |
| Authorization | Bearer `YOUR_JWT_TOKEN` |

## Post Endpoints

| Method | Endpoint         | Description     | Auth Required |
| ------ | ---------------- | --------------- | ------------- |
| GET    | `/api/posts`     | Get all posts   | ❌            |
| GET    | `/api/posts/:id` | Get single post | ❌            |
| POST   | `/api/posts`     | Create post     | ✅            |
| PUT    | `/api/posts/:id` | Update post     | ✅            |
| DELETE | `/api/posts/:id` | Delete post     | ✅            |

# Dependencies

- express
- mongoose
- jsonwebtoken
- bcryptjs
- multer
- express-validator
- dotenv
- nodemon (dev)

## Example Success Response

```json
{
  "data": [
    {
      "_id": "670cc7ad85071b502a1c013d",
      "title": "My First Blog",
      "content": "This is the content of the first post.",
      "author": {
        "_id": "670cc7ad85071b502a1c013d",
        "name": "John Doe",
        "email": "john@example.com"
      },
      "createdAt": "2025-11-06T14:32:00Z"
    }
  ],
  "meta": { "total": 1, "page": 1, "limit": 12 }
}
```
