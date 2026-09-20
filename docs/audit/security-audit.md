# Auditoria Security

## P0

-   autenticação fake;
-   middleware fraco;
-   autorização não comprovada;
-   terminal não implementado;
-   storage não implementado.

## P1

-   rate limiting;
-   headers;
-   upload security;
-   IDOR tests;
-   audit logs reais.

## Regra

Nenhum componente de execução do Codex deve ser colocado em produção
antes do sandbox e authorization model.
