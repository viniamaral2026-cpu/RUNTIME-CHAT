# API do Codex

Operações previstas:

``` text
GET  /workspaces
POST /workspaces
GET  /workspaces/:id
DELETE /workspaces/:id

GET  /workspaces/:id/files
POST /workspaces/:id/files
PATCH /workspaces/:id/files/*
DELETE /workspaces/:id/files/*

POST /workspaces/:id/tasks
GET  /workspaces/:id/tasks

GET  /workspaces/:id/changes
POST /workspaces/:id/changes/:changeId/approve
POST /workspaces/:id/changes/:changeId/reject
POST /workspaces/:id/changes/:changeId/apply

POST /workspaces/:id/terminal/execute
```

Todos os caminhos devem ser autorizados e normalizados.
