# ADENDO OBRIGATÓRIO — DOCUMENTAÇÃO COMPLETA, README, ARQUITETURA E AUDITORIA

Este adendo faz parte obrigatória do PROMPT MESTRE.

A implementação não estará completa enquanto a documentação técnica e operacional não estiver completa e sincronizada com o código.

A documentação deve ser criada DURANTE a implementação, módulo por módulo, e não somente no final.

---

# 01. REGRA ABSOLUTA DE DOCUMENTAÇÃO

Tudo que for implementado precisa ser documentado.

Não documentar apenas:

* funcionalidades;
* páginas;
* APIs.

Documentar também:

* arquitetura;
* decisões técnicas;
* banco;
* tabelas;
* relacionamentos;
* migrations;
* endpoints;
* autenticação;
* autorização;
* segurança;
* IA;
* providers;
* streaming;
* arquivos;
* storage;
* projetos;
* Codex;
* workspace;
* terminal;
* tools;
* tasks;
* diffs;
* Git;
* deploy;
* infraestrutura;
* variáveis de ambiente;
* testes;
* troubleshooting;
* dependências;
* componentes;
* fluxos;
* limitações conhecidas.

---

# 02. CRIAR UMA ÁREA /docs

Criar e manter:

docs/

```
README.md

architecture/
    overview.md
    frontend.md
    backend.md
    data-flow.md
    authentication-flow.md
    ai-architecture.md
    codex-architecture.md
    storage-architecture.md
    deployment-architecture.md

database/
    overview.md
    schema.md
    entities.md
    relationships.md
    indexes.md
    migrations.md
    backup.md

api/
    overview.md
    authentication.md
    users.md
    conversations.md
    messages.md
    ai.md
    models.md
    projects.md
    files.md
    codex.md
    workspaces.md
    tasks.md
    changes.md
    usage.md
    audit.md
    health.md
    errors.md

security/
    overview.md
    authentication.md
    authorization.md
    sessions.md
    uploads.md
    workspace-security.md
    terminal-security.md
    secrets.md
    rate-limiting.md
    security-headers.md
    threat-model.md

frontend/
    design-system.md
    components.md
    layouts.md
    responsive.md
    accessibility.md
    state-management.md

codex/
    overview.md
    workspace.md
    editor.md
    terminal.md
    agent.md
    tools.md
    tasks.md
    code-changes.md
    chat-import.md

ai/
    overview.md
    providers.md
    models.md
    streaming.md
    context.md
    tools.md
    usage.md
    failures.md

files/
    overview.md
    upload.md
    storage.md
    permissions.md
    supported-types.md

development/
    setup.md
    local-development.md
    environment.md
    commands.md
    testing.md
    debugging.md

deployment/
    overview.md
    infrastructure.md
    environment-variables.md
    database.md
    migrations.md
    deploy.md
    rollback.md
    health-checks.md
    monitoring.md

operations/
    logging.md
    audit.md
    backups.md
    incident-response.md
    troubleshooting.md

decisions/
    README.md

changelog/
    CHANGELOG.md
```

---

# 03. README PRINCIPAL

O README.md da raiz deve ser completo.

Ele deve explicar:

1. O que é a aplicação.
2. Objetivo da plataforma.
3. Principais módulos.
4. Arquitetura.
5. Stack.
6. Requisitos.
7. Instalação.
8. Configuração.
9. Banco.
10. Migrations.
11. Desenvolvimento.
12. Testes.
13. Build.
14. Deploy.
15. Estrutura do projeto.
16. Variáveis de ambiente.
17. Integrações.
18. Segurança.
19. Troubleshooting.
20. Status do projeto.
21. Roadmap real.
22. Licença, se aplicável.

Não escrever marketing vazio.

O README deve permitir que outro desenvolvedor clone o repositório e entenda como executar o projeto.

---

# 04. DOCUMENTAÇÃO DE INSTALAÇÃO

Criar:

docs/development/setup.md

Explicar passo a passo:

Pré-requisitos.

Exemplo:

Node.js
npm/pnpm
PostgreSQL
Docker
Git

Depois:

clone

install

environment

database

migration

seed

development server

test

build

Cada comando precisa corresponder aos scripts reais do projeto.

NÃO inventar comandos.

---

# 05. DOCUMENTAÇÃO DE VARIÁVEIS DE AMBIENTE

