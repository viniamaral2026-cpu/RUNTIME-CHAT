# Navegação

## Estado auditado

Não existe AppShell completo, Sidebar funcional ou navegação mobile
completa no snapshot.

## Arquitetura alvo

``` text
AppShell
├── Header
├── DesktopSidebar
├── MobileSidebar
├── MainContent
└── GlobalOverlays
```

## Menu

Entradas principais:

-   Chat;
-   Codex;
-   Projetos;
-   Arquivos;
-   Configurações.

Submenus devem usar uma fonte de configuração única.

## Requisitos

-   rota ativa;
-   submenu aberto;
-   dropdown;
-   tooltip;
-   teclado;
-   `aria-expanded`;
-   `aria-current`;
-   overlay mobile;
-   drawer;
-   persistência da preferência de sidebar.
