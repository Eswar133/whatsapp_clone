# WhatsApp Clone - Full Stack Application

## Overview

This full-stack WhatsApp clone application provides real-time messaging capabilities with a modern UI similar to WhatsApp Web. The project combines a React.js frontend with a Node.js/Express backend, using MongoDB for data storage and Socket.io for real-time communication.

## Key Features

### Core Functionality
- **User Authentication**: Secure login via Google OAuth
- **Real-time Messaging**: Instant message delivery with Socket.io
- **Contact Management**: View and search your contacts
- **Media Sharing**: Send images and PDF files
- **Online Status**: See when contacts are online/offline

### Technical Highlights
- **Frontend**: Built with React and Material-UI for a responsive interface
- **Backend**: Node.js/Express API with MongoDB for data persistence
- **Real-time Updates**: Socket.io for instant message synchronization
- **File Handling**: GridFS for efficient file storage and retrieval
- **State Management**: Context API for global state

## Setup Instructions

1. **Install Dependencies**:
   ```bash
   # For backend
   cd server
   npm install

   # For frontend
   cd ../client
   npm install
   ```

2. **Configure Environment**:
   - Create `.env` files in both server and client directories
   - Add required credentials (see individual README files)

3. **Run the Application**:
   ```bash
   # Start backend server
   cd server
   npm start

   # Start frontend (in separate terminal)
   cd ../client
   npm start
   ```

4. **Access the App**:
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:8000`

## Documentation

For detailed configuration and development guides:
- Frontend documentation available in `client/frontend.md`
- Backend documentation available in `server/backend.md`

## Technology Stack

### Frontend
- React.js
- Material-UI components
- Socket.io-client
- Context API
- Axios for API calls

### Backend
- Node.js with Express
- MongoDB with Mongoose ODM
- Socket.io server
- GridFS for file storage
- JWT for authentication

### Working Functionality - video

https://github.com/user-attachments/assets/e0cbad5c-91b9-4e76-b221-227b22992c99





