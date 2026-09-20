# RUNTIME-CHAT --- Documentação Técnica, Auditoria e Plano de Reconciliação

## 1. Finalidade

Este diretório contém a documentação técnica completa produzida a partir
da auditoria profunda do snapshot do projeto `RUNTIME-CHAT` recebido em
20 de setembro de 2026.

A documentação possui dois objetivos simultâneos:

1.  registrar o estado real encontrado no código;
2.  definir a arquitetura e o plano de correção necessários para
    transformar o projeto em uma plataforma de IA integrada, segura,
    testável e operável.

**Importante:** esta documentação não trata o `TODO.md` original como
prova de implementação. Cada funcionalidade foi classificada segundo
evidência observável no snapshot.

## 2. Regra de leitura da documentação

Os termos abaixo possuem significado formal:

  -----------------------------------------------------------------------
  Status                              Significado
  ----------------------------------- -----------------------------------
  `IMPLEMENTED`                       Implementação real encontrada e
                                      verificável

  `PARTIAL`                           Parte implementada, mas existem
                                      lacunas relevantes

  `NOT IMPLEMENTED`                   Não existe implementação funcional

  `MOCK`                              Comportamento baseado em dados
                                      fictícios, hardcoded ou simulação

  `BROKEN`                            Existe código, porém o fluxo está
                                      quebrado ou inconsistente

  `BLOCKED`                           A implementação depende de decisão
                                      ou recurso externo

  `DEPRECATED`                        Código existente que deve deixar de
                                      ser utilizado
  -----------------------------------------------------------------------

## 3. Escopo auditado

Foram avaliados:

-   estrutura do repositório;
-   Git;
-   Next.js;
-   TypeScript;
-   Tailwind;
-   ESLint;
-   dependências;
-   routing;
-   middleware;
-   autenticação;
-   tipos;
-   Prisma;
-   modelo de dados;
-   serviços;
-   API client;
-   IA;
-   Chat;
-   Projects;
-   Files;
-   Codex;
-   navegação;
-   responsividade;
-   segurança;
-   testes;
-   documentação;
-   build/deploy e higiene do repositório.

Arquivos de segredo `.env` e `.env.local` **não foram lidos**.

## 4. Estado atual resumido

O snapshot representa uma fundação/protótipo parcial. Existem estruturas
TypeScript, Prisma, API client e componentes de domínio, mas grande
parte das funcionalidades declaradas no TODO ainda não está implementada
ponta a ponta.

Os principais bloqueadores são:

1.  arquitetura de routing não reconciliada;
2.  autenticação atualmente simulada no frontend;
3.  backend oficial não está presente no snapshot e é referenciado
    externamente;
4.  schema Prisma está muito atrás dos tipos de domínio;
5.  não há migrations correspondentes no snapshot;
6.  Chat, Projects, Conversations, Files e Codex possuem
    componentes/páginas parciais ou dados estáticos;
7.  navegação global ainda não está implementada;
8.  testes automatizados não estão estruturados;
9.  documentação do projeto é insuficiente;
10. `.next` está rastreado pelo Git;
11. existem arquivos JavaScript apesar da meta de TypeScript;
12. `eslint.config.mjs` usa sintaxe CommonJS;
13. scripts de typecheck/test estão ausentes.

## 5. Arquitetura alvo

A arquitetura alvo deverá ser definida formalmente antes da
implementação continuar:

``` text
Browser
   |
   v
Next.js / RUNTIME-CHAT
   |
   +--> API Client
   |
   v
RUNTIME-BACKEND
   |
   +--> Authentication
   +--> Users
   +--> Projects
   +--> Conversations
   +--> Messages
   +--> Files
   +--> AI orchestration
   +--> Codex orchestration
   +--> Audit
   |
   v
PostgreSQL / Storage / AI Providers / Isolated Workspace Runtime
```

O `RUNTIME-BACKEND` deve permanecer a fonte de verdade para operações de
negócio caso seja confirmado como backend oficial.

## 6. Regra de segurança

Nunca documentar ou versionar valores reais de:

-   senhas;
-   tokens;
-   cookies;
-   API keys;
-   URLs privadas;
-   credenciais;
-   secrets.

A documentação de ambiente deve utilizar somente nomes de variáveis e
valores mascarados.

## 7. Regra de conclusão

Uma funcionalidade só pode ser marcada como concluída após:

``` text
UI
→ API
→ backend/service
→ persistência
→ autorização
→ testes
→ build
→ deploy
→ smoke test
→ documentação
```

## 8. Estrutura

-   `docs/architecture` --- arquitetura.
-   `docs/api` --- contratos de API.
-   `docs/database` --- modelo de dados.
-   `docs/security` --- segurança.
-   `docs/frontend` --- frontend, layout e navegação.
-   `docs/ai` --- IA.
-   `docs/codex` --- ambiente de desenvolvimento assistido.
-   `docs/files` --- arquivos e storage.
-   `docs/development` --- desenvolvimento.
-   `docs/deployment` --- deploy.
-   `docs/operations` --- operação.
-   `docs/decisions` --- ADRs.
-   `docs/audit` --- evidências, reconciliação e plano de correção.

## 9. Estado da documentação

Esta documentação é deliberadamente mais detalhada que o código atual. A
diferença não representa implementação inexistente: ela representa o
contrato e o plano para a implementação.

Qualquer item marcado como `NOT IMPLEMENTED`, `PARTIAL`, `MOCK` ou
`BROKEN` deve permanecer assim até validação posterior.
