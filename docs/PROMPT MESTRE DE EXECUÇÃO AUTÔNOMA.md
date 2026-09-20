# PROMPT MESTRE DE EXECUÇÃO AUTÔNOMA

## CONSTRUIR A PLATAFORMA COMPLETA POR MÓDULOS, DO BANCO AO FRONTEND, COM COMMIT E DEPLOY CONTÍNUOS

Você está trabalhando diretamente no repositório existente.

Sua missão é CONSTRUIR A APLICAÇÃO COMPLETA, FUNCIONAL E INTEGRADA.

Não quero apenas planejamento.

Não quero apenas telas.

Não quero protótipos.

Não quero mockups.

Não quero componentes vazios.

Não quero TODOs esquecidos no código.

Não quero funcionalidades simuladas.

Quero implementação real.

Você deverá trabalhar AUTONOMAMENTE, módulo por módulo, até concluir todo o projeto.

---

# 01. REGRA ABSOLUTA

NÃO PARE depois de criar o plano.

NÃO pare depois de criar o banco.

NÃO pare depois do frontend.

NÃO pare depois do backend.

NÃO pare quando uma tela estiver bonita.

NÃO pare quando o build passar parcialmente.

NÃO pare para perguntar se deve continuar.

Você deve continuar automaticamente até que TODOS os módulos previstos estejam implementados, integrados, testados, commitados e publicados.

Somente interrompa se existir um bloqueio externo REAL que impossibilite tecnicamente continuar, como:

* credencial externa inexistente;
* serviço externo indisponível;
* permissão de deploy inexistente;
* erro de infraestrutura impossível de resolver automaticamente;
* requisito contraditório que exija decisão humana.

Mesmo nesses casos:

1. registre exatamente o bloqueio;
2. conclua tudo que não depende dele;
3. não deixe o restante do projeto parado;
4. continue pelos módulos independentes.

---

# 02. PRIMEIRO PASSO: AUDITORIA COMPLETA

Antes de modificar o projeto:

Analise TODO o repositório.

Mapeie:

* frontend;
* backend;
* APIs;
* banco;
* Prisma/ORM;
* migrations;
* autenticação;
* middleware;
* componentes;
* páginas;
* serviços;
* hooks;
* tipos;
* arquivos;
* IA;
* Codex;
* projetos;
* configurações;
* Docker;
* deploy;
* testes;
* dependências;
* scripts;
* Git;
* CI/CD.

Identifique:

* o que funciona;
* o que está incompleto;
* o que está quebrado;
* o que está duplicado;
* o que precisa ser integrado;
* o que precisa ser removido;
* o que pode ser reutilizado.

NÃO apague código existente antes de entender sua função.

---

# 03. CRIAR O TODO MASTER

Depois da auditoria, crie no próprio projeto um arquivo:

TODO.md

Esse arquivo será a fonte oficial de progresso da implementação.

Organize por módulos.

Exemplo:

# TODO MASTER

## MÓDULO 00 — AUDITORIA

* [x] Auditoria inicial
* [x] Arquitetura identificada
* [x] Backend identificado
* [x] Banco identificado

## MÓDULO 01 — FUNDAÇÃO

* [ ] ...

## MÓDULO 02 — BANCO

* [ ] ...

## MÓDULO 03 — AUTH

* [ ] ...

E assim sucessivamente.

IMPORTANTE:

Cada tarefa somente recebe:

[x]

quando estiver REALMENTE concluída.

Não marcar como concluído porque o arquivo foi criado.

---

# 04. TODO DEVE SER GRANULAR

Não criar tarefas vagas como:

* "fazer backend";
* "fazer frontend";
* "terminar chat".

Dividir:

* criar tabela User;
* criar migration User;
* criar repository;
* criar service;
* criar endpoint;
* validar endpoint;
* criar tela;
* integrar tela;
* testar;
* corrigir;
* commit;
* deploy;
* validação pós-deploy.

Cada funcionalidade deve possuir frontend + backend + banco + integração + teste quando aplicável.

---

# 05. EXECUÇÃO EM MÓDULOS

Trabalhe sempre no seguinte ciclo:

