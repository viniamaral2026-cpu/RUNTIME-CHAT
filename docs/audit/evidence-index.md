# Evidence Index

## Snapshot

Arquivo auditado: `RUNTIME-CHAT.zip`.

## Evidências principais

### package.json

Comprova:

-   Next.js 14.2.4;
-   React 18;
-   TypeScript;
-   Prisma;
-   lucide-react;
-   scripts limitados.

### tsconfig.json

Comprova:

-   strict;
-   allowJs;
-   noImplicitAny;
-   aliases.

### middleware.ts

Comprova:

-   protected routes;
-   auth routes;
-   cookie presence check.

### src/contexts/AuthContext.tsx

Comprova:

-   usuário hardcoded;
-   `demo-token`;
-   simulação com timeout;
-   logout inconsistente.

### src/api/client.ts

Comprova:

-   endpoints esperados de auth;
-   API base configurável;
-   uso de `any` no error object.

### src/services/ai/provider.ts

Comprova:

-   interface AI básica;
-   adapter OpenAI;
-   `any`;
-   streaming simplificado;
-   token count aproximado.

### prisma/schema.prisma

Comprova:

-   schema simplificado;
-   divergências com TypeScript;
-   ausência de migrations no snapshot.

### Git

Comprova:

-   `.next` rastreado;
-   alterações não commitadas no snapshot.
