# SkillsPoints Project Documentation

## 1️⃣ Project Initialization
- Creation of the Next.js project with all required configuration files:
  - `package.json`
  - `next.config.mjs`
  - `src/`
  - `public/`
- Installation of Prisma dependencies:
```bash
npm install prisma --save-dev
npm install @prisma/client
npx prisma init
```

## 2️⃣ MySQL Database Setup

Installing MySQL via Homebrew:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install mysql
brew services start mysql
```

Database & User Creation:
```sql
CREATE DATABASE rncpdb;
CREATE USER 'rncpuser'@'localhost' IDENTIFIED BY 'RncpPass2025!';
GRANT ALL PRIVILEGES ON rncpdb.* TO 'rncpuser'@'localhost';
FLUSH PRIVILEGES;
```

Verify MySQL Connection:
```bash
mysql -u rncpuser -p
```

## 3️⃣ Prisma Configuration

Update `.env` file:
```env
DATABASE_URL="mysql://rncpuser:RncpPass2025!@localhost:3306/rncpdb"
```

Sync Prisma with Database:
```bash
npx prisma db pull
npx prisma migrate dev --name init
```

## 4️⃣ Version Control with Git & GitHub

Add remote repository:
```bash
git remote add origin https://github.com/RehabAlzarqa/skillspoints.git
```

Commit & Push:
```bash
git add .
git commit -m "Initial commit with local project files"
git push -u origin main
```

## 5️⃣ Dockerization

Created Files:
- `Dockerfile` → Describes how to build and execute the Next.js application.
- `.dockerignore` → Lists files to exclude when building container context.
- `docker-compose.yml` → Orchestrates multi-container deployment.

Main Commands:
```bash
# Build Docker image
docker build -t skillspoints-app .

# Run container
docker run -d -p 80:80 skillspoints-app

# Start all services with Docker Compose
docker-compose up -d

# Stop containers
docker-compose down

# Check running containers
docker ps
```

Expected Result:
Access the Next.js application on 👉 `http://localhost:8080` (or configured port).

## 6️⃣ Technical Architecture

The architecture is built on a modern client-server model, combining Next.js, Node.js API routes, MySQL, and Docker for portability, speed, and scalability.

Structure générale

Frontend (Next.js) : interface utilisateur et consommation des données depuis l’API.

Backend (Node.js / Express) : logique métier, communication avec la base de données et endpoints REST.

Base de données (MySQL) : stockage des utilisateurs, mini-cours, points et récompenses.

Raisons du choix technique
Élément	Technologie choisie	Justification
Frontend	Next.js	Framework moderne basé sur React, SSR & SSG, performant et modulable pour des interfaces réactives.
Backend	Node.js / Express	Simple, flexible et performant pour construire des API REST.
Base de données	MySQL	Système relationnel fiable et adapté à la gestion structurée des données.
Orchestration	Docker	Facilite le déploiement et assure la compatibilité entre environnements.
Choix des patrons d’architecture


🎯 Architecture logicielle choisie : MVC pour le backend et le frontend

L’ensemble du projet repose sur le modèle MVC (Model – View – Controller), appliqué à la fois au backend et au frontend, afin de garantir une structure claire, maintenable et cohérente entre les deux couches.

Backend (Node.js / Express)

Model : gère la structure et la manipulation des données (via Prisma et MySQL).

View : non utilisée directement, les réponses sont renvoyées en JSON.

Controller : contient la logique métier et gère les routes de l’API.

Frontend (Next.js / React)

Model : représente les données reçues depuis l’API.

View : affiche les données via les composants React et les pages Next.js.

Controller : gère les interactions et la logique via les hooks React.

💡 Ce choix d’architecture MVC unifiée facilite la compréhension du code, renforce la cohérence entre les couches et simplifie la maintenance du projet.
7️⃣ Vérifications supplémentaires

Vérification des utilisateurs et privilèges MySQL :

SELECT User, Host FROM mysql.user;
SHOW GRANTS FOR 'rncpuser'@'localhost';

         ┌─────────────┐
         │  Frontend   │
         │ (React/Next)│
         └─────┬───────┘
               │  fetch / API
               ▼
         ┌─────────────┐
         │   Backend   │
         │ Next.js API │
         └─────┬───────┘
               │
   ┌───────────┴───────────┐
   │           │           │
┌─────────┐ ┌─────────┐ ┌─────────┐ ┌────────────┐
│ /users  │ │ /courses│ │ /auth   │ │ /MicroCourse│
│ route.ts│ │ route.ts│ │ route.ts│ │ route.ts   │
└─────────┘ └─────────┘ └─────────┘ └────────────┘
               │
               ▼
         ┌─────────────┐
         │ Database    │
         │ (MySQL/DB) │
         └─────────────┘
```