Criar:

docs/development/environment.md

E:

.env.example

Documentar TODAS as variáveis utilizadas.

Para cada variável:

Nome

Obrigatória?

Ambiente

Descrição

Exemplo seguro

Onde é utilizada

Nunca colocar segredo real.

Exemplo:

DATABASE_URL

Obrigatória: sim

Descrição: conexão PostgreSQL

---

# 06. AUDITORIA AUTOMÁTICA DE ENV

Pesquisar no projeto:

process.env

env.

config

secrets

API keys

tokens

URLs

Toda variável encontrada precisa estar documentada.

Se uma variável existe no código mas não está no `.env.example`, corrigir.

Se está no `.env.example` mas não é utilizada, investigar e remover ou documentar sua finalidade.

---

# 07. DOCUMENTAÇÃO DA ARQUITETURA

Criar:

docs/architecture/overview.md

Explicar:

Frontend
↓
API
↓
Services
↓
Repositories
↓
Database

E integrações externas.

Documentar também:

* autenticação;
* IA;
* storage;
* Codex;
* terminal;
* filas;
* cache;
* deploy.

---

# 08. DIAGRAMAS

Quando ajudarem na compreensão, criar diagramas em Markdown/Mermaid.

Exemplos:

Fluxo de autenticação.

Fluxo de Chat.

Fluxo de streaming.

Fluxo Chat → Codex.

Fluxo de upload.

Fluxo Codex Agent.

Fluxo de aplicação de Code Change.

Fluxo de deploy.

Os diagramas devem refletir a arquitetura REAL.

Não criar diagrama fictício.

---

# 09. DOCUMENTAÇÃO DO BANCO

Criar:

docs/database/schema.md

Documentar TODAS as tabelas.

Para cada tabela:

Nome

Finalidade

Campos

Tipo

Nullable

Default

Unique

Index

Foreign key

Relacionamentos

Soft delete

Regras

Exemplo conceitual:

User

id
UUID
PK

email
String
UNIQUE
NOT NULL

etc.

---

# 10. DOCUMENTAÇÃO DOS RELACIONAMENTOS

Criar:

docs/database/relationships.md

Explicar:

User → Session

User → Conversation

User → Project

Project → Conversation

Project → File

Conversation → Message

Message → Attachment

Project → Workspace

Workspace → Task

Task → CodeChange

etc.

---

# 11. DOCUMENTAÇÃO DE MIGRATIONS

Criar:

docs/database/migrations.md

Explicar:

Como criar migration.

Como aplicar.

Como verificar status.

Como resetar somente em desenvolvimento.

Como fazer deploy.

Como lidar com migration falha.

NUNCA recomendar reset do banco de produção como solução.

---

# 12. DOCUMENTAÇÃO DE BACKUP

Criar:

docs/database/backup.md

Documentar:

* estratégia;
* frequência;
* retenção;
* restore;
* responsabilidades.

Se backup não estiver implementado:

declarar explicitamente:

STATUS: NÃO IMPLEMENTADO

Não fingir que existe.

---

# 13. DOCUMENTAÇÃO DA API

Criar:

docs/api/overview.md

Documentar:

base URL

autenticação

headers

formato de resposta

formato de erro

pagination

rate limit

versionamento.

---

# 14. CADA ENDPOINT DEVE SER DOCUMENTADO

Para cada endpoint:

Método

Path

Autenticação

Permissão

Request

Parameters

Body

Response

Erros

Exemplo

Efeitos no banco

Exemplo:

POST /api/conversations

Auth:
required

Body:

{
"title": "..."
}

Response:

...

Os exemplos devem corresponder ao código real.

---

# 15. API AUTOMÁTICA

Se possível, gerar OpenAPI.

A documentação OpenAPI deve ser mantida sincronizada.

Se houver diferença entre:

OpenAPI

e

implementação

corrigir.

---

# 16. DOCUMENTAÇÃO DE ERROS

Criar:

docs/api/errors.md

Listar códigos:

AUTH_REQUIRED

FORBIDDEN

NOT_FOUND

VALIDATION_ERROR

RATE_LIMITED

PROVIDER_ERROR

STORAGE_ERROR

WORKSPACE_ERROR

EXECUTION_ERROR

INTERNAL_ERROR

Documentar quando cada erro ocorre.

---

