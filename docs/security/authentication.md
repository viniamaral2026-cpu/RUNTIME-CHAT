# Segurança de Autenticação

## Requisitos

-   password hashing forte, preferencialmente Argon2id;
-   salt gerenciado pela biblioteca;
-   sessão server-side;
-   cookie HttpOnly;
-   Secure em produção;
-   SameSite apropriado;
-   expiração;
-   revogação;
-   proteção contra brute force;
-   mensagens de erro que não revelem existência de conta.

## Estado atual

O `AuthContext` usa autenticação simulada. Isso deve ser removido.
