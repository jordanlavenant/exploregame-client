# Explore Game - Client

# Installation 

Pour installer les dépendances, effectuez la commande à la racine du projet

```bash
npm install
```

# Configuration

Créer un fichier `.env` à la racine du projet

```bash
cp .env.defaults .env
```

Puis remplacer les urls par votre api (cf. exploregame-core project)

```
VITE_API_URL_GRAPHQL=http://localhost:8911/graphql
VITE_API_URL=http://localhost:8911
```

# Development

Pour lancer le projet en mode développement, effectuez la commande

```bash
npm run dev
```

# Routes

- `/` : Page d'accueil
- `/login` : Page de connexion
- `/register` : Page d'inscription
- `/profile` : Page de profil
- `/departments` : Page de liste des départements
- `/department/:depId/scenarios/:sceId` : Page de scénario du département