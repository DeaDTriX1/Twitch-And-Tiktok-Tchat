@echo off
title Installation Chat TikTok et Twitch
echo ================================================
echo Installation des dependances npm
echo ================================================
echo.

REM Verifier si Node.js est installe
node --version >nul 2>&1
if errorlevel 1 (
    echo [ERREUR] Node.js n'est pas installe !
    echo Telechargez-le sur : https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo [OK] Node.js et npm sont installes
echo.
echo ================================================
echo Installation en cours, patientez...
echo ================================================
echo.

npm install express socket.io tiktok-live-connector tmi.js

echo.
echo ================================================
echo Installation terminee !
echo ================================================
echo.
echo Prochaines etapes :
echo 1. Creer le fichier config.js
echo 2. Lancer start.bat
echo.
pause