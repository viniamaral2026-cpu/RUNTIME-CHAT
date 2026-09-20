# Banco de Dados

## Estado auditado

Existe `prisma/schema.prisma`, mas o schema está incompleto frente aos
tipos TypeScript.

Não foram encontradas migrations correspondentes no snapshot.

## Entidades previstas

-   User
-   Session
-   PasswordResetToken
-   Conversation
-   Message
-   MessageAttachment
-   FileAsset
-   Project
-   ProjectMember
-   AIModel
-   AIProviderConfig
-   UsageRecord
-   CodexWorkspace
-   CodexSession
-   CodexTask
-   CodeChange
-   TerminalExecution
-   AuditLog

## Princípios

-   IDs não previsíveis;
-   timestamps;
-   foreign keys;
-   índices por lookup;
-   unique constraints;
-   soft delete quando necessário;
-   integridade referencial;
-   migrations versionadas.
