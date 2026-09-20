# State Management

## Princípios

-   servidor é fonte de verdade para dados persistentes;
-   React state para estado efêmero;
-   cache de servidor para queries quando necessário;
-   context apenas para estado transversal;
-   evitar duplicação da mesma entidade em múltiplos stores.

A autenticação atual está centralizada em Context, mas a implementação
deve deixar de inventar usuário localmente.
