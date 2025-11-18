---
title: "Node.js & Express.js Learning Project"
description: "A comprehensive REST API built for learning backend development fundamentals"
author: "Abbosbek Sulaymonov"
version: "1.0.0"
---

import { Callout } from 'nextra/components'
import { Steps } from 'nextra/components'

# Node.js & Express.js Learning Project

<Callout type="info">
  A comprehensive REST API built with Node.js, Express.js, and MongoDB for learning backend development fundamentals.
</Callout>

## 📚 Project Overview

This is a full-featured backend API demonstrating core concepts of Node.js and Express.js development, including authentication, authorization, CRUD operations, validation, and middleware implementation.

## ✨ Features

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
  <div className="border rounded-lg p-4">
    <h3 className="font-bold">🔐 Authentication & Authorization</h3>
    <ul>
      <li>JWT-based authentication</li>
      <li>Password hashing with bcrypt</li>
      <li>Protected routes with middleware</li>
    </ul>
  </div>
  
  <div className="border rounded-lg p-4">
    <h3 className="font-bold">🌐 RESTful API Design</h3>
    <ul>
      <li>Posts management (CRUD)</li>
      <li>User management</li>
      <li>Clean route structure</li>
    </ul>
  </div>
  
  <div className="border rounded-lg p-4">
    <h3 className="font-bold">✅ Data Validation</h3>
    <ul>
      <li>Request validation</li>
      <li>Input sanitization</li>
      <li>Error handling</li>
    </ul>
  </div>
  
  <div className="border rounded-lg p-4">
    <h3 className="font-bold">💾 Database Integration</h3>
    <ul>
      <li>MongoDB with Mongoose</li>
      <li>Schema modeling</li>
      <li>Relationships</li>
    </ul>
  </div>
</div>

## 🛠️ Tech Stack

| Category | Technology | Version |
|----------|-----------|---------|
| **Runtime** | Node.js | - |
| **Framework** | Express.js | 4.17.2 |
| **Database** | MongoDB | - |
| **ODM** | Mongoose | 6.1.5 |
| **Authentication** | jsonwebtoken | 9.0.2 |
| **Password Hashing** | bcryptjs | 3.0.3 |
| **Validation** | express-validator | 5.3.1 |
| **Logging** | Morgan | 1.10.0 |
| **Environment** | dotenv | 10.0.0 |
| **Dev Tool** | Nodemon | 2.0.15 |

## 📁 Project Structure

```bash
nodeapi/
├── routes/
│   ├── root.js          # Main router - aggregates all routes
│   ├── post.js          # Post routes with CRUD operations
│   ├── user.js          # User routes with profile management
│   └── auth.js          # Authentication routes (login/register)
├── controller/
│   ├── post.js          # Post business logic & CRUD operations
│   ├── user.js          # User business logic & profile management
│   └── auth.js          # Authentication logic (register/login)
├── helper/
│   ├── middleware/
│   │   └── authMiddleware.js  # JWT verification middleware
│   ├── validators/
│   │   ├── post.js      # Post validation rules
│   │   ├── user.js      # User validation rules
│   │   └── auth.js      # Auth validation rules
│   └── jsonwebtoken.js  # JWT token generation & verification utilities
├── models/
│   ├── user.js          # User Mongoose schema
│   └── post.js          # Post Mongoose schema
├── app.js               # Application entry point
├── package.json         # Project dependencies
└── .env.local          # Environment variables (not in git)
```

## 🚀 Getting Started

### Prerequisites

<Callout type="warning">
  Make sure you have the following installed on your system:
</Callout>

- Node.js (v14 or higher recommended)
- MongoDB (local installation or Atlas account)
- npm or yarn package manager

### Installation

<Steps>

### Clone the repository

```bash
git clone <your-repo-url>
cd nodeapi
```

### Install dependencies

**Using npm:**
```bash
npm install
```

**Using yarn:**
```bash
yarn install
```

**Using pnpm:**
```bash
pnpm install
```

