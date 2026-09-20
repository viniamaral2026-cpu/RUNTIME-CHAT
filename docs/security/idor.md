# IDOR e Isolamento de Recursos

Todo endpoint que recebe um ID deve validar:

``` text
session.user
→ resource owner/member
→ permission
→ operation
```

Exemplo proibido:

``` text
GET /projects/:id
→ buscar por id
→ retornar
```

Exemplo correto:

``` text
GET /projects/:id
→ authenticate
→ authorize project
→ fetch
→ return
```

O mesmo vale para:

-   conversations;
-   files;
-   workspaces;
-   tasks;
-   changes;
-   sessions.
