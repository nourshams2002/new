# MINLY Project

MINLY is a full-stack media sharing platform that allows users to upload, view, and interact with media content (images/videos) via web and mobile applications. The project is divided into three main parts: backend, frontend, and mobile app.

## Project Structure

- `backend/`: Node.js/Express REST API for media management
- `frontend/`: React web application for user interaction
- `Mobileapp/`: React Native (Expo) mobile app for iOS and Android

## What is Done in Each Project

### Backend

- RESTful API for media upload, retrieval, and like/unlike
- File storage and MongoDB integration
- Handles all business logic and data persistence
- Exposes endpoints for both frontend and mobile clients

### Frontend

- React web app for browsing, uploading, and liking media
- Responsive design for desktop and mobile browsers
- Communicates with backend API for all data operations
- Modern UI/UX with error handling and loading states

### Mobile App

- React Native (Expo) app for iOS and Android
- Mobile-friendly UI for uploading, viewing, and liking media
- Uses device image picker for uploads
- Pull-to-refresh, error boundaries, and consistent theming

## Methods & Technologies Used

- **Backend:** Node.js, Express, MongoDB, Mongoose, Multer, TypeScript
- **Frontend:** React, TypeScript, Axios, CSS
- **Mobile App:** React Native, Expo, TypeScript, React Navigation, Axios, Expo Image Picker

## How to Run the Project

1. Start the backend API (`backend/`):
   - `npm install && npm run dev`
2. Start the frontend (`frontend/`):
   - `npm install && npm start`
3. Start the mobile app (`Mobileapp/`):
   - `npm install && npx expo start`

## API Endpoints

- `GET /api/media`: Fetch all media
- `POST /api/media/upload`: Upload new media
- `POST /api/media/:id/like`: Like a media item
- `POST /api/media/:id/unlike`: Unlike a media item

## Notes

- Make sure MongoDB is running for the backend
- Update API URLs in config files if running on a real device
- All apps are fully typed with TypeScript and include error handling