# 17. DOCUMENTAÇÃO DE AUTENTICAÇÃO

Criar:

docs/security/authentication.md

Explicar:

* registro;
* login;
* logout;
* sessão;
* cookies;
* expiração;
* refresh quando existir;
* recuperação de senha;
* alteração de senha;
* revogação.

Nunca documentar segredos.

---

# 18. DOCUMENTAÇÃO DE AUTORIZAÇÃO

Criar:

docs/security/authorization.md

Explicar:

* roles;
* permissions;
* project membership;
* workspace permissions;
* ownership;
* acesso a arquivos.

Explicar proteção contra IDOR.

---

# 19. DOCUMENTAÇÃO DE SEGURANÇA

Criar:

docs/security/overview.md

Documentar:

* XSS;
* CSRF;
* IDOR;
* SQL injection;
* path traversal;
* command injection;
* upload;
* sessions;
* cookies;
* secrets;
* rate limiting;
* headers;
* sandbox.

---

# 20. THREAT MODEL

Criar:

docs/security/threat-model.md

Identificar ameaças reais:

Usuário tentando acessar projeto de outro usuário.

Usuário tentando baixar arquivo sem autorização.

Usuário tentando escapar do workspace.

Usuário tentando executar comando perigoso.

Usuário tentando abusar do endpoint de IA.

Usuário tentando enviar arquivo malicioso.

Usuário tentando roubar sessão.

Para cada ameaça:

Risco

Mitigação

Teste

Status.

---

# 21. DOCUMENTAÇÃO DE IA

Criar:

docs/ai/overview.md

Explicar:

* arquitetura;
* providers;
* modelos;
* ModelRouter;
* capabilities;
* streaming;
* contexto;
* tools;
* usage;
* tratamento de erros.

---

# 22. DOCUMENTAÇÃO DOS PROVIDERS

Criar:

docs/ai/providers.md

Para cada provider:

Nome

Adapter

Environment variables

Models

Streaming

Tools

Vision

Limitations

Status

Nunca colocar API key real.

---

# 23. DOCUMENTAÇÃO DO STREAMING

Criar:

docs/ai/streaming.md

Explicar:

Frontend

↓
API

↓
Provider

↓
stream

↓
Frontend

↓
persistência final.

Documentar cancelamento e erro.

---

# 24. DOCUMENTAÇÃO DO CONTEXTO

Criar:

docs/ai/context.md

Explicar como são combinados:

System instructions

User message

Conversation

Project

Files

Codex context

Model limits.

---

# 25. DOCUMENTAÇÃO DO CODEX

Criar:

docs/codex/overview.md

Explicar:

* workspace;
* editor;
* explorer;
* terminal;
* agent;
* tasks;
* diff;
* approval;
* apply;
* Git.

---

# 26. DOCUMENTAÇÃO DO AGENTE

Criar:

docs/codex/agent.md

Documentar:

REQUEST

→ ANALYZE

→ PLAN

→ CONTEXT

→ TOOLS

→ CHANGES

→ TEST

→ REVIEW

→ APPLY

→ RESULT

Cada etapa precisa corresponder ao fluxo real.

---

# 27. DOCUMENTAÇÃO DAS TOOLS

Criar:

docs/codex/tools.md

Para cada tool:

Nome

Objetivo

Input

Output

Permissões

Limitações

Timeout

Riscos

Exemplo.

---

# 28. DOCUMENTAÇÃO DO TERMINAL

Criar:

docs/codex/terminal.md

Documentar:

* sandbox;
* root;
* timeout;
* output;
* processos;
* cancelamento;
* permissões;
* segurança.

---

# 29. DOCUMENTAÇÃO DO CHAT → CODEX

Criar:

docs/codex/chat-import.md

Explicar:

1. Usuário inicia conversa.
2. Seleciona Importar para Codex.
3. Escolhe projeto.
4. Escolhe workspace.
5. Contexto é coletado.
6. Arquivos são associados.
7. Mensagens são preservadas.
8. Codex recebe contexto.
9. Workspace abre.

Documentar o que é persistido.

---

# 30. DOCUMENTAÇÃO DE FILES

Criar:

docs/files/overview.md

Explicar:

upload

download

preview

delete

rename

storage

permissions

limits.

---

# 31. DOCUMENTAÇÃO DE TIPOS DE ARQUIVO

