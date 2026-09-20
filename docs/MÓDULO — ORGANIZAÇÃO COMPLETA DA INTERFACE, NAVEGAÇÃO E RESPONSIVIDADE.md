# MÓDULO — ORGANIZAÇÃO COMPLETA DA INTERFACE, NAVEGAÇÃO E RESPONSIVIDADE

## REGRA ABSOLUTA

A interface inteira deve ser organizada como uma aplicação SaaS profissional e consistente.

Não basta criar componentes visuais isolados.

A IA DEVE analisar toda a aplicação existente e implementar ou corrigir:

* menu lateral;
* versão desktop;
* versão tablet;
* versão mobile;
* cabeçalho;
* cabeçalho fixo;
* sidebar fixa;
* sidebar colapsável;
* submenus;
* dropdowns;
* menus contextuais;
* navegação entre páginas;
* breadcrumbs quando necessários;
* navegação interna;
* estados ativos;
* estados hover;
* estados focus;
* estados disabled;
* estados loading;
* menus abertos/fechados;
* overlays;
* drawers mobile;
* modais;
* integração entre navegação e páginas;
* histórico;
* navegação por teclado;
* acessibilidade;
* persistência das preferências de interface.

A navegação NÃO pode ser um conjunto de componentes decorativos.

Todos os menus precisam estar realmente conectados às rotas e funcionalidades existentes.

---

# 01 — AUDITORIA DA NAVEGAÇÃO EXISTENTE

Antes de alterar a interface:

1. analisar todas as páginas existentes;
2. analisar todas as rotas;
3. analisar todos os componentes de layout;
4. analisar Sidebar;
5. analisar Header;
6. analisar menus existentes;
7. analisar dropdowns;
8. analisar modais;
9. analisar drawers;
10. analisar navegação mobile;
11. analisar CSS/Tailwind;
12. analisar breakpoints;
13. analisar ícones;
14. analisar estado global;
15. analisar autenticação;
16. analisar permissões;
17. analisar breadcrumbs;
18. analisar histórico de navegação;
19. analisar páginas órfãs;
20. analisar links quebrados;
21. analisar rotas que não possuem entrada no menu;
22. analisar entradas do menu que apontam para rotas inexistentes.

Não criar uma segunda arquitetura de navegação se já existir uma arquitetura válida.

Corrigir, consolidar e evoluir a arquitetura existente.

---

# 02 — ARQUITETURA GLOBAL

A aplicação deve possuir uma estrutura visual consistente:

```text
┌─────────────────────────────────────────────────────────────┐
│ HEADER FIXO                                                 │
├───────────────┬─────────────────────────────────────────────┤
│               │                                             │
│ SIDEBAR       │              CONTEÚDO                       │
│ FIXA          │                                             │
│               │                                             │
│ Menu          │              Página                         │
│ Submenus      │                                             │
│ Projetos      │                                             │
│ Histórico     │                                             │
│               │                                             │
└───────────────┴─────────────────────────────────────────────┘
```

No desktop:

* Header fixo;
* Sidebar fixa;
* conteúdo independente;
* scroll principal no conteúdo;
* sidebar não deve desaparecer durante o scroll;
* header não deve acompanhar o scroll;
* conteúdo deve respeitar a área ocupada pelo header e sidebar.

No mobile:

```text
┌─────────────────────────────┐
│ ☰   LOGO        PERFIL      │
├─────────────────────────────┤
│                             │
│       CONTEÚDO              │
│                             │
└─────────────────────────────┘
```

O menu lateral deve transformar-se em:

* drawer;
* overlay;
* menu deslizante;
* navegação mobile apropriada.

Nunca simplesmente esmagar a sidebar desktop dentro da tela mobile.

---

# 03 — HEADER FIXO

O Header deve ser realmente fixo.

Requisitos:

* `position: fixed` ou arquitetura equivalente;
* largura total;
* `top: 0`;
* z-index definido;
* altura consistente;
* background sólido;
* borda inferior;
* sombra somente quando necessária;
* não desaparecer durante scroll;
* conteúdo abaixo deve possuir offset correto.

O Header deve possuir:

Desktop:

* logo;
* contexto atual da aplicação;
* busca quando aplicável;
* ações globais;
* notificações quando implementadas;
* ajuda quando implementada;
* perfil do usuário;
* dropdown de usuário.