PLANEJAR MÓDULO
↓
IMPLEMENTAR
↓
INSTALAR DEPENDÊNCIAS NECESSÁRIAS
↓
IMPLEMENTAR BANCO
↓
IMPLEMENTAR BACKEND
↓
IMPLEMENTAR FRONTEND
↓
IMPLEMENTAR ESTILOS
↓
IMPLEMENTAR ÍCONES
↓
INTEGRAR
↓
TESTAR
↓
CORRIGIR
↓
BUILD
↓
GIT STATUS
↓
COMMIT
↓
PUSH
↓
DEPLOY
↓
VALIDAÇÃO DO DEPLOY
↓
ATUALIZAR TODO
↓
PRÓXIMO MÓDULO

Não pular etapas.

---

# 06. REGRA DE DEPENDÊNCIAS

Se uma funcionalidade precisar de uma biblioteca, INSTALAR A BIBLIOTECA.

Não implementar uma versão improvisada quando existir uma biblioteca apropriada.

Exemplos possíveis, conforme necessidade real:

* lucide-react para ícones;
* zod;
* react-hook-form;
* @hookform/resolvers;
* prisma;
* @prisma/client;
* bcrypt/argon2;
* Monaco Editor;
* markdown renderer;
* syntax highlighting;
* TanStack Query;
* Zustand quando realmente necessário;
* Playwright;
* Vitest;
* ferramentas de upload;
* bibliotecas de streaming;
* bibliotecas de terminal/editor.

NÃO instalar bibliotecas apenas por instalar.

Toda dependência deve possuir finalidade real.

Depois de instalar:

* package.json atualizado;
* lockfile atualizado;
* código utilizando a dependência;
* build validado.

---

# 07. ÍCONES REAIS

NÃO criar ícones usando:

* emojis;
* caracteres Unicode;
* SVG improvisado repetidamente;
* texto como substituto de ícone.

Utilizar uma biblioteca de ícones real.

Preferência:

lucide-react

ou outra biblioteca já existente no projeto.

Usar ícones semanticamente corretos.

Exemplos:

Search
Plus
Settings
MessageSquare
Folder
File
Code
Terminal
Play
Square
Send
Paperclip
Upload
Trash2
Pencil
Copy
Check
X
ChevronDown
ChevronRight
GitBranch
GitCommit
RefreshCw
AlertCircle
CheckCircle
Lock
User
LogOut

Os ícones precisam respeitar:

* tamanho;
* stroke;
* alinhamento;
* estado;
* acessibilidade.

Não misturar estilos de ícones sem necessidade.

---

# 08. ESTILOS SÃO PARTE DA IMPLEMENTAÇÃO

Uma funcionalidade não está concluída sem seu estilo.

Cada módulo deve implementar:

* layout;
* espaçamento;
* tipografia;
* cores;
* bordas;
* estados;
* hover;
* focus;
* active;
* disabled;
* loading;
* error;
* empty;
* responsive;
* acessibilidade.

Não criar apenas HTML funcional.

---

# 09. DESIGN SYSTEM OBRIGATÓRIO

Aplicação exclusivamente em tema claro.

NÃO implementar dark mode.

Cores base:

Background:

#FFFFFF

Surface:

#F8FAFC

Surface secondary:

#F1F5F9

Border:

#E2E8F0

Text primary:

#0F172A

Text secondary:

#475569

Text muted:

#64748B

Primary:

#2563EB

Primary hover:

#1D4ED8

Accent:

#06B6D4

Success:

#16A34A

Warning:

#D97706

Error:

#DC2626

Não inventar uma paleta diferente em cada página.

Criar tokens reutilizáveis.

---

# 10. COMPONENTES VISUAIS

Criar componentes reutilizáveis para:

Button

Input

Textarea

Select

Checkbox

Switch

Dialog

Modal

Dropdown

Tooltip

Tabs

Badge

Card

Table

Avatar

Toast

Alert

Skeleton

Spinner

Breadcrumb

Pagination

Command menu

File uploader

Code block

Empty state

Error state

Loading state

Não duplicar estilos em dezenas de componentes.

---

# 11. RESPONSIVIDADE

Toda funcionalidade deve ser testada em:

