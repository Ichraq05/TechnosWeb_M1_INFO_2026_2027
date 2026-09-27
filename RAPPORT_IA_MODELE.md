# Rapport d'usage de l'IA - TP1

Pour chaque mission, détailler et fournir des explications concernant : objectif; prompt principal; plan proposé par l'agent; vérifications réalisées par le binôme; erreurs ou propositions rejetées; fichiers effectivement modifiés; preuve de fonctionnement; ce que chaque membre sait maintenant expliquer sans l'agent.


## Mission 1 – Authentification et profil

**Objectif :** compléter et comprendre l'authentification, l'inscription et la gestion du profil utilisateur dans le frontend Angular.

**Assistant utilisé :** ChatGPT

**Prompt principal :** aide pour compléter la Mission 1 du TP et comprendre les différentes parties du frontend et leurs échanges avec le backend.

**Plan proposé :** vérifier les formulaires de connexion et d'inscription, le service d'authentification, la gestion du JWT, le profil utilisateur puis tester les requêtes dans l'onglet Network.

**Vérifications réalisées :** connexion avec des identifiants corrects et incorrects, inscription, lecture du profil, modification du nom et vérification des requêtes HTTP dans Network.

**Fichiers modifiés :**
- `login-page.ts/html`
- `register-page.ts/html`
- `profile-page.ts/html`
- `auth.interceptor.ts`
- `app.ts/html`

**Ce que nous savons expliquer :** rôle d'Angular et du backend Express, fonctionnement d'une route API, rôle de `AuthService`, principe du JWT, différence entre Signal et `localStorage`, et chemin suivi lors de la connexion.

**Preuves :**
Dans le dossier preuves.