Mobile:

* botão abrir menu;
* logo;
* ação contextual quando necessária;
* perfil ou menu de ações.

Não colocar dezenas de ações no Header.

Cada ação deve possuir justificativa funcional.

---

# 04 — SIDEBAR DESKTOP

Criar uma Sidebar profissional.

A Sidebar deve:

* permanecer fixa;
* ocupar a altura disponível;
* respeitar o Header;
* possuir scroll interno quando necessário;
* possuir largura definida;
* possuir estado expandido;
* possuir estado colapsado;
* preservar navegação;
* não quebrar o conteúdo.

Estados:

```text
EXPANDIDA
┌─────────────────────┐
│ Logo                │
│                     │
│ + Nova conversa     │
│                     │
│ Chat                │
│ Codex               │
│ Projetos            │
│ Arquivos            │
│ Configurações       │
│                     │
│ Histórico           │
└─────────────────────┘
```

Colapsada:

```text
┌─────┐
│ LOGO│
│     │
│  +  │
│  ◉  │
│  ◈  │
│  ▣  │
│  ⚙  │
└─────┘
```

Quando colapsada:

* ícones continuam visíveis;
* tooltips devem aparecer;
* texto não deve ser cortado;
* estados ativos continuam identificáveis;
* acessibilidade deve ser preservada.

---

# 05 — BOTÃO DE COLAPSO

Implementar controle real para:

```text
Sidebar expandida
        ↓
Sidebar colapsada
        ↓
Sidebar expandida
```

O estado pode ser persistido por preferência do usuário.

Exemplo:

```text
sidebarCollapsed: boolean
```

Preferencialmente:

* persistência local para preferência puramente visual;
* ou preferência vinculada ao usuário quando existir infraestrutura para isso.

Não armazenar informações sensíveis no localStorage.

O botão deve possuir:

* tooltip;
* aria-label;
* estado acessível;
* animação curta;
* suporte a teclado.

---

# 06 — MENU PRINCIPAL

Definir uma única fonte de verdade para a navegação.

Exemplo conceitual:

```ts
const navigationItems = [
  {
    label: 'Chat',
    href: '/chat',
    icon: MessageSquare,
  },
  {
    label: 'Codex',
    href: '/codex',
    icon: Code2,
  },
  {
    label: 'Projetos',
    icon: Folder,
    children: [
      {
        label: 'Todos os projetos',
        href: '/projects',
      },
      {
        label: 'Novo projeto',
        href: '/projects/new',
      },
    ],
  },
  {
    label: 'Arquivos',
    href: '/files',
    icon: Files,
  },
  {
    label: 'Configurações',
    href: '/settings',
    icon: Settings,
  },
];
```

A estrutura real deve ser adaptada às rotas existentes.

Não duplicar manualmente a mesma navegação em:

* desktop;
* mobile;
* Header;
* Sidebar;
* outros componentes.

Desktop e mobile devem consumir a mesma configuração de navegação sempre que possível.

---

# 07 — SUBMENUS

Itens que possuem filhos devem suportar:

```text
Projetos
  ├── Todos os projetos
  ├── Recentes
  └── Favoritos
```

O submenu deve possuir:

* abertura;
* fechamento;
* estado ativo;
* animação;
* indicador visual;
* suporte a teclado;
* aria-expanded;
* aria-controls;
* persistência quando apropriado.

Nunca criar submenu apenas com CSS.

O estado deve ser controlado corretamente pelo React.

---

# 08 — COLLAPSE DE SUBMENU

Exemplo:

```text
Projetos   ▼
```

Aberto:

```text
Projetos   ▲
  Todos
  Recentes
  Favoritos
```

Fechado:

```text
Projetos   ▼
```

Ao acessar uma rota filha:

```text
/projects/123
```

o menu pai deve permanecer reconhecido como ativo.

Se necessário, o submenu deve abrir automaticamente para revelar a página atual.

---

# 09 — DROPDOWNS

Todos os dropdowns devem ser componentes reais.

Casos possíveis:

* perfil;
* ações de conversa;
* ações de projeto;
* seleção de modelo;
* seleção de arquivo;
* filtros;
* ordenação;
* ações administrativas;
* menu contextual.