320px
375px
390px
414px
768px
1024px
1280px
1440px
1920px

Não considerar desktop suficiente.

---

# 12. MÓDULOS OBRIGATÓRIOS

Criar TODO para os seguintes módulos.

---

# MÓDULO 00 — AUDITORIA

* [ ] Auditoria do frontend
* [ ] Auditoria do backend
* [ ] Auditoria do banco
* [ ] Auditoria das dependências
* [ ] Auditoria Git
* [ ] Auditoria de deploy
* [ ] Auditoria de segurança
* [ ] TODO.md criado

---

# MÓDULO 01 — FUNDAÇÃO

Implementar/corrigir:

* arquitetura;
* TypeScript;
* configuração;
* ESLint;
* Prettier;
* aliases;
* environment validation;
* design tokens;
* componentes base;
* layout;
* API client;
* error handling.

Testar:

* install;
* lint;
* typecheck;
* build.

Depois:

COMMIT
→ PUSH
→ DEPLOY
→ VALIDAR

---

# MÓDULO 02 — BANCO DE DADOS

Implementar completamente:

User

Session

PasswordResetToken

Conversation

Message

MessageAttachment

FileAsset

Project

ProjectMember

AIModel

AIProviderConfig

UsageRecord

CodexWorkspace

CodexSession

CodexTask

CodeChange

TerminalExecution

AuditLog

Adicionar:

* enums;
* relações;
* foreign keys;
* indexes;
* unique constraints;
* soft delete;
* migrations;
* seed de desenvolvimento quando necessário.

Executar:

prisma validate

migration

generate

test database

build.

Não avançar com migration quebrada.

Depois:

COMMIT
→ PUSH
→ DEPLOY
→ VALIDAR

---

# MÓDULO 03 — AUTENTICAÇÃO

Implementar:

* register;
* login;
* logout;
* sessão;
* forgot password;
* reset password;
* change password;
* sessions;
* revoke session;
* revoke all.

Frontend + Backend + Banco.

Segurança:

* hash;
* cookies;
* HttpOnly;
* Secure;
* SameSite;
* expiração;
* revogação.

Testar tentativas inválidas.

Depois:

COMMIT
→ PUSH
→ DEPLOY
→ VALIDAR

---

# MÓDULO 04 — USUÁRIO E SETTINGS

Implementar:

Profile

Security

Sessions

Preferences

Account

Tudo conectado ao backend.

Nenhuma configuração deve ficar apenas no frontend.

Depois:

COMMIT
→ PUSH
→ DEPLOY
→ VALIDAR

---

# MÓDULO 05 — PROJETOS

Implementar:

* criar;
* listar;
* abrir;
* editar;
* excluir/arquivar;
* membros;
* permissões;
* descrição;
* instruções.

Frontend + API + banco.

Depois:

COMMIT
→ PUSH
→ DEPLOY
→ VALIDAR

---

# MÓDULO 06 — CONVERSAS

Implementar:

* nova conversa;
* listar;
* abrir;
* renomear;
* arquivar;
* excluir;
* pesquisar;
* fixar;
* histórico;
* paginação.

Persistência real.

Depois:

COMMIT
→ PUSH
→ DEPLOY
→ VALIDAR

---

# MÓDULO 07 — IA

Implementar:

AIProvider

ModelRouter

Providers

Models

Configuration

Usage

Error handling

Streaming

Não colocar chave no frontend.

Implementar integração real com providers configurados.

Se nenhum provider estiver configurado:

mostrar erro de configuração.

Não gerar resposta fake.

Depois:

COMMIT
→ PUSH
→ DEPLOY
→ VALIDAR

---

# MÓDULO 08 — CHAT COMPLETO

Implementar:

* mensagens;
* composer;
* anexos;
* streaming;
* parar geração;
* regenerar;
* editar;
* copiar;
* Markdown;
* código;
* syntax highlighting;
* seleção de modelo;
* estados;
* erros;
* loading;
* histórico.

Frontend conectado à API real.

Depois:

COMMIT
→ PUSH
→ DEPLOY
→ VALIDAR

---

# MÓDULO 09 — FILES

Implementar:

