📄 Git Workflows Documentation
1. Introduction

A Git workflow defines how a team uses branches to develop features, fix bugs, and release code.
Choosing the right workflow improves collaboration, code stability, and delivery speed.

This document compares two popular workflows:

Git Flow

Trunk Based Development

2. Git Flow
🔹 Overview

Git Flow is a structured branching model designed for projects with planned releases.
It uses multiple long-lived branches to separate development, production, and maintenance work.

🔹 Main branches

main → production-ready code

develop → integration branch for features

Other supporting branches:

feature/* → new features

release/* → release preparation

hotfix/* → urgent production fixes

🔹 Diagram
main  ────────────────●──────────────●────
                       \              \
develop ─────●────●────●────●────●────●───
               \    \         \
feature/a    feature/b     feature/c

# Feature-Based Git Workflow

## 🌿 Branches

### 🔵 main
- Production-ready code
- Always stable
- Only updated from develop

### 🟡 develop
- Main development branch
- All completed features are merged here first
- Can contain work-in-progress features

### 🟢 feature / fix / refactor branches
- Created from develop for each task
- One branch per feature or fix
- Deleted after merge

Examples:
- feature/auth
- feature/course-system
- fix/navbar-bug
- refactor/api-structure

---

## 🔀 Merge Strategy

- No direct commits to main or develop  
- All changes must go through Pull Requests  
- CI must pass before merging  
- At least one code review is required  
- Source branches are deleted after merge  

---

## 🔁 Workflow Diagram

feature/*, fix/*, refactor/*  
        ↓  
   Pull Request  
        ↓  
     develop  
        ↓  
     (release)  
        ↓  
       main
