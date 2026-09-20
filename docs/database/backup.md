# Backup e Restore

## Requisitos

A estratégia de produção deve definir:

-   frequência;
-   retenção;
-   criptografia;
-   localização;
-   controle de acesso;
-   teste de restore;
-   RPO;
-   RTO.

## Teste

Backup que nunca foi restaurado não deve ser considerado comprovadamente
recuperável.

## Segurança

Credenciais de backup não podem ser registradas no Git ou logs.