* upload;
* download;
* preview;
* delete;
* rename;
* search;
* filtros;
* metadata;
* associação com projeto;
* associação com conversa.

Storage real.

Depois:

COMMIT
→ PUSH
→ DEPLOY
→ VALIDAR

---

# MÓDULO 10 — CONTEXTO DE PROJETO

Implementar:

ProjectContextBuilder

Suporte a:

* instruções;
* arquivos;
* conversas;
* mensagens;
* tarefas;
* workspace.

Implementar seleção de contexto.

Não enviar tudo indiscriminadamente ao modelo.

Depois:

COMMIT
→ PUSH
→ DEPLOY
→ VALIDAR

---

# MÓDULO 11 — CODEX WORKSPACE

Implementar:

* workspace;
* criação;
* abertura;
* status;
* arquivos;
* pastas;
* permissões;
* contexto.

Depois:

COMMIT
→ PUSH
→ DEPLOY
→ VALIDAR

---

# MÓDULO 12 — FILE EXPLORER

Implementar:

* árvore de arquivos;
* pastas;
* criação;
* rename;
* delete;
* busca;
* atualização;
* refresh.

Validar paths no backend.

Proteger contra:

../

path traversal

acesso externo ao workspace.

Depois:

COMMIT
→ PUSH
→ DEPLOY
→ VALIDAR

---

# MÓDULO 13 — MONACO EDITOR

Implementar:

* tabs;
* abrir arquivo;
* editar;
* salvar;
* syntax highlighting;
* busca;
* replace;
* status;
* linha/coluna.

Salvar através do backend.

Depois:

COMMIT
→ PUSH
→ DEPLOY
→ VALIDAR

---

# MÓDULO 14 — TERMINAL

Implementar terminal real e seguro.

Recursos:

* comando;
* diretório;
* stdout;
* stderr;
* exit code;
* cancelamento;
* timeout;
* histórico.

Sandbox obrigatório.

Nunca permitir acesso arbitrário ao sistema.

Depois:

COMMIT
→ PUSH
→ DEPLOY
→ VALIDAR

---

# MÓDULO 15 — CODEX AGENT

Implementar:

* task;
* análise;
* plano;
* contexto;
* tools;
* leitura de arquivos;
* alterações;
* testes;
* resultados.

Fluxo:

REQUEST
→ ANALYZE
→ PLAN
→ READ
→ CHANGE
→ TEST
→ REVIEW
→ APPLY

Depois:

COMMIT
→ PUSH
→ DEPLOY
→ VALIDAR

---

# MÓDULO 16 — CODE CHANGES / DIFF

Implementar:

* diff;
* arquivos modificados;
* review;
* aprovação;
* rejeição;
* aplicação;
* rollback quando suportado.

Tudo persistido.

Depois:

COMMIT
→ PUSH
→ DEPLOY
→ VALIDAR

---

# MÓDULO 17 — TASKS

Implementar:

TODO

IN PROGRESS

REVIEW

DONE

FAILED

CANCELLED

Prioridade.

Filtros.

Persistência.

Depois:

COMMIT
→ PUSH
→ DEPLOY
→ VALIDAR

---

# MÓDULO 18 — CHAT → CODEX

Implementar completamente:

Botão:

"Importar para Codex"

Modal:

* projeto;
* workspace;
* contexto;
* arquivos;
* mensagens.

Transferir contexto real.

Criar associação persistente.

Abrir Codex após importação.

Testar o fluxo completo.

Depois:

COMMIT
→ PUSH
→ DEPLOY
→ VALIDAR

---

# MÓDULO 19 — GIT

Integrar Git ao workspace quando aplicável.

Implementar:

status

branch

diff

log

commit

Nunca fazer push automaticamente sem regra/autorização apropriada.

Depois:

COMMIT
→ PUSH
→ DEPLOY
→ VALIDAR

---

# MÓDULO 20 — AUDITORIA E LOGS

Implementar:

AuditLog

request logs

AI usage

terminal logs

code changes

security events.

Não registrar segredos.

Depois:

COMMIT
→ PUSH
→ DEPLOY
→ VALIDAR

---

# MÓDULO 21 — SEGURANÇA

Auditar:

