# API de Projetos

## Endpoints alvo

``` text
GET    /projects
POST   /projects
GET    /projects/:id
PATCH  /projects/:id
DELETE /projects/:id
GET    /projects/:id/members
POST   /projects/:id/members
PATCH  /projects/:id/members/:memberId
DELETE /projects/:id/members/:memberId
```

## Autorização

-   owner: controle total;
-   admin: administração permitida;
-   member: operações de trabalho;
-   viewer: leitura.

A política final deve ser formalizada antes da implementação.
