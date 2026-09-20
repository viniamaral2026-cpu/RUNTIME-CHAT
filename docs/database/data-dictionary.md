# Data Dictionary

## User

  Campo          Semântica
  -------------- -------------------------------
  id             Identificador
  email          Identidade de login
  passwordHash   Hash de senha; nunca retornar
  role           Papel global
  status         Estado da conta
  createdAt      Criação
  updatedAt      Atualização
  deletedAt      Soft delete quando aplicável

## Session

  Campo       Semântica
  ----------- ---------------
  id          Identificador
  userId      Usuário
  tokenHash   Hash do token
  status      Estado
  expiresAt   Expiração
  revokedAt   Revogação

## Conversation

Deve representar uma conversa persistente, associada a usuário e
opcionalmente projeto.

## Message

Representa uma mensagem e deve suportar metadados de modelo, tokens e
erro.

## Project

Container de contexto e recursos.

## FileAsset

Metadados de arquivo e localização lógica no storage.

## CodexWorkspace

Ambiente isolado.

## CodexTask

Unidade de trabalho.

## CodeChange

Mudança proposta/aplicada.

## AuditLog

Evento auditável.

O dicionário final deve ser mantido sincronizado com o schema real.