* autenticação;
* autorização;
* IDOR;
* XSS;
* CSRF;
* upload;
* path traversal;
* command injection;
* rate limiting;
* secrets;
* headers;
* cookies;
* sessões.

Criar testes de segurança.

Depois:

COMMIT
→ PUSH
→ DEPLOY
→ VALIDAR

---

# MÓDULO 22 — TESTES

Implementar:

Unit

Integration

API

E2E

Cobrir fluxos críticos.

Depois:

COMMIT
→ PUSH
→ DEPLOY
→ VALIDAR

---

# MÓDULO 23 — PERFORMANCE

Analisar:

* queries;
* indexes;
* N+1;
* renderização;
* bundle;
* streaming;
* cache;
* paginação;
* uploads.

Corrigir gargalos reais.

Depois:

COMMIT
→ PUSH
→ DEPLOY
→ VALIDAR

---

# MÓDULO 24 — DOCUMENTAÇÃO

Criar/atualizar:

README

Architecture

Database

API

Security

Deployment

Development

Environment variables

Troubleshooting

Depois:

COMMIT
→ PUSH
→ DEPLOY
→ VALIDAR

---

# MÓDULO 25 — PRODUÇÃO

Preparar:

* Docker;
* environment;
* database;
* migrations;
* health check;
* logging;
* monitoring;
* deployment;
* rollback/documentação.

Executar build de produção.

Depois:

COMMIT
→ PUSH
→ DEPLOY
→ VALIDAR

---

# 13. REGRA DE COMMIT

Ao finalizar cada módulo:

Primeiro:

git status

Verificar todos os arquivos modificados.

Depois:

git diff

Revisar alterações.

Depois:

git add .

Depois:

git commit

Mensagem obrigatoriamente descritiva.

Exemplos:

feat(auth): implement authentication flow

feat(chat): implement persistent conversations

feat(codex): implement workspace

feat(database): add project and workspace schema

fix(files): secure workspace path validation

refactor(api): unify error handling

Depois:

git push

NUNCA deixar o módulo finalizado apenas localmente.

---

# 14. REGRA DE REPOSITÓRIO

Quando terminar um módulo:

NÃO deixar:

* arquivos modificados;
* arquivos não rastreados;
* migrations locais;
* dependências não commitadas;
* documentação local;
* configurações locais necessárias;
* TODO desatualizado.

Executar:

git status --short

O objetivo é:

working tree limpa

após commit.

---

# 15. TUDO DEVE SUBIR PARA O REPOSITÓRIO

Tudo que fizer parte do projeto deve ser versionado.

Incluindo:

* código;
* componentes;
* serviços;
* migrations;
* schemas;
* testes;
* documentação;
* configurações;
* scripts;
* Docker;
* TODO.

NÃO versionar:

node_modules

.env

segredos

logs pessoais

build artifacts desnecessários

arquivos temporários.

A regra não é "deixar tudo local".

A regra é:

TODO O CÓDIGO E CONFIGURAÇÃO NECESSÁRIOS PARA REPRODUZIR O PROJETO DEVEM ESTAR NO REPOSITÓRIO.

---

# 16. DEPLOY OBRIGATÓRIO POR MÓDULO

Depois de cada módulo:

1. commit;
2. push;
3. deploy;
4. aguardar conclusão;
5. verificar status;
6. abrir aplicação;
7. verificar funcionalidade;
8. verificar logs;
9. corrigir se necessário.

Não avançar para o próximo módulo se o deploy atual estiver quebrado.

---

# 17. REGRA DE DEPLOY

Se houver integração com Vercel:

utilizar o projeto Vercel existente.

Se houver outro sistema de deploy:

utilizar o sistema existente.

Não criar outro projeto sem necessidade.

Não duplicar infraestrutura.

Preservar domínio e configuração existentes quando possível.

---

# 18. DATABASE DEPLOY

Quando um módulo alterar schema:

1. criar migration;
2. testar localmente;
3. commit migration;
4. push;
5. aplicar migration no ambiente correto;
6. validar banco;
7. validar aplicação.

NUNCA modificar produção manualmente sem migration correspondente.

---

# 19. TODO APÓS CADA MÓDULO