### Configure environment variables

Create a `.env.local` file in the root directory:

```env
PORT=8080
MONGO_URI=mongodb://localhost:27017/nodeapi
JWT_SECRET_KEY=your-super-secret-jwt-key-change-this-in-production
```

<Callout type="error">
  **Never commit `.env.local` to version control!** Add it to `.gitignore`.
</Callout>

### Start MongoDB

**Option 1: Local MongoDB**
```bash
# Start MongoDB service
mongod
```

**Option 2: MongoDB Atlas**
```bash
# Use your MongoDB Atlas connection string in .env.local
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
```

### Run the application

**Development mode (with auto-restart):**
```bash
npm run dev
```
The API will be available at `http://localhost:8080`

**Production mode:**
```bash
node app.js
```

</Steps>

## 📡 API Endpoints

### Authentication Endpoints

| Method | Endpoint | Description | Auth Required | Validation |
|--------|----------|-------------|---------------|------------|
| `POST` | `/auth/register` | Register new user | ❌ | ✅ |
| `POST` | `/auth/login` | Login user | ❌ | ✅ |

#### Register Example

```javascript
POST /auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

#### Login Example

```javascript
POST /auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "message": "User logged in successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### Posts Endpoints

| Method | Endpoint | Description | Auth Required | Validation |
|--------|----------|-------------|---------------|------------|
| `GET` | `/posts` | Get all posts | ❌ | ❌ |
| `GET` | `/posts/:id` | Get single post | ❌ | ❌ |
| `POST` | `/posts/create` | Create new post | ✅ | ✅ |
| `PUT` | `/posts/update/:id` | Update post | ✅ | ✅ |
| `DELETE` | `/posts/delete/:id` | Delete post | ❌ | ❌ |

<Callout type="warning">
  **Security Note:** Delete operations should require authentication. Consider adding `authMiddleware` to the delete route.
</Callout>

#### Create Post Example

```javascript
POST /posts/create
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json

{
  "title": "My First Post",
  "body": "This is the body content of my first post",
  "owner": "507f1f77bcf86cd799439011"
}
```

#### Get All Posts Example

```javascript
GET /posts
```

**Response:**
```json
{
  "posts": [
    {
      "id": "507f1f77bcf86cd799439011",
      "title": "My First Post",
      "body": "This is the body content...",
      "owner": "507f1f77bcf86cd799439011",
      "createdAt": "2024-01-15T10:30:00Z"
    }
  ]
}
```

### Users Endpoints

| Method | Endpoint | Description | Auth Required | Validation |
|--------|----------|-------------|---------------|------------|
| `GET` | `/users` | Get all users | ❌ | ❌ |
| `GET` | `/users/:id` | Get single user | ❌ | ❌ |
| `PUT` | `/users/update/:id` | Update user | ✅ | ✅ |
| `DELETE` | `/users/delete/:id` | Delete user | ✅ | ❌ |

#### Update User Example

```javascript
PUT /users/update/507f1f77bcf86cd799439011
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "jane@example.com"
}
```

## 🔐 Authentication Flow

### How JWT Authentication Works

```mermaid
sequenceDiagram
    participant Client
    participant API
    participant Database
    
    Client->>API: POST /auth/register (credentials)
    API->>Database: Create user with hashed password
    Database-->>API: User created
    API->>API: Generate JWT token
    API-->>Client: Return token + user data
    
    Client->>API: POST /auth/login (credentials)
    API->>Database: Find user & verify password
    Database-->>API: User found
    API->>API: Generate JWT token
    API-->>Client: Return token + user data
    
    Client->>API: POST /posts/create (with token)
    API->>API: Verify JWT token via authMiddleware
    API->>Database: Create post
    Database-->>API: Post created
    API-->>Client: Return created post
```

### Authentication Implementation Details

**Registration Process:**
1. Validate user input (name, email, password)
2. Check if user already exists
3. Hash password using bcrypt (10 salt rounds)
4. Generate JWT token
5. Save user to database
6. Return token and user data

