# Especificação de Navegação

## Desktop

``` text
Header fixo
├── contexto
├── busca quando aplicável
├── ações
└── perfil

Sidebar fixa
├── Novo Chat
├── Chat
├── Codex
├── Projetos
│   ├── Todos
│   └── contexto atual
├── Arquivos
└── Configurações
```

## Mobile

``` text
Mobile Header
├── Menu
├── contexto
└── perfil

Drawer
├── Novo Chat
├── Chat
├── Codex
├── Projetos
├── Arquivos
└── Configurações
```

## Comportamento

-   rota ativa;
-   submenu persistente quando necessário;
-   Escape fecha overlays;
-   clique fora fecha dropdown/drawer;
-   foco deve ser restaurado;
-   navegação deve ser acessível por teclado.

## Estado auditado

A implementação atual ainda não contém esta arquitetura completa.