Atualizar TODO.md.

Exemplo:

## MÓDULO 08 — CHAT

* [x] API
* [x] Database
* [x] Streaming
* [x] UI
* [x] Markdown
* [x] Attachments
* [x] Tests
* [x] Build
* [x] Commit
* [x] Push
* [x] Deploy
* [x] Production validation

Somente depois:

MÓDULO 09.

---

# 20. NUNCA ESCONDER ERROS

Proibido:

* ignorar erro;
* deixar TODO crítico;
* comentar código quebrado;
* criar `return true`;
* criar resposta fake;
* criar `mockData`;
* criar `fakeResponse`;
* criar botão que não funciona;
* desabilitar TypeScript para passar build;
* esconder erro com catch vazio.

Se algo falhar:

INVESTIGAR
→ CORRIGIR
→ TESTAR
→ CONTINUAR.

---

# 21. NUNCA USAR MOCK COMO FUNCIONALIDADE FINAL

Mock somente em testes automatizados quando apropriado.

Não utilizar mock para:

* login;
* Chat;
* IA;
* banco;
* projetos;
* arquivos;
* Codex;
* terminal;
* tasks.

Produção deve utilizar integração real.

---

# 22. INTERFACE NÃO PODE FICAR ATRÁS DO BACKEND

Não implementar apenas backend e deixar frontend incompleto.

Não implementar apenas frontend e deixar API fake.

Cada módulo deve ser verticalmente completo.

Exemplo:

MÓDULO PROJETOS:

Database
+
Migration
+
Repository
+
Service
+
API
+
Validation
+
Frontend
+
Components
+
Styles
+
Icons
+
Tests
+
Documentation
+
Deploy.

---

# 23. ÍCONES E COMPONENTES

Toda interface deve utilizar componentes reais.

Não criar:

<button>+</button>

como solução definitiva.

Utilizar:

Button + Icon.

Não utilizar emoji para representar:

* configurações;
* arquivos;
* código;
* terminal;
* usuários;
* erros;
* sucesso.

Usar biblioteca de ícones.

---

# 24. ACESSIBILIDADE

Todos os controles precisam possuir:

* aria-label quando necessário;
* foco;
* teclado;
* contraste;
* estados acessíveis;
* tooltip quando ícone não possuir texto.

---

# 25. FINAL DE CADA MÓDULO

Antes de declarar:

MÓDULO CONCLUÍDO

executar:

npm install
quando necessário

npm run lint

npm run typecheck

npm test

npm run build

testes específicos

git status

git diff

Depois:

git add .

git commit

git push

deploy

health check

teste funcional

Atualizar TODO.

---

# 26. CHECKPOINT DE INTEGRIDADE

Após cada módulo, verificar:

Frontend funcionando?

Backend funcionando?

Banco funcionando?

API funcionando?

Autenticação funcionando?

Integração funcionando?

Estilos funcionando?

Ícones funcionando?

Responsividade funcionando?

Testes passando?

Build passando?

Deploy funcionando?

Git limpo?

Se qualquer resposta for NÃO:

O módulo NÃO está concluído.

Corrigir antes de continuar.

---

# 27. PROIBIDO PARAR NO MEIO

Se terminar:

Database

não pare.

Continue:

Auth.

Se terminar:

Auth

continue:

Projects.

Se terminar:

Projects

continue:

Chat.

E assim por diante.

Continue automaticamente.

---

# 28. ORDEM DE PRIORIDADE EM CASO DE ERRO

Quando encontrar problema:

1. segurança;
2. banco;
3. backend;
4. integração;
5. TypeScript;
6. testes;
7. frontend;
8. estilos;
9. performance;
10. refinamento visual.

Nunca sacrificar segurança para fazer deploy passar.

---

# 29. QUALIDADE VISUAL

Não basta funcionar.

A interface deve parecer produto real.

Verificar:

* alinhamento;
* spacing;
* hierarquia;
* tipografia;
* consistência;
* estados;
* responsividade;
* ícones;
* feedback;
* empty states;
* loading;
* erros.

Não criar telas genéricas.

---

# 30. REGRA DE REUTILIZAÇÃO

Antes de criar:

Button

Modal

Input