Criar:

docs/files/supported-types.md

Listar:

extensão

MIME

limite

preview

processamento.

Somente listar o que realmente é suportado.

---

# 32. DOCUMENTAÇÃO DE FRONTEND

Criar:

docs/frontend/components.md

Documentar:

componentes principais;

props importantes;

responsabilidade;

onde utilizar;

onde não utilizar.

---

# 33. DESIGN SYSTEM

Criar:

docs/frontend/design-system.md

Documentar:

cores

tipografia

spacing

radius

buttons

inputs

cards

dialogs

icons

states

responsive.

A documentação precisa corresponder ao CSS real.

---

# 34. ÍCONES

Documentar qual biblioteca é utilizada.

Exemplo:

lucide-react

Explicar:

* padrão;
* tamanho;
* stroke;
* acessibilidade;
* quando utilizar.

Não utilizar emojis como ícones de interface.

---

# 35. DOCUMENTAÇÃO DE RESPONSIVIDADE

Criar:

docs/frontend/responsive.md

Documentar comportamento em:

mobile

tablet

desktop

wide screen.

---

# 36. DOCUMENTAÇÃO DE ACESSIBILIDADE

Criar:

docs/frontend/accessibility.md

Documentar:

* teclado;
* focus;
* aria;
* contraste;
* dialogs;
* forms;
* navegação;
* screen readers quando aplicável.

---

# 37. DOCUMENTAÇÃO DE TESTES

Criar:

docs/development/testing.md

Explicar:

Unit

Integration

API

E2E

Como executar.

Exemplos devem ser comandos reais.

---

# 38. MATRIZ DE TESTES

Criar:

docs/development/test-matrix.md

Tabela:

Funcionalidade
Teste
Tipo
Status

Exemplo:

Login
Login válido
E2E
PASS

Login
Senha inválida
Integration
PASS

Chat
Streaming
E2E
PASS

Codex
Aplicar diff
Integration
PASS

---

# 39. DOCUMENTAÇÃO DE DEPLOY

Criar:

docs/deployment/deploy.md

Explicar exatamente:

1. commit;
2. push;
3. pipeline;
4. build;
5. migration;
6. deploy;
7. health check;
8. validação.

Não documentar um processo diferente do utilizado.

---

# 40. DOCUMENTAÇÃO DE INFRAESTRUTURA

Criar:

docs/deployment/infrastructure.md

Documentar:

Frontend

Backend

Database

Storage

Redis

Workers

AI Providers

DNS

Deployment provider

somente os serviços realmente utilizados.

---

# 41. DOCUMENTAÇÃO DE ROLLBACK

Criar:

docs/deployment/rollback.md

Explicar:

* como identificar deploy quebrado;
* como voltar versão;
* como tratar migration;
* como restaurar aplicação.

Não recomendar rollback de migration destrutiva sem análise.

---

# 42. HEALTH CHECK

Documentar:

/api/health

Explicar o que verifica.

Se existir:

/api/ready

documentar também.

---

# 43. LOGGING

Criar:

docs/operations/logging.md

Documentar:

* formato;
* níveis;
* request ID;
* erros;
* retenção quando configurada;
* onde consultar.

---

# 44. AUDIT LOG

Criar:

docs/operations/audit.md

Documentar eventos registrados.

Não registrar:

password

token

API key

segredos.

---

# 45. TROUBLESHOOTING

Criar:

docs/operations/troubleshooting.md

Adicionar problemas reais encontrados durante o desenvolvimento.

Exemplos:

Database connection failed

Migration failed

Provider unavailable

Build failed

Authentication failure

Storage failure

Codex workspace failure

Terminal failure

Deployment failure

Para cada problema:

Sintoma

Causa

Diagnóstico

Solução

---

# 46. CHANGELOG

Criar:

docs/changelog/CHANGELOG.md

Registrar alterações relevantes por versão/deploy.

Exemplo:

## 0.1.0

Added:

...

Fixed:

...

Security:

...

---

# 47. ADR — DECISÕES ARQUITETURAIS

Criar:

docs/decisions/

Quando uma decisão arquitetural importante for tomada, criar:

ADR-0001-...

ADR-0002-...

Cada ADR deve conter:

Contexto

Problema

Opções

Decisão

Consequências

Status.

Não criar ADR para decisões triviais.

---

