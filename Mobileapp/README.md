# MINLY Mobile App

This is the React Native (Expo) mobile application for the MINLY project. It provides a mobile-friendly interface for uploading, viewing, and interacting with media content. The app connects to the backend API to fetch and manage media data, and is designed for both iOS and Android platforms.

## Features

- Media gallery: View all uploaded media
- Media upload: Upload images from device gallery
- Like/unlike: Interact with media items
- Pull-to-refresh and error handling
- Consistent theming and mobile navigation

## Technologies Used

- React Native (Expo, TypeScript)
- React Navigation for navigation
- Axios for API requests
- Expo Image Picker for media upload
- Custom theming and error boundaries

## Key Files

- `src/components/MediaList.tsx`: Displays a list of media items
- `src/components/MediaUpload.tsx`: Handles image upload
- `src/components/MediaItem.tsx`: Displays a single media item with like/unlike
- `src/services/mediaService.ts`: API communication logic
- `src/constants/config.ts`: Theme and API configuration
- `src/screens/HomeScreen.tsx`: Main screen with upload and gallery

## How to Run

1. Install dependencies: `npm install`
2. Start the Expo server: `npx expo start`
3. Run on device/emulator using Expo Go or a simulator

## API Endpoints Used

- `GET /api/media`: Fetch all media
- `POST /api/media/upload`: Upload new media
- `POST /api/media/:id/like`: Like a media item
- `POST /api/media/:id/unlike`: Unlike a media item
