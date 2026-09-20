# Deployment

O deploy final deve seguir:

``` text
Commit
→ CI
→ lint
→ typecheck
→ tests
→ build
→ migrations
→ deploy
→ health
→ smoke
```

Um build local não comprova produção.