Cada dropdown deve:

* abrir ao clicar;
* fechar ao clicar fora;
* fechar com `Escape`;
* possuir posicionamento correto;
* respeitar viewport;
* não sair da tela;
* possuir foco acessível;
* possuir navegação por teclado;
* possuir estados hover/focus/active.

Não utilizar dropdown improvisado com elementos sem acessibilidade.

---

# 10 — MENU DE PERFIL

O perfil do usuário deve abrir um dropdown real.

Exemplo:

```text
┌──────────────────────────┐
│ Vini Amaral              │
│ usuario@email.com        │
├──────────────────────────┤
│ Meu perfil               │
│ Configurações            │
│ Segurança                │
├──────────────────────────┤
│ Sair                     │
└──────────────────────────┘
```

As opções devem apontar para páginas reais.

Logout deve executar o fluxo real de autenticação.

Não criar logout visual que apenas redireciona sem invalidar a sessão.

---

# 11 — MENU MOBILE

A versão mobile deve ser tratada como uma experiência própria.

Breakpoints devem ser testados pelo menos em:

```text
320px
375px
390px
414px
480px
768px
1024px
1280px
1440px
1920px
```

No mobile:

* Sidebar desktop fica escondida;
* botão hamburger aparece;
* drawer entra pela lateral;
* overlay cobre o conteúdo;
* clicar no overlay fecha;
* `Escape` fecha;
* seleção de uma rota fecha o drawer;
* scroll do conteúdo deve ser controlado corretamente enquanto drawer estiver aberto.

Exemplo:

```text
┌─────────────────────────────┐
│ ☰   Aplicação        👤     │
├─────────────────────────────┤
│                             │
│          CONTEÚDO           │
│                             │
└─────────────────────────────┘
```

Ao abrir:

```text
┌──────────────────────┬──────┐
│ MENU                 │      │
│                      │      │
│ + Nova conversa      │      │
│ Chat                 │      │
│ Codex                │      │
│ Projetos        ▼    │      │
│ Arquivos             │      │
│ Configurações        │      │
│                      │      │
└──────────────────────┴──────┘
       OVERLAY
```

---

# 12 — RESPONSIVIDADE REAL

Não usar apenas:

```css
hidden md:block
```

e considerar o trabalho concluído.

Cada componente precisa ser analisado em diferentes larguras.

Verificar:

* overflow horizontal;
* textos longos;
* botões;
* dropdowns;
* tabelas;
* editores;
* terminal;
* cards;
* formulários;
* mensagens;
* composer;
* arquivos;
* breadcrumbs;
* modais;
* drawers;
* sidebars;
* headers.

Nenhuma página pode gerar scroll horizontal acidental.

---

# 13 — CONTEÚDO + HEADER + SIDEBAR

O conteúdo precisa calcular corretamente:

```text
altura disponível =
viewport
- header
```

e, no desktop:

```text
largura disponível =
viewport
- sidebar
```

Não usar margens arbitrárias para “fazer caber”.

A arquitetura deve ser baseada em layout consistente.

Preferir:

* CSS Grid;
* Flexbox;
* variáveis de layout;
* containers;
* CSS custom properties quando apropriado.

---

# 14 — NAVEGAÇÃO ATIVA

A rota atual deve ser identificada.

Exemplo:

```text
Chat
```

fica visualmente ativo quando:

```text
/chat
/chat/123
```

quando apropriado.

Projetos deve reconhecer:

```text
/projects
/projects/123
/projects/123/settings
```

como pertencentes ao mesmo contexto.

Não usar apenas comparação ingênua:

```ts
pathname === href
```

quando isso causar estados incorretos.

---

# 15 — BREADCRUMBS

Utilizar breadcrumbs somente onde aumentarem a compreensão da hierarquia.

Exemplo:

```text
Projetos / Meu Projeto / Configurações
```

ou:

```text
Projetos / Meu Projeto / Codex
```

Breadcrumbs devem apontar para páginas reais.

Não criar breadcrumb decorativo.

No mobile:

* reduzir;
* truncar;
* ou substituir por navegação contextual mais simples.

---

# 16 — NAVEGAÇÃO DO CHAT

A área de Chat deve possuir navegação própria quando necessário.

Exemplo:

