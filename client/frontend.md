# WhatsApp Clone - Frontend

A WhatsApp-like chat application built with React.js and Material-UI that provides real-time messaging functionality.

## Features

- Google OAuth authentication
- Real-time messaging using Socket.io
- Online/offline user status
- Text and file sharing (images, PDFs)
- Search functionality for contacts
- User profile view
- Responsive UI with Material-UI components

## Technologies Used

- React.js
- Material-UI for UI components
- Socket.io-client for real-time communication
- Context API for state management
- JWT for authentication
- Axios for API calls

## Installation and Setup

1. Clone the repository
2. Navigate to the client directory:
   ```bash
   cd whatsapp_clone/client
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. The application will open in your default browser at `http://localhost:3000`

## Backend Requirements

This frontend requires a backend server to be running for full functionality. Make sure you have the backend server set up and running before starting the frontend.

## Environment Variables

The application uses the following environment variables:

- `REACT_APP_GOOGLE_CLIENT_ID` - Google OAuth client ID
- `REACT_APP_SOCKET_SERVER` - Socket.io server URL (default: `ws://localhost:9000`)

## Notes

- The application uses a mock QR code for demonstration purposes
- Default profile pictures are provided for users without profile images
- The UI closely resembles WhatsApp Web's interface

