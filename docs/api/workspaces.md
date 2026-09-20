# API de Workspaces

Workspace é um recurso isolado.

Regras:

-   pertence a usuário/projeto;
-   possui lifecycle;
-   rootPath nunca pode ser escolhido livremente pelo cliente;
-   operações de arquivo são restritas ao root;
-   execução deve ocorrer em runtime isolado;
-   encerramento deve liberar recursos.
