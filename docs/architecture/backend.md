# Arquitetura Backend

## Estado auditado

O backend oficial não está presente no snapshot. O frontend referencia
uma API externa.

## Arquitetura alvo

``` text
HTTP Controller
    ↓
Validation
    ↓
Authorization
    ↓
Application Service
    ↓
Repository
    ↓
Database
```

Integrações externas devem seguir:

``` text
Service
    ↓
Provider Adapter
```

## Regras

-   controllers não devem conter regras de negócio complexas;
-   validação de entrada deve ocorrer no backend;
-   autorização deve ocorrer antes do acesso ao recurso;
-   repositories não devem decidir permissões;
-   services devem trabalhar com identidade autenticada;
-   `userId` enviado pelo cliente não pode substituir a identidade da
    sessão;
-   erros devem possuir códigos estáveis;
-   logs devem usar correlation/request ID.

## Contrato de erro

``` json
{
  "success": false,
  "error": {
    "code": "RESOURCE_FORBIDDEN",
    "message": "Acesso não autorizado.",
    "details": {}
  }
}
```

Não retornar stack trace ao cliente.
