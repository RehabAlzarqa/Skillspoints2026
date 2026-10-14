# SkillsPoints

SkillsPoints est une plateforme interne de micro-learning destinée
aux employés d’une entreprise.

Elle vise à faciliter le partage des compétences entre collègues
grâce à des micro-cours, avec un système de points et de récompenses.

## État du projet

Le projet est en cours de développement.

La première version comprend :
- une page d’accueil responsive ;
- un formulaire d’inscription avec validation des champs ;
- la création d’un utilisateur dans PostgreSQL via une API Next.js et Prisma ;
- la vérification des emails déjà utilisés ;
- une page de connexion et une API de vérification des identifiants.

L’inscription a été testée avec une base PostgreSQL locale dans Docker.
Les commandes ESLint et build Next.js passent en local.

Fonctionnalités prévues :
- consulter et partager des micro-cours ;
- suivre ses apprentissages ;
- terminer un cours et gagner des points ;
- échanger ses points contre des récompenses.

## Technologies

- Next.js 15 et React 19 : pages et composants de l’interface
- Next.js Route Handlers : API backend
- TypeScript : typage du code
- Tailwind CSS : styles de l’interface
- PostgreSQL : stockage des données
- Prisma : accès à la base et gestion des migrations
- bcrypt : hachage et vérification des mots de passe
- Docker Compose : lancement de PostgreSQL en local
- GitHub Actions : intégration continue


## Prérequis

- Git pour cloner le repository.
- Node.js 22 et npm pour installer et lancer l’application.
- Docker Desktop avec Docker Compose pour lancer PostgreSQL en local.

Docker Desktop doit être démarré avant de lancer la base de données.


## Installation

### 1. Cloner le projet

```bash
git clone --branch chore/test-environment https://github.com/RehabAlzarqa/Skillspoints2026.git
cd Skillspoints2026
```

### 2. Préparer les variables d’environnement

```bash
cp .env.example .env
```

Dans `.env`, remplacer `replace_with_your_password` par le mot
de passe local choisi dans `POSTGRES_PASSWORD`, `DATABASE_URL`
et `DIRECT_URL`.

Les caractères spéciaux du mot de passe doivent être encodés
uniquement dans les URL de connexion.

Le fichier `.env` est exclu par `.gitignore` et ne doit pas être
publié sur GitHub.

## Lancement en développement

L’application Next.js fonctionne sur l’ordinateur.
La base PostgreSQL fonctionne dans Docker.
Le backend accède à la base locale via Prisma.


### 1. Démarrer PostgreSQL

Ouvrir Docker Desktop, puis exécuter :

```bash
docker compose up -d db
```

Vérifier que la base est prête :

```bash
docker compose ps db
```

Attendre que le statut affiche `healthy`.


### 2. Installer les dépendances et préparer Prisma

```bash
npm ci
npx prisma generate
npx prisma migrate deploy
```

- `npm ci` installe les dépendances du projet.
- `prisma generate` génère le client Prisma.
- `prisma migrate deploy` applique les migrations à la base locale.




### 3. Démarrer le serveur de développement

```bash
npm run dev
```

Ouvrir : http://localhost:3000

## Environnement local

- Next.js fonctionne sur l’ordinateur avec `npm run dev`,
  à l’adresse http://localhost:3000.
- PostgreSQL fonctionne dans Docker, sur le port `5432`.
- Prisma utilise les variables `DATABASE_URL` et `DIRECT_URL`
  du fichier `.env` pour accéder à la base locale.
- Les données sont conservées dans le volume Docker `db_data_dev`.
- Les données locales sont séparées de celles de Supabase.

Le serveur de développement prend automatiquement en compte
les modifications du code.

## Organisation du projet

- `src/app` : pages de l’application
- `src/app/api` : routes API du backend
- `src/components` : composants de l’interface
- `src/lib/prisma.ts` : initialisation du client Prisma
- `prisma/schema.prisma` : modèles et relations des données
- `prisma/migrations` : migrations de la base
- `.github/workflows` : configuration de la CI
- `docker-compose.yml` : configuration des services Docker
- `Dockerfile` : instructions de construction de l’image Next.js
- `.env.example` : modèle des variables d’environnement

Le frontend et le backend sont regroupés dans un même projet Next.js.
Le backend utilise Prisma pour accéder à PostgreSQL.

## Workflow Git

Le projet utilise un workflow avec les branches `main`, `develop`
et des branches de travail.

- `main` : version stable
- `develop` : intégration des fonctionnalités
- `feat/...` : nouvelle fonctionnalité
- `fix/...` : correction
- `chore/...` : configuration ou maintenance

Les modifications sont réalisées sur une branche de travail,
puis proposées dans une pull request vers `develop`.

Après validation, une version stable peut être intégrée dans `main`.


## Vérifications

Vérifier le code et construire l’application :

```bash
npm run lint
npm run build
```

Vérifier la validité du schéma Prisma :

```bash
npx prisma validate
```

Contrôler les dépendances de production :

```bash
npm audit --omit=dev --audit-level=high
```

## Intégration continue

Le workflow GitHub Actions « SkillsPoints Checks » se déclenche
à chaque push, à chaque pull request et manuellement.

Les contrôles obligatoires sont :
- installation des dépendances avec `npm ci` ;
- vérification du code avec ESLint ;
- build Next.js ;
- audit des dépendances de production.

Un audit de toutes les dépendances est également exécuté.
Il est non bloquant grâce à `continue-on-error: true`.

Des vulnérabilités liées à `braces` restent signalées dans
les dépendances des outils de développement, notamment ESLint
et shadcn. Elles restent à suivre et à corriger.

Les tests automatisés ne sont pas encore exécutés dans cette CI.

Des overrides sont utilisés pour :
- PostCSS dans Next.js : `8.5.28` ;
- deepmerge-ts dans Prisma config : `8.0.0`.

Ces overrides doivent être réévalués lors des mises à jour.


## Stratégie de déploiement

Le déploiement prévu repose sur :
- Vercel pour l’application Next.js et ses routes API ;
- Supabase pour la base PostgreSQL.

Les données de développement restent dans PostgreSQL local,
exécuté avec Docker, séparément de la base utilisée pour le déploiement.

Avant le déploiement :
1. vérifier le code avec la CI ;
2. configurer `DATABASE_URL` et `DIRECT_URL` dans l’environnement
   d’hébergement pour connecter Prisma à Supabase ;
3. vérifier l’état des migrations sur la base cible et appliquer
   celles qui sont nécessaires ;
4. déployer l’application ;
5. tester l’inscription et la connexion sur la version publiée.

Les identifiants de la base ne doivent pas être stockés dans GitHub.

Le workflow GitHub Actions actuel vérifie le projet.
Il ne réalise pas encore de déploiement automatique.