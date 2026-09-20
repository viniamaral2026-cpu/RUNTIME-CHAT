# Auditoria Backend

## Estado

BLOCKED/PARTIAL.

O snapshot do `RUNTIME-CHAT` não contém o backend oficial.

O API client aponta para endpoints esperados, mas não comprova sua
existência.

## Consequência

Não é possível marcar autenticação, projetos, conversas, arquivos ou
Codex como implementados ponta a ponta.

## Correção

Auditar o `RUNTIME-BACKEND` real e produzir um contrato de API
versionado.
