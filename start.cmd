@echo off
echo Starting MINLY...

start "MongoDB" cmd /c ""C:\Program Files\MongoDB\Server\6.0\bin\mongod.exe" --dbpath "C:\data\db""
timeout /t 3 /nobreak >nul

start "Backend" cmd /c "cd /d "%~dp0backend" && npm run dev"
timeout /t 3 /nobreak >nul

start "Frontend" cmd /c "cd /d "%~dp0frontend" && npm start"

echo Done. Services starting in background.
echo Frontend: http://localhost:3000
echo Backend: http://localhost:4000