```javascript
// Registration flow
User.findOne({ email: body.email }).then((user) => {
  if (user) {
    return res.status(400).send({ error: "User already exists" });
  }
  
  bcrypt.hash(body.password, 10, (err, hashedPassword) => {
    userObj.password = hashedPassword;
    const token = generateAuthToken(userObj, process.env.JWT_SECRET_KEY);
    
    const newUser = new User(userObj);
    newUser.save().then(() => {
      return res.send({
        message: "User registered successfully",
        token: token,
        user: { id: newUser._id, name: newUser.name, email: newUser.email }
      });
    });
  });
});
```

**Login Process:**
1. Validate credentials (email, password)
2. Find user by email
3. Compare password with hashed password
4. Generate JWT token
5. Return token and user data

```javascript
// Login flow
User.findOne({ email: body.email }).then((user) => {
  if (!user) {
    return res.status(400).send({ error: "Invalid email or password" });
  }
  
  bcrypt.compare(body.password, user.password, (err, isMatch) => {
    if (err || !isMatch) {
      return res.status(400).send({ error: "Invalid email or password" });
    }
    
    const token = generateAuthToken(userObj, process.env.JWT_SECRET_KEY);
    return res.send({
      message: "User logged in successfully",
      token: token,
      user: { id: user._id, name: user.name, email: user.email }
    });
  });
});
```

### Using Protected Routes

Include the JWT token in the `Authorization` header for all protected endpoints:

```bash
Authorization: Bearer <your-jwt-token>
```

<details>
<summary><strong>Example using cURL</strong></summary>

```bash
curl -X POST http://localhost:8080/posts/create \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"title":"New Post","body":"Body content here","owner":"USER_ID"}'
```
</details>

<details>
<summary><strong>Example using JavaScript Fetch</strong></summary>

```javascript
fetch('http://localhost:8080/posts/create', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'New Post',
    body: 'Body content here',
    owner: userId
  })
})
```
</details>

<details>
<summary><strong>Example using Axios</strong></summary>

```javascript
axios.post('http://localhost:8080/posts/create', {
  title: 'New Post',
  body: 'Body content here',
  owner: userId
}, {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
```
</details>

## 🔍 Key Learning Concepts

### 1. Middleware Implementation

This project demonstrates several middleware patterns:

```javascript
// Custom middleware - executed for every request
const customMiddleware = (req, res, next) => {
  console.log('middleware applied!!!');
  next();
};

// Authentication middleware - protects routes
function authMiddleware(req, res, next) {
  let token = req.header("Authorization");
  if (!token) return res.status(401).json({ error: "Access denied" });
  
  token = token.replace("Bearer ", "");
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
}

// Validation middleware - validates input
router.post(
  "/create",
  [validator.postValidator, authMiddleware],
  postController.createPost
);
```

**Types of Middleware:**
- **Application-level**: `app.use()` - Applied to all routes
- **Router-level**: `router.use()` - Applied to specific router
- **Built-in**: `express.json()`, `express.urlencoded()`
- **Third-party**: `morgan`, `body-parser`, `express-validator`
- **Custom**: `authMiddleware`, `customMiddleware`
- **Error-handling**: Special 4-parameter signature

### 2. Route Organization

Clean separation of concerns with modular routing:

```javascript
// routes/root.js - Central router
router.use("/posts", postRoutes);
router.use("/users", userRoutes);
router.use("/auth", authRoutes);

// Each route file handles specific domain
// posts.js → Post-related endpoints
// users.js → User-related endpoints
// auth.js → Authentication endpoints
```

### 3. Request Validation

All user inputs are validated using express-validator (legacy API):