```text
Novo chat

Conversas
──────────────
Hoje
  Implementação API
  Bug autenticação

Ontem
  Arquitetura Codex
  Banco de dados

Mais antigas
  ...
```

Deve existir:

* busca;
* abrir;
* renomear;
* fixar;
* arquivar;
* excluir;
* menu contextual;
* estado ativo.

Todas essas operações devem estar integradas ao backend.

Não criar somente estado local se a funcionalidade depende de persistência.

---

# 17 — MENU CONTEXTUAL

Conversas, projetos, arquivos e tarefas podem possuir menus contextuais.

Exemplo:

```text
⋯
```

Abrir:

```text
Renomear
Duplicar
Mover
Arquivar
Excluir
```

As opções devem depender do contexto.

Excluir deve exigir confirmação quando houver risco de perda de dados.

---

# 18 — MODAIS E DRAWERS

Criar infraestrutura reutilizável.

Exemplos:

```text
Modal
Dialog
Drawer
ConfirmationDialog
CommandPalette
DropdownMenu
ContextMenu
```

Todos devem possuir:

* foco;
* fechamento por Escape;
* overlay;
* acessibilidade;
* scroll controlado;
* responsividade;
* animação adequada.

No mobile, modais complexos podem virar drawers/bottom sheets quando isso melhorar a utilização.

---

# 19 — COMMAND PALETTE

Se fizer sentido para a aplicação, implementar uma Command Palette global.

Exemplo:

```text
Buscar ações...

Novo chat
Abrir projeto
Abrir Codex
Abrir arquivos
Configurações
Pesquisar conversa
```

Atalho:

```text
Ctrl + K
```

ou:

```text
Cmd + K
```

No Mac.

As ações devem ser reais.

Não criar uma Command Palette falsa apenas visual.

---

# 20 — ÍCONES

É PROIBIDO utilizar:

* emojis como ícones;
* caracteres Unicode como substitutos;
* ícones desenhados manualmente sem necessidade;
* placeholders;
* quadrados;
* símbolos improvisados.

Instalar e utilizar biblioteca real.

Preferência:

```text
lucide-react
```

Exemplos:

```ts
import {
  MessageSquare,
  Code2,
  Folder,
  Files,
  Settings,
  User,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Search,
  Plus,
  MoreHorizontal,
  LogOut,
} from 'lucide-react';
```

Os ícones devem possuir:

* tamanho consistente;
* stroke consistente;
* alinhamento;
* acessibilidade;
* tooltip quando necessário.

Não misturar várias bibliotecas de ícones sem justificativa.

---

# 21 — ESTADOS VISUAIS OBRIGATÓRIOS

Todo item interativo deve considerar:

```text
default
hover
focus
active
selected
disabled
loading
error
```

Exemplo:

```text
Menu normal
Menu hover
Menu ativo
Menu desabilitado
```

Nenhum componente importante pode existir apenas no estado normal.

---

# 22 — ANIMAÇÕES

As animações devem ser discretas e funcionais.

Utilizar transições para:

* abertura de submenu;
* fechamento de submenu;
* sidebar;
* drawer;
* dropdown;
* modal;
* estados interativos.

Não utilizar animações excessivas.

Respeitar:

```css
prefers-reduced-motion
```

---

# 23 — ACESSIBILIDADE

A navegação deve funcionar sem mouse.

Testar:

```text
Tab
Shift + Tab
Enter
Space
Escape
Arrow Up
Arrow Down
Arrow Left
Arrow Right
```

Utilizar corretamente:

```text
aria-label
aria-expanded
aria-controls
aria-current
role
```

quando necessário.

O elemento atualmente ativo deve ser identificável.

---

# 24 — INTEGRAÇÃO COM ROTAS

Toda opção de menu precisa ser validada.

Para cada item:

```text
label
icon
route
permission
active state
children
```

validar:

* rota existe;
* página existe;
* autenticação funciona;
* autorização funciona;
* carregamento funciona;
* erro funciona.

Nenhum link deve apontar para:

```text
#
javascript:void(0)
```

como substituição de funcionalidade real.

---

# 25 — PERMISSÕES

Se o sistema possuir diferentes níveis de usuário:

```text
user
admin
owner
member
```

a navegação deve respeitar permissões.

Não esconder apenas visualmente uma função que também deveria estar protegida no backend.

