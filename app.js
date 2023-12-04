const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Définir le dossier 'public' comme dossier statique
app.use(express.static(path.join(__dirname, 'public')));

// Gérer les requêtes GET pour la racine
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
