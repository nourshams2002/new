@echo off
echo MINLY Health Check

powershell -Command "try { Invoke-WebRequest -Uri 'http://localhost:3000' -TimeoutSec 5 -UseBasicParsing | Out-Null; echo 'Frontend: Running' } catch { echo 'Frontend: Not running' }"

powershell -Command "try { Invoke-WebRequest -Uri 'http://localhost:4000/api/status' -TimeoutSec 5 -UseBasicParsing | Out-Null; echo 'Backend: Running' } catch { echo 'Backend: Not running' }"

netstat -an | find "27017" >nul 2>&1
if %errorlevel%==0 (echo MongoDB: Running) else (echo MongoDB: Not running)
