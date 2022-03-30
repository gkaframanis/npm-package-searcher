# NPM PACKAGE SEARCHER

## Design of redux store

- **_Action Creators_** (==> Actions)
  - searchRepositories(term)
- **_Actions_** (==> redux store)
  - SearchRepositories
  - SearchRepositoriesSuccess
  - SearchRepositoriesError
- **_Action Types_** (==> Actions)
  - search_repositories
  - search_repositories_success
  - search_repositores_error
- **_Redux store_**
  - repositories
    - data (list of repositories from npm)
    - loading (true/false whether we are fetching data)
    - error (String, error message if one occurred during fetch)

## scr folder

- **_Components_**
  - App.tsx - RepositoriesList.tsx
- **_state_**(redux)
  - reducers
  - action creators
  - middlewares
