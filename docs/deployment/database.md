# Database Deployment

Migrations devem ser aplicadas de forma controlada.

Processo:

``` text
backup/verification
→ migration
→ health
→ smoke
```

Alterações destrutivas exigem plano de rollback/restore.
