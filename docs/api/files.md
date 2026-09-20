# API de Arquivos

Operações:

``` text
POST   /files
GET    /files
GET    /files/:id
GET    /files/:id/download
PATCH  /files/:id
DELETE /files/:id
```

Upload precisa validar autorização, tamanho, MIME, extensão, storage e
integridade.
