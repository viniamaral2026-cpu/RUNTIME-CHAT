# Arquitetura Geral

## Objetivo

Construir uma plataforma única em que Chat e Codex sejam experiências
integradas do mesmo produto, compartilhando identidade, projetos,
arquivos, contexto, modelos, auditoria e permissões.

## Princípios

1.  backend como autoridade de negócio;
2.  frontend sem segredos;
3.  persistência real;
4.  autorização server-side;
5.  isolamento por usuário/projeto/workspace;
6.  streaming controlado;
7.  mudanças de código sempre rastreáveis;
8.  documentação sincronizada;
9.  observabilidade sem dados secretos;
10. light-only UI;
11. TypeScript como padrão do frontend;
12. nenhuma funcionalidade crítica simulada.

## Camadas

``` text
Presentation
  ├── Next.js
  ├── Pages/App Router conforme decisão arquitetural
  ├── Components
  └── State/UI

Application
  ├── API client
  ├── Auth context
  ├── Query/state orchestration
  └── Feature services

Backend
  ├── Authentication
  ├── Authorization
  ├── Domain services
  ├── Repositories
  ├── AI orchestration
  ├── File service
  └── Codex service

Persistence
  ├── PostgreSQL
  ├── Object/File storage
  └── Audit/usage data

Execution
  ├── AI providers
  └── Isolated Codex workspace runtime
```

## Fonte de verdade

A definição final de backend e banco precisa ser formalizada no ADR-002.
Até essa decisão, o frontend não deve criar uma segunda implementação de
backend.

## Fluxo de uma requisição

``` text
UI
→ API Client
→ HTTP
→ Backend
→ Authentication
→ Authorization
→ Validation
→ Service
→ Repository
→ Database/Storage
→ Response
```

## Fluxo de IA

``` text
Chat
→ Backend
→ Conversation authorization
→ Context builder
→ Model router
→ Provider
→ Stream
→ Message persistence
→ Client
```

## Fluxo Codex

``` text
User request
→ Codex task
→ Agent planning
→ Context
→ Tools
→ Proposed changes
→ Diff
→ Approval
→ Apply
→ Validation
→ Audit
```
