# MINLY Backend

This is the Node.js/Express backend for the MINLY project. It provides a RESTful API for managing media uploads, retrieval, and user interactions (like/unlike). The backend handles file storage, database operations, and serves as the main data provider for both the frontend and mobile applications.

## Features

- REST API for media management
- File upload and storage (images/videos)
- Like/unlike functionality for media
- MongoDB integration for persistent storage
- CORS and error handling middleware

## Technologies Used

- Node.js & Express
- MongoDB (with Mongoose)
- Multer for file uploads
- TypeScript for type safety

## Key Files

- `src/routes/media.routes.ts`: API routes for media
- `src/controllers/media.controller.ts`: Business logic for media endpoints
- `src/models/media.model.ts`: Mongoose schema for media
- `src/utils/multerConfig.ts`: File upload configuration
- `src/config/db.ts`: Database connection logic

## How to Run

1. Install dependencies: `npm install`
2. Start the server: `npm run dev` (or `npm start` for production)
3. The API will be available at `http://localhost:3000/api`

## API Endpoints

- `GET /api/media`: Get all media
- `POST /api/media/upload`: Upload new media
- `POST /api/media/:id/like`: Like a media item
- `POST /api/media/:id/unlike`: Unlike a media item
