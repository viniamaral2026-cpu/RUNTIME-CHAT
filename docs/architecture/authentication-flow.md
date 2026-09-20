# Authentication Flow

## Fluxo esperado

### Cadastro

``` text
POST /auth/register
→ validate
→ normalize email
→ check uniqueness
→ hash password
→ create user
→ create session
→ HttpOnly cookie
```

### Login

``` text
POST /auth/login
→ validate
→ find user
→ verify password
→ verify status
→ create session
→ secure cookie
→ return public user
```

### Session

``` text
GET /auth/session
→ read cookie
→ hash/lookup session
→ verify active
→ verify expiry
→ load user
→ return public user
```

### Logout

``` text
POST /auth/logout
→ identify session
→ revoke server-side
→ expire cookie
```

## Estado auditado

O `AuthContext` atual cria um usuário fictício e grava
`session-token=demo-token` no browser. Isso é `MOCK` e deve ser
removido.

## Requisitos

-   HttpOnly;
-   Secure em produção;
-   SameSite adequado;
-   expiração;
-   revogação;
-   rotação quando aplicável;
-   não expor token ao JavaScript;
-   auditoria de login/logout.