```javascript
// Validation chain example - Post Validator
postValidator: (req, res, next) => {
  // Validate title
  req.check("title", "Write a title ...").notEmpty();
  req.check("title", "Title must be between 4 and 150 characters")
    .isLength({ min: 4, max: 150 });

  // Validate body
  req.check("body", "Write a body ...").notEmpty();
  req.check("body", "Body must be between 4 and 1500 characters")
    .isLength({ min: 4, max: 1500 });

  // Validate owner
  req.check("owner", "Post must have an owner").notEmpty();

  // Check for errors
  const errors = req.validationErrors();
  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }

  next();
}
```

**Validation Features:**
- **Field validation**: Check for required fields
- **Length validation**: Ensure proper string lengths
- **Format validation**: Email format, patterns
- **Custom error messages**: User-friendly error responses
- **Error handling**: Returns first validation error

**Validation Rules Summary:**

| Field | Validator | Rules |
|-------|-----------|-------|
| **User Name** | `registerValidator`, `updateUser` | Required, 4-30 characters (register), 4-50 characters (update) |
| **Email** | `registerValidator`, `loginValidator`, `updateUser` | Required, 3-32 characters, must contain `@` symbol |
| **Password** | `registerValidator`, `loginValidator` | Required, minimum 6 characters |
| **Post Title** | `postValidator` | Required, 4-150 characters |
| **Post Body** | `postValidator` | Required, 4-1500 characters |
| **Post Owner** | `postValidator` | Required, must be valid User ID |

### 4. Database Connection

MongoDB connection with error handling:

```javascript
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("db connected"));

mongoose.connection.on("error", (err) => 
  console.log(`Error: ${err.message}`)
);
```

### 5. Environment Variables

Secure configuration management:

```javascript
dotenv.config({ path: path.resolve(__dirname, ".env.local") });

const port = process.env.PORT || 8080;
const mongoUri = process.env.MONGO_URI;
const jwtSecretKey = process.env.JWT_SECRET_KEY;
```

**Environment Variables Used:**
- `PORT` - Server port (default: 8080)
- `MONGO_URI` - MongoDB connection string
- `JWT_SECRET_KEY` - Secret key for JWT signing

## 🛡️ Security Best Practices

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
  <div className="border border-green-500 rounded-lg p-4">
    <h3 className="font-bold text-green-600">✅ Implemented</h3>
    <ul>
      <li>Password hashing with bcrypt</li>
      <li>JWT token authentication</li>
      <li>Input validation & sanitization</li>
      <li>Environment variables for secrets</li>
    </ul>
  </div>
  
  <div className="border border-yellow-500 rounded-lg p-4">
    <h3 className="font-bold text-yellow-600">⚠️ Consider Adding</h3>
    <ul>
      <li>Rate limiting (express-rate-limit)</li>
      <li>Helmet.js for security headers</li>
      <li>CORS configuration</li>
      <li>Request size limits</li>
    </ul>
  </div>
</div>

### Password Security

```javascript
// Passwords are hashed before storage using bcrypt
const bcrypt = require('bcryptjs');

// In auth controller - register
bcrypt.hash(body.password, 10, (err, hashedPassword) => {
  if (err) {
    return res.status(500).send({
      error: "Error hashing password",
    });
  }
  userObj.password = hashedPassword;
  // Save user with hashed password
});

// In auth controller - login
bcrypt.compare(body.password, user.password, (err, isMatch) => {
  if (err || !isMatch) {
    return res.status(400).send({
      error: "Invalid email or password",
    });
  }
  // Password matches, generate token
});
```

### JWT Token Security

<Callout type="info">
  **Token Security Features:**
  - Tokens generated using `jsonwebtoken` library
  - Secret key stored in environment variables (`JWT_SECRET_KEY`)
  - Tokens verified on protected routes via `authMiddleware`
  - Token extracted from `Authorization: Bearer <token>` header
  - Invalid tokens return 401 Unauthorized error
</Callout>

## 📝 Code Examples

### Creating a New Controller

