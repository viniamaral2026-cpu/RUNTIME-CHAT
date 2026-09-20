# Auditoria de Routing

## Estado

BROKEN/PARTIAL.

## Evidências

Middleware protege:

``` text
/chat
/projects
/files
/codex
/settings
```

Porém o snapshot contém páginas como:

``` text
pages/projects/page.js
pages/conversations/page.js
```

e não a estrutura esperada para `/projects` e `/chat`.

## Risco

Usuário autenticado pode ser redirecionado para uma rota que não existe
ou que não representa a página pretendida.

## Correção

Escolher Pages Router ou App Router e alinhar:

-   páginas;
-   middleware;
-   links;
-   redirects;
-   documentação.
