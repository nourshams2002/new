# MINLY - Media Management System

A simple full-stack app for uploading and managing images/videos. Built this to learn TypeScript, React, and Node.js.

## What it does

- Upload images and videos
- View them in a nice grid
- Like/unlike media
- Delete stuff you don't want
- Works on web and mobile

## Tech Stack

**Backend:**
- Node.js + Express
- MongoDB for database
- TypeScript
- Multer for file uploads

**Frontend:**
- React with TypeScript  
- Simple CSS styling
- Fetch API for backend calls

**Mobile:**
- React Native (Expo)
- Same features as web version

## Quick Start

Make sure you have Node.js and MongoDB installed first.

**Easy way - just run this:**
```
start.cmd
```

**Manual way:**
1. Start MongoDB: `mongod --dbpath "C:\data\db"`
2. Backend: `cd backend && npm install && npm run dev`
3. Frontend: `cd frontend && npm install && npm start`

## URLs

- Frontend: http://localhost:3000
- Backend API: http://localhost:4000
- Health check: http://localhost:4000/api/status

## Scripts

- `start.cmd` - Starts everything
- `stop.cmd` - Stops everything  
- `health.cmd` - Checks if services are running

## Project Structure

```
MINLY/
├── backend/     # Node.js API
├── frontend/    # React web app
├── Mobileapp/   # React Native app
└── *.cmd        # Management scripts
```

## API Endpoints

- `GET /api/media` - Get all media
- `POST /api/media` - Upload new media
- `POST /api/media/:id/like` - Like media
- `POST /api/media/:id/unlike` - Unlike media  
- `DELETE /api/media/:id` - Delete media

## Features

✅ File upload with drag & drop  
✅ Image/video preview  
✅ Like system  
✅ Delete with confirmation  
✅ Mobile responsive  
✅ Error handling  
✅ Loading states  

## Common Issues

**MongoDB won't start?**
- Make sure `C:\data\db` folder exists
- Check if MongoDB is installed properly

**Port already in use?**
- Run `stop.cmd` first
- Or kill node processes manually

**Frontend won't load media?**
- Check if backend is running on port 4000
- Check browser console for errors

## Notes

- Uploads are limited to 10MB
- Files are stored in `backend/uploads/`
- Database is called "minly"
- Everything is in TypeScript for better development

That's it! Simple media management system for learning purposes.