A regra é:

```text
Frontend → UX
Backend → segurança real
```

---

# 26 — LAYOUTS POR CONTEXTO

Criar layouts coerentes para diferentes áreas.

Exemplo:

```text
AuthLayout
DashboardLayout
ChatLayout
ProjectLayout
CodexLayout
SettingsLayout
```

Não duplicar Header e Sidebar em todas as páginas.

A arquitetura deve permitir composição.

---

# 27 — INTEGRAÇÃO COM PROJETOS

Ao entrar em:

```text
Projetos / Projeto X
```

a navegação deve reconhecer o contexto.

Exemplo:

```text
Projeto X
├── Visão geral
├── Chat
├── Arquivos
├── Contexto
├── Codex
├── Tarefas
├── Alterações
└── Configurações
```

Submenus e breadcrumbs devem acompanhar esse contexto.

---

# 28 — INTEGRAÇÃO COM CODEX

Dentro do ambiente Codex:

```text
Codex
├── Workspace
├── Arquivos
├── Editor
├── Terminal
├── Agente
├── Tarefas
├── Alterações
└── Histórico
```

A navegação do Codex deve ser consistente com o restante da aplicação, mas pode possuir uma navegação contextual própria quando necessário.

Não transformar o Codex em uma segunda aplicação desconectada.

---

# 29 — MOBILE DO CODEX

No mobile, não tentar reproduzir literalmente a interface desktop.

A interface deve adaptar:

```text
Explorer
Editor
Terminal
Agent
Diff
```

para uma navegação por painéis/abas/drawers.

Exemplo:

```text
┌─────────────────────────┐
│ Codex             ⋯     │
├─────────────────────────┤
│ Arquivos | Editor | IA  │
├─────────────────────────┤
│                         │
│      PAINEL ATUAL       │
│                         │
└─────────────────────────┘
```

---

# 30 — DESIGN SYSTEM

A navegação deve utilizar o design system global.

Cores principais:

```text
Background: #FFFFFF
Surface: #F8FAFC
Border: #E2E8F0
Text: #0F172A
Secondary: #64748B
Primary: #2563EB
Primary Strong: #1D4ED8
Cyan: #06B6D4
Success: #16A34A
Warning: #D97706
Error: #DC2626
```

Não criar cores aleatórias por componente.

Não utilizar dark mode.

A aplicação permanece light-first/light-only conforme especificação do projeto.

---

# 31 — TIPOGRAFIA

Padronizar:

* tamanho;
* peso;
* line-height;
* hierarquia;
* labels;
* menus;
* títulos;
* subtítulos.

Não permitir que cada página escolha uma tipografia diferente.

---

# 32 — COMPONENTES REUTILIZÁVEIS

Criar ou consolidar componentes:

```text
AppShell
Header
Sidebar
MobileSidebar
SidebarItem
SidebarSection
SidebarSubmenu
DropdownMenu
ContextMenu
UserMenu
Breadcrumbs
MobileHeader
Overlay
Modal
Drawer
CommandPalette
Tooltip
NavigationLink
```

Cada componente deve possuir:

* TypeScript;
* props tipadas;
* acessibilidade;
* estilos;
* estados;
* documentação quando relevante;
* testes quando possuir lógica.

---

# 33 — TESTES DE NAVEGAÇÃO

Criar testes para:

### Desktop

* abrir sidebar;
* colapsar sidebar;
* expandir sidebar;
* navegar;
* submenu;
* dropdown;
* perfil;
* logout;
* estados ativos.

### Mobile

* abrir menu;
* fechar menu;
* clicar overlay;
* Escape;
* navegar;
* submenu;
* dropdown;
* overflow;
* orientação/redução de viewport.

### Acessibilidade

* Tab;
* Enter;
* Escape;
* foco;
* aria;
* navegação sem mouse.

---

# 34 — TESTE VISUAL RESPONSIVO

Validar pelo menos:

```text
320
375
390
414
480
768
1024
1280
1440
1920
```

Para cada tamanho verificar:

* Header;
* Sidebar;
* Menu;
* Conteúdo;
* Dropdown;
* Modal;
* Drawer;
* Chat;
* Projetos;
* Arquivos;
* Codex;
* Configurações.

Corrigir qualquer:

