# Limitações Conhecidas

## 1. Snapshot

Esta documentação descreve um snapshot do projeto e não deve ser
interpretada como garantia sobre mudanças feitas depois dele.

## 2. Segredos

`.env` e `.env.local` não foram lidos. Consequentemente, esta auditoria
não afirma quais valores estão configurados nesses arquivos.

Foi avaliada apenas a existência dos arquivos, referências de
configuração observáveis no código e higiene de versionamento.

## 3. Backend

O frontend referencia uma API externa por `NEXT_PUBLIC_API_BASE_URL`,
com fallback local para `http://localhost:8000/api`. O backend
correspondente não está presente no snapshot auditado.

Isso impede comprovar:

-   endpoints reais;
-   autenticação no servidor;
-   persistência real;
-   autorização;
-   migrations do backend;
-   contratos reais de produção.

## 4. Produção

Não é possível considerar produção validada apenas com o conteúdo do
ZIP. A validação de produção exige acesso ao ambiente de deploy e
execução dos smoke tests.

## 5. IA

O adapter OpenAI encontrado é insuficiente para a arquitetura declarada.
Não há comprovação de providers adicionais, router, usage tracking ou
streaming robusto.

## 6. Codex

Os tipos de domínio sugerem uma arquitetura mais avançada do que a
implementação encontrada. Não há comprovação de sandbox de terminal,
agente, ferramentas, aplicação de mudanças ou Git seguro.

## 7. Regra

Limitações não devem ser escondidas. Quando uma etapa depender de outro
repositório, serviço ou decisão arquitetural, ela deve ser marcada como
`BLOCKED` ou `PARTIAL`.
