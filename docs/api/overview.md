# API

## Contrato

O frontend atual espera uma API base configurável por
`NEXT_PUBLIC_API_BASE_URL`, com fallback local.

O backend oficial precisa publicar um contrato versionado.

## Formato

Sucesso:

``` json
{
  "success": true,
  "data": {}
}
```

Erro:

``` json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Dados inválidos.",
    "details": {}
  }
}
```

## Regras

-   autenticação server-side;
-   autorização por recurso;
-   validação;
-   códigos de erro estáveis;
-   paginação;
-   limites;
-   request ID;
-   documentação OpenAPI;
-   versionamento quando necessário.
