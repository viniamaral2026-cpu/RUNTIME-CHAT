# Entidades

## User

Representa a identidade do usuário.

Regras:

-   email único;
-   status controlado;
-   password hash nunca exposto;
-   soft delete conforme política.

## Session

Representa uma sessão autenticada.

Deve permitir:

-   expiração;
-   revogação;
-   auditoria;
-   identificação de dispositivo sem armazenar segredos.

## Conversation

Pertence a um usuário e opcionalmente a um projeto.

## Message

Pertence a uma conversa.

Suporta:

-   user;
-   assistant;
-   system;
-   tool.

## Project

Container de contexto compartilhado.

## ProjectMember

Controla acesso a projetos.

## FileAsset

Metadados de arquivo.

## AIModel

Catálogo de modelos.

## UsageRecord

Registra consumo e latência.

## CodexWorkspace

Ambiente isolado associado a projeto/usuário.

## CodexTask

Unidade de trabalho do agente.

## CodeChange

Mudança proposta/aprovada/aplicada.

## TerminalExecution

Registro de execução.

## AuditLog

Eventos relevantes de segurança e operação.
