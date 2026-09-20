# Deployment Architecture

## Pipeline alvo

``` text
Commit
→ Push
→ CI
→ Lint
→ Typecheck
→ Tests
→ Build
→ Migration check
→ Deploy
→ Health check
→ Smoke test
```

## Regra

Build local aprovado não substitui health check em produção.

## Segredos

Segredos devem ser configurados no ambiente de deploy. Nunca devem ser
colocados no Git.

## Rollback

Cada release deve ser identificável por commit SHA e possuir
procedimento de rollback.