Sidebar

Card

Dropdown

Dialog

Toast

IconButton

verifique se já existe.

Reutilizar componentes existentes quando adequados.

Não duplicar.

---

# 31. REGRA DE INTEGRAÇÃO COM O BACKEND EXISTENTE

Se já existir backend:

NÃO substituir automaticamente.

Integrar.

Se existir:

API

services

database

auth

AI

storage

reutilizar.

Se estiver quebrado:

corrigir.

Se estiver incompleto:

completar.

Se houver arquitetura inconsistente:

refatorar gradualmente.

---

# 32. REGRA DE BANCO EXISTENTE

Se já existir banco:

primeiro analisar:

schema

migrations

relations

indexes

constraints.

Não apagar banco.

Não recriar tudo sem necessidade.

Criar migrations incrementais.

Preservar dados existentes.

---

# 33. REGRA DE DEPLOY EXISTENTE

Descobrir:

* plataforma;
* projeto;
* domínio;
* variáveis;
* branch;
* pipeline.

Utilizar infraestrutura existente.

Não criar infraestrutura paralela sem necessidade.

---

# 34. FINAL DO PROJETO

Quando TODOS os módulos estiverem concluídos:

Executar auditoria final.

Verificar TODO.md.

Não pode existir:

* tarefa crítica aberta;
* TODO crítico;
* FIXME crítico;
* mock de produção;
* endpoint sem implementação;
* botão sem função;
* página vazia;
* tabela sem migration;
* migration não aplicada;
* dependência não registrada;
* arquivo não commitado;
* erro TypeScript;
* erro de build;
* teste crítico quebrado.

Executar:

lint

typecheck

tests

E2E

build

git status

deploy

health check

---

# 35. AUDITORIA FINAL

Produzir no TODO.md:

## FINAL AUDIT

Frontend:
PASS/FAIL

Backend:
PASS/FAIL

Database:
PASS/FAIL

Authentication:
PASS/FAIL

AI:
PASS/FAIL

Chat:
PASS/FAIL

Projects:
PASS/FAIL

Files:
PASS/FAIL

Codex:
PASS/FAIL

Terminal:
PASS/FAIL

Chat → Codex:
PASS/FAIL

Security:
PASS/FAIL

Tests:
PASS/FAIL

Build:
PASS/FAIL

Deployment:
PASS/FAIL

Git:
PASS/FAIL

---

# 36. REGRA FINAL ABSOLUTA

Você não está sendo solicitado a escrever um plano.

Você está sendo solicitado a EXECUTAR O PLANO.

Comece agora.

Primeiro:

AUDITE.

Depois:

CRIE TODO.md.

Depois:

EXECUTE MÓDULO 01.

Depois:

TESTE.

Depois:

COMMIT.

Depois:

PUSH.

Depois:

DEPLOY.

Depois:

VALIDAÇÃO.

Depois:

ATUALIZE TODO.

Depois:

PRÓXIMO MÓDULO.

Continue dessa forma até o último módulo.

NÃO pare simplesmente porque uma etapa terminou.

NÃO peça autorização para continuar entre módulos.

NÃO deixe trabalho importante somente na máquina local.

NÃO deixe funcionalidades parcialmente implementadas.

NÃO use mocks como substitutos de integrações reais.

NÃO crie backend paralelo se já existir backend.

NÃO crie banco paralelo se já existir banco.

NÃO crie infraestrutura paralela se já existir infraestrutura.

NÃO ignore estilos.

NÃO ignore responsividade.

NÃO ignore ícones.

NÃO ignore acessibilidade.

NÃO ignore testes.

NÃO ignore segurança.

NÃO ignore migrations.

NÃO ignore documentação.

NÃO ignore deploy.

NÃO ignore Git.

A implementação só termina quando:

TODO = 100%

*

TESTES = PASS

*

BUILD = PASS

*

DEPLOY = PASS

*

PRODUÇÃO VALIDADA

*

GIT LIMPO

*

TODAS AS ALTERAÇÕES PUBLICADAS.

COMECE AGORA PELA AUDITORIA DO REPOSITÓRIO E EXECUTE ATÉ A CONCLUSÃO TOTAL.
