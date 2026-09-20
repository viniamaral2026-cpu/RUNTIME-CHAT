# Migrations

## Estado auditado

Nenhuma pasta de migrations correspondente foi encontrada no snapshot.

## Processo obrigatório

``` text
Alteração de schema
→ migration
→ geração de client
→ teste
→ aplicação em ambiente de desenvolvimento
→ integração
→ commit
→ deploy controlado
```

Nunca editar banco de produção manualmente como substituto de migration.

## Regras

-   migrations imutáveis depois de aplicadas;
-   nomes descritivos;
-   revisão de SQL quando alteração for crítica;
-   rollback planejado quando possível;
-   backup antes de alterações destrutivas.