* overflow;
* clipping;
* conteúdo escondido;
* botão inacessível;
* texto quebrado;
* menu fora da tela;
* sobreposição incorreta;
* z-index incorreto.

---

# 35 — DOCUMENTAÇÃO

Documentar a arquitetura em:

```text
docs/frontend/navigation.md
docs/frontend/layouts.md
docs/frontend/responsive.md
docs/frontend/design-system.md
docs/frontend/accessibility.md
```

Documentar:

* estrutura da navegação;
* rotas;
* Sidebar;
* Header;
* mobile;
* breakpoints;
* componentes;
* estados;
* acessibilidade;
* comportamento de dropdowns;
* comportamento de submenus;
* persistência da Sidebar;
* arquitetura de layouts.

Se qualquer comportamento mudar, atualizar a documentação no mesmo módulo.

---

# 36 — REGRA DE INTEGRAÇÃO

Terminou a implementação visual?

NÃO considerar o módulo concluído.

Executar:

```text
Frontend
↓
Backend
↓
Rotas
↓
Estado
↓
Persistência
↓
Autorização
↓
Testes
↓
Build
↓
Git
↓
Commit
↓
Push
↓
Deploy
↓
Smoke test
↓
Documentação
↓
TODO
```

---

# 37 — REGRA CONTRA IMPLEMENTAÇÃO INCOMPLETA

É proibido considerar concluído:

```text
"o menu aparece"
```

quando:

* rota não funciona;
* dropdown não funciona;
* submenu não funciona;
* mobile não funciona;
* sidebar não colapsa;
* estado ativo não funciona;
* logout não funciona;
* permissões não funcionam;
* backend não está integrado;
* testes não existem;
* documentação não existe.

O módulo só está concluído quando a navegação estiver funcional de ponta a ponta.

---

# 38 — AUDITORIA FINAL DESTE MÓDULO

Antes de marcar como concluído, pesquisar no código:

```text
TODO
FIXME
HACK
XXX
NotImplemented
placeholder
mock
fake
dummy
sample
temporary
console.log
href="#"
javascript:void
```

Analisar cada ocorrência.

Também verificar:

```text
rotas existentes
rotas utilizadas
menus
submenus
dropdowns
componentes
layouts
breakpoints
ícones
permissões
testes
documentação
```

Comparar:

```text
TODO.md
↓
rotas
↓
menu
↓
componentes
↓
backend
↓
testes
↓
documentação
```

Não pode existir divergência não documentada.

---

# 39 — CHECKPOINT OBRIGATÓRIO

Ao terminar este módulo:

```bash
git status
git diff
npm run lint
npm run test
npm run build
```

Corrigir todos os erros.

Depois:

```bash
git add .
git commit -m "feat: implement complete responsive navigation architecture"
git push
```

Executar deploy.

Validar:

```text
produção
Header
Sidebar
Mobile
Submenus
Dropdowns
Rotas
Estados
Permissões
Acessibilidade
```

Depois atualizar:

```text
TODO.md
README.md
docs/frontend/navigation.md
docs/frontend/layouts.md
docs/frontend/responsive.md
docs/frontend/accessibility.md
CHANGELOG.md
```

O módulo somente pode ser marcado como:

```text
[x] CONCLUÍDO
```

depois de:

```text
Código concluído
+
Estilos concluídos
+
Ícones reais
+
Desktop validado
+
Mobile validado
+
Rotas integradas
+
Backend integrado quando aplicável
+
Testes executados
+
Build aprovado
+
Deploy realizado
+
Produção validada
+
Documentação atualizada
+
Commit realizado
+
Push realizado
+
TODO atualizado
```

## REGRA FINAL

A IA deve tratar a navegação como parte estrutural da aplicação, e não como decoração.

Desktop, tablet e mobile devem ser derivados da mesma arquitetura de produto.

Header, Sidebar, menus, submenus, dropdowns, drawers, modais, breadcrumbs, histórico, projetos, Chat, Codex, arquivos e configurações devem formar UMA ÚNICA arquitetura de navegação.

Nada deve ficar isolado.

Nada deve ser apenas visual.

Nada deve permanecer como mock.

Nada deve ser considerado terminado enquanto não estiver integrado, testado, documentado, commitado, enviado ao repositório e publicado.
