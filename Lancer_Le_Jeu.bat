@echo off
chcp 65001 > nul
echo ========================================================
echo   LE MILLION : LE PLUS GRAND QUIZ DE FRANCE
echo ========================================================
echo Lancement du jeu en cours...
set "PATH=%LOCALAPPDATA%\Programs\nodejs;%PATH%"

start http://localhost:4173
call npm run preview -- --port 4173 --host
pause
