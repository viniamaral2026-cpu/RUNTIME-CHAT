# Auditoria Database

## Estado

PARTIAL/BROKEN.

## Divergências

Tipos possuem campos e enums ausentes no Prisma.

Exemplos:

-   Message `TOOL` ausente no Prisma;
-   MessageStatus possui `STREAMING` e `CANCELLED` no TypeScript,
    ausentes no Prisma;
-   ProjectMember possui `VIEWER` no TypeScript, ausente no Prisma;
-   Task possui `REVIEW` e `CANCELLED`, ausentes no Prisma;
-   TaskPriority possui `URGENT`, ausente no Prisma;
-   ChangeStatus possui mais estados no TypeScript;
-   várias relações e campos são ausentes.

## Problema semântico

`CodeChange.operation` usa `ChangeStatus`, embora operação devesse
representar CREATE/UPDATE/DELETE/RENAME.

## Correção

Reconciliar modelo de domínio, schema e migrations.
