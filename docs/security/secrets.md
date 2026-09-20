# Secrets Management

## Nunca versionar

-   `.env`;
-   `.env.local`;
-   tokens;
-   API keys;
-   passwords;
-   private keys.

## Auditoria realizada

Os nomes `.env` e `.env.local` foram observados no snapshot, mas seus
conteúdos não foram lidos.

## Código

Variáveis devem ser acessadas por uma camada de configuração server-side
quando forem secretas.

Variáveis `NEXT_PUBLIC_*` são públicas por definição e não podem conter
secrets.
