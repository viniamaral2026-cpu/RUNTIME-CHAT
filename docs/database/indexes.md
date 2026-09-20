# Índices

Índices esperados devem ser validados após definição do schema final.

## Candidatos

-   `User.email` unique;
-   `Session.userId`;
-   `Session.expiresAt`;
-   `Session.tokenHash` unique;
-   `Conversation.userId, updatedAt`;
-   `Conversation.projectId, updatedAt`;
-   `Message.conversationId, createdAt`;
-   `FileAsset.ownerId, createdAt`;
-   `FileAsset.projectId, createdAt`;
-   `Project.ownerId, updatedAt`;
-   `Project.slug` unique;
-   `ProjectMember.projectId, userId` unique;
-   `CodexWorkspace.projectId`;
-   `CodexTask.workspaceId, status`;
-   `CodeChange.workspaceId, createdAt`;
-   `AuditLog.userId, createdAt`;
-   `UsageRecord.userId, createdAt`.

Índices devem ser justificados por queries reais.
