# Chat en direct TikTok & Twitch

Application web permettant d'afficher en temps réel les messages de chat provenant simultanément de TikTok Live et Twitch dans une interface unique.

<img width="1902" height="906" alt="IVaDyhE" src="https://github.com/user-attachments/assets/fa228465-32ec-4d44-8ca6-8a362046da82" />

## 📋 Prérequis

- [Node.js](https://nodejs.org/) (version 14 ou supérieure)
- npm (inclus avec Node.js)

## 🚀 Installation

1. **téléchargez les fichier sur le discord**

2. **Installez les dépendances**
   Exécuter le install.bat

3. **Modifier le fichier de configuration**  
   Remplacez les valeurs par vos identifiants réels :
   - `tiktokUsername` : nom d'utilisateur TikTok (sans @)
   - `twitchChannel` : nom de votre chaîne Twitch (sans #)

## ▶️ Démarrage

Lancez le serveur avec start.bat

Vous devriez voir :
```
🌐 Serveur web démarré : http://localhost:3000
🎉 Connecté au live TikTok de @VotreNom
🎮 Connecté au chat Twitch de #VotreChaine
```

Ouvrez votre navigateur à l'adresse : **http://localhost:3000**

## 🎨 Fonctionnalités

- ✅ Affichage en temps réel des messages TikTok et Twitch
- ✅ Couleurs différentes par plateforme (TikTok en cyan, Twitch en violet)
- ✅ Liens cliquables vers les profils des utilisateurs
- ✅ Détection des cadeaux TikTok
- ✅ Défilement automatique avec limite de hauteur
- ✅ Interface sombre optimisée pour le streaming

### Utiliser avec OBS Studio
1. Ajoutez une source "Navigateur"
2. URL : `http://localhost:3000`
3. Largeur/Hauteur : selon vos besoins
4. Cochez "Actualiser le cache de la page"

## 📝 Notes

- Le live TikTok doit être actif pour recevoir les messages
- Assurez-vous que votre chaîne Twitch est accessible publiquement
- Les messages sont supprimés automatiquement quand le chat dépasse 790px de hauteur

## 🐛 Dépannage

**Erreur de connexion TikTok** : Vérifiez que le nom d'utilisateur est correct et que le live est actif.

**Erreur de connexion Twitch** : Vérifiez le nom de la chaîne dans `config.js`.

**Le serveur ne démarre pas** : Vérifiez que le port 3000 n'est pas déjà utilisé.

## 📄 Licence

Projet libre d'utilisation. Powered by DeadTriX.

---

**Développé pour faciliter l'interaction avec vos communautés TikTok et Twitch simultanément ! 🎮🎉**
