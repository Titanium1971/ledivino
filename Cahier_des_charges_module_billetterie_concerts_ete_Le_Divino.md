# Cahier des charges
## Module billetterie concerts d'ete - Le Divino (Agde)

## 1) Contexte et objectif
Le Divino souhaite ajouter au site un module permettant de publier les concerts d'ete, d'ouvrir une billetterie en ligne avec des tarifs differencies selon l'emplacement, et de gerer les reservations en temps reel.

Objectif principal : vendre des places directement sur le site avec une experience simple pour les clients et un pilotage fiable cote back-office.

## 2) Perimetre fonctionnel

### 2.1 Gestion des concerts (back-office)
- Creation/modification/suppression d'un concert
- Donnees : titre, artiste, date, heure, visuel, description, capacite, statut (brouillon/ouvert/complet/ferme)
- Parametrage des horaires de vente (ouverture et fermeture)

### 2.2 Plan et tarification
Deux modes prevus :
- Mode A (simple) : zones tarifaires (VIP, standard, terrasse, etc.)
- Mode B (avance) : places numerotees selon un plan pre-etabli

Regles de prix :
- Prix par zone ou par categorie de place
- Possibilite de plusieurs categories de tarifs (plein tarif, promo, etc.)

### 2.3 Parcours de reservation (front)
- Selection du concert
- Selection zone/place sur plan
- Ajout au panier
- Blocage temporaire de la place pendant le paiement
- Validation de commande

### 2.4 Paiement en ligne
- Integration Stripe (CB)
- Confirmation immediate apres paiement reussi
- Gestion des echecs de paiement (annulation du blocage et remise en disponibilite)

### 2.5 E-ticket et confirmations
- Envoi email de confirmation
- Generation d'un e-ticket avec QR code
- Informations minimales : evenement, place/zone, date, identifiant commande

### 2.6 Outils d'exploitation (back-office)
- Tableau de bord ventes (total, billets vendus, reste)
- Liste participants telechargeable (CSV)
- Suivi des commandes (payees/en attente/annulees)
- Fermeture manuelle des ventes

## 3) Exigences techniques et qualite
- Anti double-reservation en temps reel (verrouillage transactionnel)
- Compatibilite mobile et desktop
- Performance : affichage rapide du plan et checkout fluide
- Journalisation des actions sensibles (paiement, annulation, remboursement)
- Sauvegarde reguliere de la base billetterie

## 4) Conformite et cadre legal
- RGPD : minimisation des donnees, consentement, politique de confidentialite
- Mentions billetterie et conditions d'annulation/remboursement
- Securisation des paiements via prestataire certifie (Stripe)

## 5) Lots de realisation proposes

### Lot 1 - Essentiel (demarrage rapide)
- Gestion concerts
- Zones tarifaires (sans plan numerote complet)
- Reservation + paiement Stripe
- Email confirmation + e-ticket QR
- Back-office simple

### Lot 2 - Pro (objectif principal)
- Plan de salle interactif
- Places numerotees et tarifs par emplacement
- Exports avances et suivi detaille des ventes

### Lot 3 - Evolutions
- Codes promo
- Tarification dynamique selon remplissage/date
- Liste d'attente
- Regles de remboursement plus fines

## 6) Estimation commerciale (reference futurs clients)
- Pack Essentiel : 3 500 a 5 500 EUR HT
- Pack Pro : 7 500 a 12 000 EUR HT
- Pack Premium : 12 000 a 18 000 EUR HT

## 7) Conditions Le Divino (prix ami / laboratoire)
Prix specifique convenu pour Le Divino :
- Module (base Pack Pro) : 4 900 EUR HT
- Maintenance : 90 EUR HT/mois pendant 6 mois, puis 190 EUR HT/mois

Contrepartie partenariat :
- Retours d'usage terrain
- Priorisation des ajustements pour industrialisation future

## 8) Planning indicatif
- Cadrage detaille : 3 a 5 jours
- Lot 1 : 1 a 2 semaines
- Lot 2 : 2 a 4 semaines
- Recette + mise en production : 3 a 5 jours

Delai total cible : 4 a 6 semaines selon validations et disponibilite des contenus.

## 9) Livrables
- Module billetterie integre au site
- Back-office de gestion concerts/billets
- Documentation d'exploitation (guide court)
- Procedure de support et maintenance

## 10) Prochaines actions (demarrage immediat)
- Valider le mode principal de plan (zones seules ou places numerotees)
- Valider les categories tarifaires initiales
- Valider les regles de remboursement/annulation
- Lancer le lot de cadrage technique
