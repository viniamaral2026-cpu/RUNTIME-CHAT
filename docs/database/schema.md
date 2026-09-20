# Schema de Dados

## Reconcilição necessária

Os tipos em `src/types/index.ts` descrevem entidades muito mais
completas que o Prisma atual.

### User

Tipos esperam:

-   `emailVerifiedAt`;
-   `lastLoginAt`;
-   `deletedAt`;
-   relações.

Prisma atual não contém esses campos.

### Session

Tipos esperam:

-   `ipAddress`;
-   `userAgent`;
-   `lastActivityAt`;
-   `revokedAt`.

Prisma atual não contém esses campos.

### Conversation

Tipos esperam:

-   `projectId`;
-   `modelId`;
-   `systemPrompt`;
-   `metadata`;
-   `lastMessageAt`;
-   `deletedAt`;
-   attachments.

Prisma atual não contém esses campos.

### Message

Tipos esperam:

-   `parentMessageId`;
-   `contentJson`;
-   model/provider;
-   token accounting;
-   finish reason;
-   errors;
-   timestamps de atualização;
-   attachments.

Prisma atual é insuficiente.

### Project

Tipos esperam owner, instructions, metadata, timestamps, deletedAt e
relações.

Prisma atual não possui tudo.

### Codex

Workspace, Session, Task e CodeChange precisam de relações e metadados
adicionais.

## Regra

O schema definitivo deve ser derivado do contrato de domínio aprovado, e
não de uma cópia superficial dos tipos.
