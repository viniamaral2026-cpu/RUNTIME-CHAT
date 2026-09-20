# Auditoria de Arquitetura

## Evidências

O projeto possui Next.js 14, TypeScript, Prisma e estrutura `src/`,
porém a aplicação de rotas usa `pages/`.

O TODO e prompts anteriores descrevem uma arquitetura mais ampla que a
implementação.

## Achados

### A1 --- Routing inconsistente

`pages/projects/page.js` não corresponde à rota `/projects` no Pages
Router.

### A2 --- Backend não presente

O frontend referencia API externa.

### A3 --- Prisma sem papel arquitetural definido

Existe schema local, mas não está claro se ele é fonte de verdade.

### A4 --- Domínio duplicado

Tipos de domínio são mais ricos que o Prisma.

## Severidade

P0.

## Correção

Formalizar ADR-001 e ADR-002 antes de expansão funcional.
