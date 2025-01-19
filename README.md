# Explore Game - Client

Explore Game a été conçu par l’IUT d’Orléans dans le but de valoriser ses formations et activités. Il s’adresse aussi bien aux nouveaux étudiants de première année qu’à des collégiens, lycéens, ou participants à des échanges académiques. 

Ces publics peuvent ainsi découvrir l’IUT d’Orléans, ses infrastructures et ses formations lors de visites ou d’événements. Actuellement, cet outil repose sur un support papier et se structure autour de scénarios interactifs.

# Clone

Pour cloner le projet, effectuez la commande suivante

```bash
git clone https://github.com/jordanlavenant/exploregame-client.git
```

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
VITE_API_URL_GRAPHQL = http://localhost:8911/graphql
VITE_API_URL = http://localhost:8911
VITE_MAPTILER_KEY = <maptiler token>
```

> Pour obtenir un token maptiler, rendez-vous sur https://cloud.maptiler.com/account/keys/ puis créez un token.

# Development

Pour lancer le projet en mode développement, effectuez la commande

```bash
npm run dev
```

# Production

## Pre-requisites

- Docker
- Docker compose
- Node.js 20.11.1+ (included)

## Deployment

Pour déployer le projet, effectuez la commande suivante

```bash
docker compose up --build
```

# Documentations

Vous pouvez retrouver la documentation du projet dans le dossier [docs](/docs/) à la racine du projet. Vous y trouverez les documentations suivantes :

- Manuel utilisateur de l'application
- Rapport collectif

# Logins

Vous pouvez vous connecter avec les logins suivants : 

| Email          | Mot de passe |
|----------------|--------------|
| joe@doe.com    | joe          |
| jane@doe.com   | jane         |
| john@doe.com   | john         |

# Authors

4 étudiants de BUT Informatique de l'IUT d'Orléans :

- [Jordan LAVENANT](https://github.com/jordanlavenant/)
- [Léo LUCIDOR](https://github.com/leo-lucidor)
- [Daniel MALLERON](https://github.com/MalleronDaniel)
- [Nathan PIGOREAU](https://github.com/Nathan-Pigoreau)