Sure! Here's the updated `README.md` **without** the **Getting Started** section:

---

# 📦 Chat Application Backend

This is the **backend** for a real-time chat application built with **Node.js**, **Express**, **MongoDB**, **Socket.IO**, and **GridFS** for file uploads. It provides RESTful APIs for user management, conversations, messages, and image/file uploads, along with real-time communication using WebSockets.

---

## 🚀 Features

* ✅ User Registration and Management (via Google OAuth data)
* ✅ One-to-One Chat Conversations
* ✅ Message Storage and Retrieval
* ✅ Real-Time Messaging with Socket.IO
* ✅ File/Image Uploads with GridFS
* ✅ MongoDB Atlas Integration
* ✅ Clean RESTful APIs

---

## 📁 Project Structure

```
├── controller/          # Request handlers (users, conversations, messages, images)
├── database/            # MongoDB connection logic
├── modal/               # Mongoose schemas (User, Message, Conversation)
├── routes/              # API route definitions
├── utils/               # Utility functions                 
├── index.js             # Express server entry
├── .env                 # Environment variables (not committed)
└── README.md
```

---

## ⚙️ Tech Stack

* **Backend**: Node.js, Express
* **Database**: MongoDB Atlas, Mongoose
* **File Upload**: Multer, GridFS
* **Real-time**: Socket.IO
* **Cloud**: MongoDB Atlas Cluster

---

## 🧪 API Endpoints

### 👤 User Routes

| Method | Endpoint | Description     |
| ------ | -------- | --------------- |
| POST   | `/add`   | Add a new user  |
| GET    | `/users` | Fetch all users |

---

### 💬 Conversation Routes

* **POST** `/conversation/add`
  → Creates a new conversation between two users.

* **POST** `/conversation/get`
  → Retrieves an existing conversation between two users.

---

### 📨 Message Routes

* **POST** `/message/add`
  → Sends a new message in a conversation.

* **GET** `/message/get/:id`
  → Retrieves all messages for a given conversation ID.

---

### 🖼️ File Upload Routes

* **POST** `/file/upload`
  → Uploads an image file using `multipart/form-data`.

* **GET** `/file/:filename`
  → Retrieves an uploaded image or file by filename.

---


## 🔧 Environment Variables

Create a `.env` file in the root directory and add the following:

```
DB_USERNAME=<your_db_username>
DB_PASSWORD=<your_db_password>
DB_CLUSTER=<your_mongodb_cluster_url>
DB_NAME=<your_database_name>
```

---

## 📷 File Uploads with GridFS

Uploaded files are stored in MongoDB using GridFS. You can access a file via:

```
GET /file/<filename>
```

---

## 🔌 WebSocket Events (Socket.IO)

### Client to Server Events

* `addUser` → Register user with socket
* `sendMessage` → Send message to receiver

### Server to Client Events

* `getUsers` → Emits updated online user list
* `getMessage` → Emits incoming message to receiver
---

## 🧩 Dependencies

* express
* mongoose
* socket.io
* multer
* multer-gridfs-storage
* dotenv
* cors
* body-parser
* gridfs-stream
* nodemon
---

