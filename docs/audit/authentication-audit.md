# Auditoria Authentication

## Estado

MOCK/BROKEN.

## Evidências

`AuthContext`:

-   lê cookie diretamente no browser;
-   fabrica usuário;
-   usa email de exemplo;
-   grava `session-token=demo-token`;
-   espera 500ms para simular operação;
-   logout apaga `session`, enquanto login cria `session-token`.

## Riscos

-   bypass;
-   inconsistência de sessão;
-   falsa sensação de autenticação;
-   ausência de servidor como autoridade.

## Correção

Implementar fluxo server-side real e remover toda simulação.