```javascript
// controller/post.js
const Post = require("../models/post");

const postController = {
  createPost: (req, res) => {
    const post = new Post(req.body);

    post.save().then((result) => {
      res.json({
        post: result,
      });
    });
  },
  
  getPosts: (req, res) => {
    Post.find()
      .select("id title body")
      .then((posts) => {
        res.json({
          posts: posts,
        });
      })
      .catch((err) => {
        res.json({
          error: err,
        });
      });
  },
  
  updatePost: (req, res) => {
    const postId = req.params.id;
    const updatedData = req.body;
    
    Post.findByIdAndUpdate(postId, updatedData, { new: true })
      .then((post) => {
        res.json({
          message: "Post updated successfully",
          post: post,
        });
      })
      .catch((err) => {
        res.json({
          error: err,
        });
      });
  },
  
  deletePost: (req, res) => {
    const postId = req.params.id;

    Post.findByIdAndDelete(postId)
      .then((post) => {
        res.json({
          message: "Post deleted successfully",
          post: post,
        });
      })
      .catch((err) => {
        res.json({
          error: err,
        });
      });
  }
};

module.exports = postController;
```

### Adding Validation Rules

```javascript
// helper/validators/auth.js
const authValidators = {
  registerValidator(req, res, next) {
    // Validate name
    req.check("name", "Name is required").notEmpty();
    req.check("name", "Name must be between 4 to 30 characters")
      .isLength({ min: 4, max: 30 });

    // Validate email
    req.check("email", "Email must be between 3 to 32 characters")
      .matches(/.+\@.+\..+/)
      .withMessage("Email must contain @")
      .isLength({ min: 3, max: 32 });

    // Validate password
    req.check("password", "Password is required").notEmpty();
    req.check("password", "Password must be at least 6 characters long")
      .isLength({ min: 6 });

    // Check for errors
    const errors = req.validationErrors();
    if (errors) {
      const firstError = errors.map((error) => error.msg)[0];
      return res.status(400).json({ error: firstError });
    }

    next();
  },
  
  loginValidator(req, res, next) {
    // Validate email
    req.check("email", "Email must be between 3 to 32 characters")
      .matches(/.+\@.+\..+/)
      .withMessage("Email must contain @")
      .isLength({ min: 3, max: 32 });

    // Validate password
    req.check("password", "Password is required").notEmpty();
    req.check("password", "Password must be at least 6 characters long")
      .isLength({ min: 6 });

    // Check for errors
    const errors = req.validationErrors();
    if (errors) {
      const firstError = errors.map((error) => error.msg)[0];
      return res.status(400).json({ error: firstError });
    }

    next();
  }
};

module.exports = authValidators;
```

### Defining Mongoose Models

```javascript
// models/user.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
```

```javascript
// models/post.js
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Post", postSchema);
```

### JWT Token Generation

```javascript
// helper/jsonwebtoken.js
const jwt = require("jsonwebtoken");

const generateAuthToken = (payload, secretKey, options) => {
  return jwt.sign(payload, secretKey, options);
};

const verifyAuthToken = (token, secretKey) => {
  return jwt.verify(token, secretKey, {
    maxAge: "1d",
  });
};

module.exports = {
  generateAuthToken,
  verifyAuthToken,
};
```

**Usage in Auth Controller:**
```javascript
// Generate token during registration/login
const token = generateAuthToken(userObj, process.env.JWT_SECRET_KEY);
```

## 🧪 Testing the API

### Using Postman

<Steps>

### Import Collection

Create a new collection in Postman with all endpoints

### Set Environment Variables

```
base_url: http://localhost:8080
token: <will be set after login>
```

### Test Authentication Flow

1. Register a new user
2. Login with credentials
3. Copy the token from response
4. Use token in subsequent requests

</Steps>

### Using cURL

```bash
# Register
curl -X POST http://localhost:8080/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@test.com","password":"test123"}'

# Login
curl -X POST http://localhost:8080/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@test.com","password":"test123"}'

# Create Post (with token)
curl -X POST http://localhost:8080/posts/create \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"title":"Test Post","body":"Test body content","owner":"USER_ID"}'

# Get All Posts
curl -X GET http://localhost:8080/posts

# Get Single Post
curl -X GET http://localhost:8080/posts/POST_ID

# Update Post
curl -X PUT http://localhost:8080/posts/update/POST_ID \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated Title","body":"Updated body"}'

# Delete Post
curl -X DELETE http://localhost:8080/posts/delete/POST_ID
```

