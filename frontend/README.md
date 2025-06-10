# MINLY Frontend

This is the React-based frontend for the MINLY project. It provides a user-friendly web interface for uploading, viewing, and interacting with media content (images/videos). The frontend communicates with the backend API to fetch and manage media data.

## Features

- Media gallery: View all uploaded media
- Media upload: Upload images/videos to the server
- Like/unlike: Interact with media items
- Responsive design for desktop and mobile
- Error handling and loading states

## Technologies Used

- React (with TypeScript)
- Axios for API requests
- React hooks and functional components
- CSS for styling

## Key Files

- `src/components/MediaList.tsx`: Displays a list of media items
- `src/components/MediaUpload.tsx`: Handles media upload
- `src/components/MediaItem.tsx`: Displays a single media item with like/unlike
- `src/services/mediaService.ts`: API communication logic

## How to Run

1. Install dependencies: `npm install`
2. Start the development server: `npm start`
3. The app will be available at `http://localhost:3000`

## API Endpoints Used

- `GET /api/media`: Fetch all media
- `POST /api/media/upload`: Upload new media
- `POST /api/media/:id/like`: Like a media item
- `POST /api/media/:id/unlike`: Unlike a media item
