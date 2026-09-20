# Status do Projeto

## Data do snapshot auditado

20 de setembro de 2026.

## Classificação geral

**Estado: PARCIAL / NÃO PRONTO PARA PRODUÇÃO**

O projeto possui fundação técnica, mas não atende ainda aos requisitos
de uma plataforma completa.

## Matriz

  -----------------------------------------------------------------------
  Área                    Estado                  Evidência / problema
  ----------------------- ----------------------- -----------------------
  Next.js                 PARTIAL                 Next 14 existe e Pages
                                                  Router está presente

  TypeScript              PARTIAL                 TS strict, porém JS
                                                  ainda é permitido e
                                                  predominante nas
                                                  páginas

  Routing                 BROKEN/PARTIAL          middleware referencia
                                                  `/chat`, `/settings` e
                                                  outras rotas que não
                                                  estão materializadas
                                                  como páginas válidas

  Auth UI                 PARTIAL                 login/register existem

  Auth real               MOCK/BROKEN             `AuthContext` cria
                                                  usuário e `demo-token`
                                                  localmente

  Middleware              BROKEN                  apenas verifica
                                                  presença de cookie

  Database                PARTIAL                 Prisma schema existe,
                                                  mas é incompleto frente
                                                  aos tipos

  Migrations              NOT IMPLEMENTED         nenhuma migration
                                                  correspondente foi
                                                  encontrada no snapshot

  Backend                 BLOCKED/PARTIAL         frontend referencia API
                                                  externa; backend
                                                  oficial não está no
                                                  snapshot

  Chat                    NOT IMPLEMENTED/PARTIAL não há fluxo completo
                                                  persistente

  Conversations           MOCK                    dados estáticos

  Projects                MOCK                    dados estáticos

  Files                   MOCK                    dados estáticos

  AI                      PARTIAL                 adapter OpenAI básico;
                                                  sem orquestração
                                                  completa

  Streaming               PARTIAL/BROKEN          parser SSE incompleto

  Codex                   PARTIAL/MOCK            UI e tipos existem,
                                                  runtime não

  Terminal                NOT IMPLEMENTED         apenas modelo/tipo

  Agent                   NOT IMPLEMENTED         sem runtime de
                                                  ferramentas

  Diff                    PARTIAL                 componente visual, sem
                                                  aplicação real

  Tasks                   PARTIAL                 componente local

  Chat → Codex            MOCK/PARTIAL            componente sem
                                                  persistência

  Navigation              NOT IMPLEMENTED         shell completo não
                                                  existe

  Mobile                  NOT IMPLEMENTED         drawer/mobile
                                                  navigation não existe

  Security                NOT READY               autenticação e
                                                  autorização
                                                  insuficientes

  Tests                   NOT IMPLEMENTED         infraestrutura de
                                                  testes não encontrada

  Documentation           PARTIAL                 prompts existem,
                                                  documentação
                                                  operacional não

  Git hygiene             BROKEN                  `.next` rastreado

  Production validation   NOT VERIFIED            snapshot não comprova
                                                  validação ponta a ponta
  -----------------------------------------------------------------------

## Prioridades

### P0 --- bloquear continuação

-   definir arquitetura de routing;
-   definir backend fonte de verdade;
-   corrigir autenticação;
-   corrigir middleware;
-   reconciliar banco e tipos;
-   remover `.next` do Git;
-   corrigir rotas quebradas.

### P1

-   App Shell;
-   navegação;
-   Projects;
-   Conversations;
-   Chat;
-   AI;
-   Files;
-   contexto.

### P2

-   Codex runtime;
-   terminal sandbox;
-   agent;
-   diff;
-   tasks;
-   Git;
-   observabilidade;
-   performance.

### P3

-   refinamentos de UX;
-   otimizações secundárias;
-   funcionalidades avançadas não essenciais.

## Critério de conclusão

O status geral somente pode mudar para `PRODUCTION READY` quando os
critérios definidos em `docs/audit/final-audit.md` forem comprovados.
