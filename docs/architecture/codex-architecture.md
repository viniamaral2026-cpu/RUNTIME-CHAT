# Arquitetura Codex

## Objetivo

Fornecer um workspace de desenvolvimento assistido por IA integrado ao
Chat.

## Componentes

``` text
Codex UI
├── Explorer
├── Editor
├── Terminal
├── Agent
├── Tasks
├── Changes
└── Git
```

Backend:

``` text
Codex API
├── Workspace service
├── File service
├── Execution service
├── Agent service
├── Change service
└── Git service
```

## Segurança

O workspace deve ser isolado.

A IA não recebe acesso arbitrário ao host.

Operações de escrita devem gerar `CodeChange` antes de aplicação quando
o fluxo exigir aprovação.
