# Routing

## Achado crítico

O snapshot possui:

``` text
pages/
├── auth/login.js
├── auth/register.js
├── projects/page.js
├── conversations/page.js
├── files/page.js
├── codex/page.js
└── index.js
```

No Pages Router, `pages/projects/page.js` não corresponde à rota
`/projects` esperada pelo TODO.

Ao mesmo tempo, o middleware protege:

``` text
/chat
/projects
/files
/codex
/settings
```

e redireciona para `/chat`.

Isso precisa ser reconciliado.

## Decisão obrigatória

Escolher uma estratégia única:

### Opção A --- Pages Router

Rotas devem utilizar arquivos como:

``` text
pages/chat/index.tsx
pages/projects/index.tsx
pages/projects/[projectId].tsx
pages/files/index.tsx
pages/codex/index.tsx
pages/settings/index.tsx
pages/chat/[conversationId].tsx
```

### Opção B --- App Router

Migrar integralmente para:

``` text
src/app/
```

com layouts e segmentos apropriados.

## Proibição

Não manter uma mistura acidental de `pages/` e `app/`.

A decisão deve ser registrada em ADR-001.
