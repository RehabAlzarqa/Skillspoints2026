# SkillsPoints

SkillsPoints est une plateforme interne de micro-learning destinée
aux employés d’une entreprise.

Elle vise à faciliter le partage des compétences entre collègues
grâce à des micro-cours, avec un système de points et de récompenses.

## État du projet

Le projet est en cours de développement.

La première version comprend les pages d’accueil, d’inscription
et de connexion, ainsi que les routes API d’authentification.

Le build et les contrôles obligatoires de la CI sont fonctionnels.
La validation complète des parcours utilisateur reste à réaliser.

Fonctionnalités prévues :
- consulter et partager des micro-cours ;
- suivre ses apprentissages ;
- terminer un cours et gagner des points ;
- échanger ses points contre des récompenses.

## Technologies

- Next.js 15 et React 19 : interface et routes API
- TypeScript : typage du code
- Tailwind CSS : styles
- PostgreSQL : base de données
- Prisma : accès aux données et migrations
- Docker Compose : environnement local
- GitHub Actions : intégration continue

## Prérequis

Pour lancer l’ensemble avec Docker :
- Git
- Docker et Docker Compose

Pour travailler sur l’application hors conteneur :
- Node.js 22 et npm
- une base PostgreSQL accessible

Le Dockerfile actuel utilise Node.js 20.
La CI utilise Node.js 22.

## Installation

### 1. Cloner le projet

```bash
git clone --branch chore/test-environment https://github.com/RehabAlzarqa/Skillspoints2026.git
cd Skillspoints2026
```

Cette branche contient la configuration présentée pour la Démo 2.

### 2. Préparer les variables d’environnement

```bash
cp .env.example .env
```

Dans `.env`, définir les paramètres de la base locale :

```dotenv
POSTGRES_DB=skillspoints_local
POSTGRES_USER=local_user
POSTGRES_PASSWORD=choisir_un_mot_de_passe_local
APP_PORT=3000
DB_PORT=5432
```

Ne jamais publier de vrais identifiants dans GitHub.
Le fichier `.env` est exclu par `.gitignore`.

## Lancement avec Docker

```bash
docker compose up --build -d
```

La configuration contient trois services :
- `db` : PostgreSQL ;
- `migrate` : application des migrations Prisma ;
- `app` : application Next.js.

L’application démarre après la réussite des migrations.
Les URL de connexion à PostgreSQL sont définies par Docker Compose.

Ouvrir : http://localhost:3000

### Vérifier les services

```bash
docker compose ps
docker compose logs app
docker compose logs migrate
```

### Arrêter les services

```bash
docker compose down
```

Les données PostgreSQL sont conservées dans un volume Docker.

## Développement hors conteneur

### 1. Démarrer uniquement PostgreSQL

```bash
docker compose up -d db
```

### 2. Compléter `.env`

Ajouter les URL de connexion correspondant aux paramètres locaux :

```dotenv
DATABASE_URL="postgresql://local_user:choisir_un_mot_de_passe_local@localhost:5432/skillspoints_local?schema=public"
DIRECT_URL="postgresql://local_user:choisir_un_mot_de_passe_local@localhost:5432/skillspoints_local?schema=public"
```

Adapter l’utilisateur, le mot de passe, le port et le nom de la base.
Les caractères spéciaux du mot de passe doivent être encodés dans les URL.

### 3. Installer et préparer l’application

```bash
npm ci
npx prisma generate
npx prisma migrate deploy
```

### 4. Démarrer le serveur de développement

```bash
npm run dev
```

Ouvrir : http://localhost:3000

## Environnement local

Par défaut :
- application : port `3000` ;
- PostgreSQL : port `5432`.

Les ports Docker sont configurables avec `APP_PORT` et `DB_PORT`.

Changer les ports ne suffit pas à isoler les données :
une instance ou un volume de base distinct est nécessaire
pour un environnement de test séparé.

Le lancement Docker exécute une version construite de l’application.
`npm run dev` permet le développement avec rechargement automatique.

## Organisation du projet

- `src/app` : pages et routes API Next.js
- `prisma/schema.prisma` : modèles et relations
- `prisma/migrations` : migrations de la base
- `.github/workflows` : configuration de la CI
- `Dockerfile` : construction de l’image de l’application
- `docker-compose.yml` : services locaux
- `.env.example` : exemple de configuration

Le frontend et le backend sont regroupés dans le même projet Next.js.
Prisma assure l’accès à PostgreSQL depuis le code serveur.

## Workflow Git

Workflow prévu :
1. créer une branche de travail depuis `develop` ;
2. réaliser et vérifier les modifications ;
3. ouvrir une pull request vers `develop` ;
4. intégrer une version validée dans `main`.

Conventions de branches :
- `feat/...` : fonctionnalité
- `fix/...` : correction
- `chore/...` : configuration ou maintenance

## Vérifications

```bash
npm run lint
npm run build
npx prisma validate
```

Les tests peuvent être lancés avec :

```bash
npm test -- --run
```

Les tests ne sont pas encore exécutés dans la CI actuelle.

## Intégration continue

Le workflow GitHub Actions se déclenche :
- à chaque push ;
- à chaque pull request ;
- manuellement.

Contrôles obligatoires :
- installation avec `npm ci` ;
- ESLint ;
- build Next.js ;
- audit des dépendances de production.

Un audit complet est également exécuté avec
`continue-on-error: true`.

Une vulnérabilité connue liée à `braces`, dans la chaîne
de dépendances d’ESLint, reste à suivre.
Le succès de la CI ne signifie donc pas l’absence
de toute vulnérabilité.

Des overrides sont utilisés pour :
- PostCSS dans Next.js : `8.5.28` ;
- deepmerge-ts dans Prisma config : `8.0.0`.

Ces overrides doivent être réévalués lors des mises à jour.

## Stratégie de déploiement

La stratégie envisagée est :
- Vercel pour l’application Next.js ;
- Supabase pour la base PostgreSQL.

Le déploiement nécessite la configuration des variables
d’environnement et l’application des migrations à la base cible.

Le workflow GitHub Actions actuel effectue les vérifications ;
il ne déploie pas l’application.