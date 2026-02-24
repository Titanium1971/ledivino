# Cahier des charges global
## Plateforme digitale Le Divino (site + back-office + modules)

**Version:** 1.0  
**Date:** 24 fevrier 2026

## 1) Objectif
Disposer d'une plateforme web complete pour Le Divino, couvrant la presentation restaurant, la gestion quotidienne, la communication digitale, la billetterie des concerts d'ete et l'information stationnement a proximite.

## 2) Perimetre general

### 2.1 Bloc A - Site public (deja en place)
- Page Accueil
- Page Menu
- Page Reservation
- Page Evenements
- Page Contact

### 2.2 Bloc B - Back-office (deja en place)
- Authentification securisee
- Tableau de bord
- Gestion menu
- Gestion reservations
- Gestion evenements

### 2.3 Bloc C - Infrastructure technique (deja en place)
- Backend API REST FastAPI
- Base MongoDB
- Upload medias
- Responsive mobile/desktop

## 3) Modules fonctionnels (globaux)

### Module 1 - Enrichissements Web Essentiels
- Liens cliquables telephone/email
- Bouton itineraire
- Reseaux sociaux
- Open Graph et icones

### Module 2 - Avis Google
- Recuperation avis
- Affichage dynamique accueil + page dediee
- Mise a jour reguliere

### Module 3 - Carte Google Maps
- Carte interactive
- Marqueur personnalise
- Itineraire direct

### Module 4 - SEO local
- Audit technique SEO
- Balises meta et schema.org
- Sitemap, Search Console, Analytics
- Optimisations performances et requetes locales

### Module 5 - Affiches IA
- Outil de creation visuels
- Templates multi-formats
- Export HD

### Module 6 - Panneau lumineux
- Diffusion de contenus depuis dashboard
- Planning de rotation
- Monitoring de diffusion
- Materiel + installation

### Module 7 - Billetterie concerts d'ete
- Creation des concerts et parametrage ventes
- Gestion plan (zones ou places)
- Tarification differenciee par emplacement
- Reservation et paiement en ligne
- E-ticket QR code
- Suivi des ventes et export participants

### Module 8 - Parking a proximite (version 1)
- Carte des parkings proches du restaurant
- Fiches parking (nom, adresse, capacite, type gratuit/payant)
- Boutons d'itineraire direct (Google Maps / Apple Plans / Waze)
- Affichage d'un statut informatif (donnees statiques/maj manuelle)
- Ecran d'administration pour mise a jour des informations parkings

## 4) Exigences transverses
- Securite des donnees et acces admin
- Fiabilite anti double-reservation (module 7)
- Conformite RGPD
- Parcours mobile prioritaire
- Logs d'exploitation et sauvegardes

## 5) Donnees et modele metier (module 7)

### Entites principales
- Concert
- Zone
- Place
- Tarif
- Reservation
- Paiement
- Billet
- Client

### Regles metier critiques
- Une place ne peut pas etre vendue deux fois
- Blocage temporaire de place avant paiement
- Liberation automatique si paiement echoue ou timeout
- Billet emis uniquement apres paiement confirme

## 6) Parcours utilisateur cible
1. L'utilisateur choisit un concert
2. Il selectionne une zone ou une place sur plan
3. Il paie en ligne
4. Il recoit son billet par email
5. L'equipe Le Divino suit les ventes depuis l'admin

## 7) Lots de mise en oeuvre

### Lot 0 - Consolidation existant
- Verification technique de l'existant
- Harmonisation UI/UX et navigation

### Lot 1 - Modules web essentiels
- Modules 1 a 4 + module 8

### Lot 2 - Communication avancee
- Module 5
- Module 6 (si validation materiel)

### Lot 3 - Billetterie concerts
- Module 7 complet
- Recette fonctionnelle et charge

## 8) Livrables
- Code source versionne GitHub
- Documentation technique minimale
- Documentation d'exploitation back-office
- Cahier de recette
- Mise en production

## 9) KPI de succes
- Taux de conversion reservations en hausse
- Visibilite locale amelioree (SEO)
- Taux de remplissage concerts mesurable
- Facilite d'acces et de stationnement pour les clients
- Reduction du temps de gestion interne

## 10) Statut du projet a date
- Base site et back-office: realisee
- Cadrage billetterie: realise
- Consolidation globale: en cours
- Demarrage projet concret: immediat
