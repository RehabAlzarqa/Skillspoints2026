# 👤 User Feature

## 🧠 Use Cases

* User registers an account
* User logs in
* User views their profile
* User updates their profile

---

## 🎯 User Actions

* Register
* Login
* Get Profile
* Update Profile

---

## 🧩 Entity: User

```json
{
  "_id": "string",
  "name": "string",
  "email": "string",
  "password": "hashed",
  "points": number
}
```

---

## ⚙️ API Design

POST /auth/register
POST /auth/login
GET /users/:id
PUT /users/:id

---

## 🔒 Business Logic

### Register:

* Email must be unique
* Password must be hashed

### Login:

* Check if email exists
* Verify password

### Update:

* User can update name and email
* Email must remain unique


The user feature handles authentication and profile management.

The main use cases are registering, logging in, viewing, and updating the profile.

The main entity is User, which contains name, email, password, and points.

For the API, I used:
POST /auth/register
POST /auth/login
GET /users/:id
PUT /users/:id

For business logic, I ensure email uniqueness and password hashing.

Use Case: user logs in
Entities: User
API: POST /auth/login
Logic:
- find user
- check password
- return response