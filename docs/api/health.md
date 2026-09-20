# Health API

Criar endpoint de health apropriado ao backend.

Exemplo:

``` text
GET /health
```

Deve indicar pelo menos:

-   processo ativo;
-   dependências críticas conforme política;
-   versão/build identificável.

Não retornar secrets.
