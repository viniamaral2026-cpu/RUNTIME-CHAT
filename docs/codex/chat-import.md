# Chat → Codex

## Objetivo

Transferir contexto de uma conversa para um workspace Codex sem destruir
a conversa original.

## Dados

-   source conversation;
-   selected messages;
-   attachments;
-   requirements;
-   project instructions;
-   model/context metadata;
-   target project;
-   target workspace.

## Fluxo

``` text
Chat
→ Import dialog
→ choose/create project
→ choose/create workspace
→ select context
→ persist import relation
→ open Codex
```

O componente atual possui dados locais e não comprova persistência.
