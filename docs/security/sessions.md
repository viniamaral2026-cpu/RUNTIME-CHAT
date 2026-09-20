# Segurança de Sessões

Session deve possuir:

-   token hash;
-   userId;
-   status;
-   expiresAt;
-   timestamps;
-   revocation;
-   atividade quando necessário;
-   metadados de segurança sem armazenar segredo.

O token bruto não deve ser persistido no banco.
