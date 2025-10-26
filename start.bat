@echo off
echo ================================================
echo Demarrage du serveur Chat TikTok ^& Twitch
echo ================================================
echo.

REM Vérifier si Node.js est installé
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERREUR] Node.js n'est pas installe !
    echo Telechargez-le sur : https://nodejs.org/
    pause
    exit /b 1
)

REM Vérifier si index.js existe
if not exist "index.js" (
    echo [ERREUR] Le fichier index.js est introuvable !
    echo Assurez-vous que le fichier index.js est dans le meme dossier.
    pause
    exit /b 1
)

REM Vérifier si config.js existe
if not exist "config.js" (
    echo [ATTENTION] Le fichier config.js est introuvable !
    echo Creez le fichier config.js avec vos parametres.
    echo.
    pause
)

echo Lancement du serveur...
echo.
echo Appuyez sur CTRL+C pour arreter le serveur
echo.

node index.js

pause