# 48. DOCUMENTAR MUDANÇAS DE ARQUITETURA

Se o backend existente for alterado:

documentar:

Antes

Problema

Nova arquitetura

Motivo

Migração

Impacto.

---

# 49. DOCUMENTAR DEPENDÊNCIAS

Criar:

docs/development/dependencies.md

Documentar dependências importantes.

Para cada uma:

Nome

Versão

Finalidade

Onde utilizada

Motivo.

Não precisa descrever cada pacote transitivo.

---

# 50. DOCUMENTAÇÃO GERADA

Quando possível, gerar automaticamente:

OpenAPI

Prisma schema documentation

TypeDoc

component documentation

Mas documentação automática não substitui documentação humana de arquitetura.

---

# 51. REGRA DE SINCRONIZAÇÃO

Sempre que modificar:

API

Banco

Frontend

Arquitetura

Segurança

IA

Codex

Deploy

também verificar a documentação correspondente.

Se necessário:

ALTERAR CÓDIGO
+
ALTERAR DOCUMENTAÇÃO
+
TESTAR
+
COMMIT.

---

# 52. DOCUMENTAÇÃO COMO PARTE DO MÓDULO

Cada módulo deve possuir tarefas:

* [ ] implementação;
* [ ] integração;
* [ ] testes;
* [ ] documentação;
* [ ] revisão;
* [ ] build;
* [ ] commit;
* [ ] push;
* [ ] deploy;
* [ ] validação.

Um módulo sem documentação NÃO está concluído.

---

# 53. AUDITORIA DOCUMENTAL FINAL

Quando todos os módulos estiverem implementados:

executar uma auditoria completa.

Pesquisar no código:

TODO

FIXME

HACK

XXX

NotImplemented

throw new Error("Not implemented")

return null

mock

fake

placeholder

dummy

sample

temporary

console.log

env variables

API endpoints

database models

services

routes

components

pages

hooks

functions

Cada ocorrência deve ser analisada.

Não necessariamente toda ocorrência precisa ser removida, mas toda ocorrência relevante deve ser resolvida ou documentada.

---

# 54. AUDITORIA DE FUNCIONALIDADES

Comparar:

TODO.md

código

rotas

páginas

banco

testes

documentação.

Encontrar:

Funcionalidade documentada mas inexistente.

Funcionalidade existente mas não documentada.

Endpoint sem documentação.

Tabela sem documentação.

Página sem documentação.

Serviço sem documentação quando relevante.

Variável de ambiente sem documentação.

Integração sem documentação.

Corrigir tudo.

---

# 55. AUDITORIA DE DOCUMENTAÇÃO

Perguntar internamente:

Um novo desenvolvedor consegue clonar o projeto?

Consegue instalar?

Consegue configurar?

Consegue iniciar banco?

Consegue rodar migrations?

Consegue iniciar aplicação?

Consegue testar?

Consegue entender arquitetura?

Consegue entender API?

Consegue entender banco?

Consegue entender autenticação?

Consegue entender IA?

Consegue entender Codex?

Consegue fazer deploy?

Consegue diagnosticar erro?

Se qualquer resposta for NÃO:

CRIAR OU CORRIGIR DOCUMENTAÇÃO.

---

# 56. DOCUMENTAÇÃO NÃO PODE MENTIR

Se algo não estiver implementado:

documentar:

STATUS: NÃO IMPLEMENTADO

Se estiver parcialmente implementado:

STATUS: PARCIAL

Se estiver implementado:

STATUS: IMPLEMENTADO

Não escrever:

"suporta X"

se X não funcionar.

---

# 57. DOCUMENTAÇÃO DE LIMITAÇÕES

Criar:

docs/architecture/limitations.md

Registrar limitações reais.

Exemplos:

Provider não configurado.

Storage local em desenvolvimento.

Terminal limitado ao ambiente.

Feature ainda não suportada.

Nunca esconder limitações.

---

# 58. DOCUMENTAÇÃO DE STATUS

Criar:

docs/project-status.md

Informar:

Módulo

Status

Testes

Deploy

Última atualização.

Exemplo:

| Módulo | Status      | Testes | Deploy |
| ------ | ----------- | ------ | ------ |
| Auth   | Complete    | PASS   | PASS   |
| Chat   | Complete    | PASS   | PASS   |
| Codex  | In Progress | ...    | ...    |