## 📊 Project Statistics

| Metric | Value |
|--------|-------|
| Total Dependencies | 9 |
| Dev Dependencies | 1 (nodemon) |
| API Endpoints | 11 |
| Protected Routes | 4 |
| Middleware Used | 6+ |

## 🚧 Future Improvements

### High Priority

- [ ] Migrate from `express-validator` v5 to latest version (v7+)
- [ ] Add comprehensive error handling middleware
- [ ] Implement authentication on DELETE operations for posts
- [ ] Convert callbacks to async/await for better error handling
- [ ] Add API response standardization
- [ ] Implement proper logging (Winston/Pino)

### Medium Priority

- [ ] Add pagination for list endpoints (posts, users)
- [ ] Implement search and filtering capabilities
- [ ] Add field selection (sparse fieldsets)
- [ ] Create API documentation (Swagger/OpenAPI)
- [ ] Add request rate limiting
- [ ] Implement token expiration and refresh tokens
- [ ] Add timestamps to models (createdAt, updatedAt)

### Low Priority

- [ ] Unit tests (Jest/Mocha)
- [ ] Integration tests (Supertest)
- [ ] Role-based access control (RBAC)
- [ ] File upload functionality for user avatars
- [ ] Email verification for new users
- [ ] Password reset flow
- [ ] Add CORS configuration
- [ ] Implement helmet.js for security headers

## 🤝 Contributing

This is a learning project, but suggestions and improvements are welcome!

<Steps>

### Fork the repository

### Create your feature branch

```bash
git checkout -b feature/amazing-feature
```

### Commit your changes

```bash
git commit -m 'Add some amazing feature'
```

### Push to the branch

```bash
git push origin feature/amazing-feature
```

### Open a Pull Request

</Steps>

## 📄 License

ISC License - feel free to use this project for learning purposes.

## 👨‍💻 Author

**Abbosbek Sulaymonov**

Full-stack developer with 4+ years of experience specializing in React, Next.js, TypeScript, and MongoDB.

## 📖 Learning Resources

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
  <div className="border rounded-lg p-4">
    <h3 className="font-bold">📚 Official Documentation</h3>
    <ul>
      <li><a href="https://expressjs.com/" target="_blank">Express.js Docs</a></li>
      <li><a href="https://docs.mongodb.com/" target="_blank">MongoDB Docs</a></li>
      <li><a href="https://mongoosejs.com/" target="_blank">Mongoose Docs</a></li>
      <li><a href="https://nodejs.org/docs/" target="_blank">Node.js Docs</a></li>
    </ul>
  </div>
  
  <div className="border rounded-lg p-4">
    <h3 className="font-bold">🎓 Learning Paths</h3>
    <ul>
      <li><a href="https://jwt.io/introduction" target="_blank">JWT Introduction</a></li>
      <li><a href="https://restfulapi.net/" target="_blank">REST API Best Practices</a></li>
      <li><a href="https://owasp.org/www-project-api-security/" target="_blank">API Security (OWASP)</a></li>
      <li><a href="https://www.npmjs.com/package/express-validator" target="_blank">Express Validator Guide</a></li>
    </ul>
  </div>
</div>

## 🙏 Acknowledgments

- Thanks to the Express.js and MongoDB communities
- Inspired by various Node.js tutorials and courses
- Built as a practical learning exercise

---

<div className="text-center mt-8 p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg">
  <h2 className="text-2xl font-bold">Happy Learning! 🚀</h2>
  <p className="mt-2">Keep building, keep learning, keep growing!</p>
</div>

---

<Callout type="info">
  **Last Updated:** November 2024 | **Version:** 1.0.0
</Callout>