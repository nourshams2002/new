@echo off
echo Stopping MINLY...

taskkill /F /IM node.exe 2>nul
taskkill /F /IM mongod.exe 2>nul

echo Done.