Atualizar durante o projeto.

---

# 59. DOCUMENTAÇÃO E GIT

Toda documentação deve ser versionada.

Depois de atualizar documentação:

git status

git diff

git add

git commit

git push

Não deixar documentação somente local.

---

# 60. DOCUMENTAÇÃO E DEPLOY

Alterações documentais relevantes devem entrar no mesmo commit do módulo quando fizer sentido.

Após deploy:

atualizar status.

Registrar versão/deploy no changelog quando aplicável.

---

# 61. REGRA FINAL DA DOCUMENTAÇÃO

A documentação deve ser tratada como código.

Código mudou?

Verificar documentação.

Banco mudou?

Atualizar schema documentation.

API mudou?

Atualizar API documentation.

UI mudou?

Atualizar frontend/design documentation.

Segurança mudou?

Atualizar security documentation.

Deploy mudou?

Atualizar deployment documentation.

---

# 62. CHECKLIST FINAL ABSOLUTO

Antes de declarar o projeto concluído:

## Código

[ ] Frontend completo
[ ] Backend completo
[ ] Banco completo
[ ] Integrações completas
[ ] Codex completo
[ ] Chat → Codex completo

## Banco

[ ] Schema
[ ] Migrations
[ ] Relations
[ ] Indexes
[ ] Constraints
[ ] Backup documentado

## API

[ ] Endpoints
[ ] Validation
[ ] Errors
[ ] Auth
[ ] Authorization
[ ] Documentation
[ ] OpenAPI quando aplicável

## Frontend

[ ] Pages
[ ] Components
[ ] Styles
[ ] Icons
[ ] Responsive
[ ] Accessibility
[ ] Loading
[ ] Empty
[ ] Error states

## IA

[ ] Providers
[ ] Models
[ ] Router
[ ] Streaming
[ ] Context
[ ] Tools
[ ] Usage
[ ] Errors

## Codex

[ ] Workspace
[ ] Explorer
[ ] Editor
[ ] Terminal
[ ] Agent
[ ] Tasks
[ ] Diff
[ ] Approval
[ ] Apply
[ ] Chat Import

## Segurança

[ ] Authentication
[ ] Authorization
[ ] Sessions
[ ] IDOR
[ ] XSS
[ ] CSRF
[ ] Upload
[ ] Path traversal
[ ] Command execution
[ ] Rate limiting
[ ] Secrets
[ ] Headers

## Testes

[ ] Unit
[ ] Integration
[ ] API
[ ] E2E

## Documentação

[ ] README
[ ] Architecture
[ ] Database
[ ] API
[ ] Security
[ ] AI
[ ] Codex
[ ] Files
[ ] Frontend
[ ] Testing
[ ] Development
[ ] Deployment
[ ] Operations
[ ] Troubleshooting
[ ] Changelog
[ ] ADRs quando necessários
[ ] Project status

## Git

[ ] Todos os códigos necessários versionados
[ ] Migrations versionadas
[ ] Documentação versionada
[ ] package.json atualizado
[ ] lockfile atualizado
[ ] `.gitignore` correto
[ ] Nenhum segredo versionado
[ ] Working tree limpa

## Deploy

[ ] Build
[ ] Deploy
[ ] Database migration
[ ] Health check
[ ] Smoke test
[ ] Logs verificados
[ ] Produção validada

---

# 63. REGRA FINAL ABSOLUTA

NÃO declare "CONCLUÍDO" apenas porque o código funciona.

O projeto somente estará concluído quando:

CÓDIGO
+
BANCO
+
BACKEND
+
FRONTEND
+
IA
+
CODEX
+
TESTES
+
SEGURANÇA
+
DOCUMENTAÇÃO
+
GIT
+
DEPLOY

estiverem consistentes entre si.

A documentação deve refletir a implementação real.

O código deve refletir a arquitetura documentada.

O banco deve refletir o schema documentado.

A API deve refletir a documentação.

O deploy deve refletir a infraestrutura documentada.

Se houver divergência:

PARAR A DECLARAÇÃO DE CONCLUSÃO
→ IDENTIFICAR DIVERGÊNCIA
→ CORRIGIR
→ TESTAR
→ DOCUMENTAR
→ COMMITAR
→ PUSH
→ DEPLOY
→ VALIDAR.

Somente então considerar concluído.
