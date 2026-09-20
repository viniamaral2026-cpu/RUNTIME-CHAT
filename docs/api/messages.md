# API de Mensagens

## Endpoints

``` text
GET  /conversations/:id/messages
POST /conversations/:id/messages
POST /conversations/:id/messages/:messageId/regenerate
PATCH /conversations/:id/messages/:messageId
DELETE /conversations/:id/messages/:messageId
```

Envio de mensagem que chama IA deve possuir fluxo de streaming e
persistência consistente.
