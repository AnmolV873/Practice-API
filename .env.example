# Practice API

A simple Node.js REST API for basic CRUD operations on users, built with Express and MongoDB.

## Features

- Create a user
- Get all users
- Delete a user

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Copy `.env.example` to `.env` and set your environment variables (see below).
4. Start MongoDB locally or provide a remote connection string.

### Environment Variables

Create a `.env` file in the root directory with:

```
PORT=3000
DATABASE_URL=mongodb://localhost:27017/practice-api
```

### Running the API

```
npm start
```

## API Endpoints

| Method | Endpoint         | Description         |
|--------|------------------|---------------------|
| GET    | /users/all       | Get all users       |
| POST   | /users/create    | Create a new user   |
| DELETE | /users/remove    | Delete a user       |

### Example User Object

```json
{
  "name": "John Doe",
  "age": 25,
  "Gender": "male"
}
```

## Project Structure

- `controllers/` – Route handlers
- `model/` – Mongoose models
- `routers/` – Express routers
- `services/` – Business logic

---

Feel free to contribute or use this as a learning resource!