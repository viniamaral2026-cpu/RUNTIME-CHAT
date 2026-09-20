# TODO MASTER - RUNTIME-CHAT Platform

## MÓDULO 00 — AUDITORIA
* [x] Auditoria inicial do repositório
* [x] Arquitetura identificada (Next.js 14, React 18, Tailwind)
* [x] Backend identificado (RUNTIME-BACKEND Django)
* [x] TODO.md criado

## MÓDULO 01 — FUNDAÇÃO
* [ ] TypeScript configurado
* [ ] ESLint rules aplicadas
* [ ] Prettier configurado
* [ ] Design tokens (cores, tipografia, radii, shadows)
* [ ] Componente base reutilizável
* [ ] API client centralizado
* [ ] Error handling padronizado
* [ ] Build validado

## MÓDULO 02 — BANCO DE DADOS
* [ ] Prisma schema completo
* [ ] Tabelas: User, Session, PasswordResetToken, Conversation, Message, FileAsset, Project, ProjectMember, AIModel, AIProviderConfig, UsageRecord, CodexWorkspace, CodexSession, CodexTask, CodeChange, TerminalExecution, AuditLog
* [ ] Enums: UserRole, UserStatus, ConversationStatus, MessageRole, MessageStatus, ProjectStatus, FileStatus, FileType, WorkspaceStatus, TaskStatus, TaskPriority, ChangeStatus, SessionStatus, AuditAction
* [ ] Migrations criadas e testadas
* [ ] Seed de desenvolvimento
* [ ] Banco funciona localmente

## MÓDULO 03 — AUTENTICAÇÃO
* [ ] register (nome, email, senha)
* [ ] login (email, senha, lembrar sessão, mostrar/ocultar senha)
* [ ] logout (invalida sessão no servidor)
* [ ] sessão (GET /api/auth/session)
* [ ] forgot-password (gera token temporário)
* [ ] reset-password (valida token, nova senha)
* [ ] change-password (atualiza senha)
* [ ] sessions (listar todas do usuário)
* [ ] revoke session (revogar específica)
* [ ] revoke all (revogar todas as sessões do usuário)
* [ ] Proteção de rotas privadas/middleware
* [ ] States: loading, authenticated, unauthenticated

## MÓDULO 04 — USUÁRIO E SETTINGS
* [ ] Profile (nome, email, avatar)
* [ ] Security (alterar senha, sessões)
* [ ] Preferences (modelo padrão, comportamento chat, editor)
* [ ] Conectado ao backend e banco

## MÓDULO 05 — PROJETOS
* [ ] criar projeto (name, description, instructions, slug)
* [ ] listar projetos do usuário
* [ ] abrir projeto /projects/[projectId]
* [ ] navegação de abas: Overview, Chat, Files, Codex, Tasks, Settings
* [ ] membros do projeto
* [ ] permissões (owner, admin, member, viewer)

## MÓDULO 06 — CONVERSAS
* [ ] nova conversa
* [ ] listar conversas do usuário
* [ ] abrir conversa /chat/[conversationId]
* [ ] renomear conversa
* [ ] arquivar/desarquivar
* [ ] fixar/desfixar
* [ ] pesquisar conversas
* [ ] paginação
* [ ] Histórico persistente

## MÓDULO 07 — IA
* [ ] AIProvider interface (generateText, streamText, countTokens, getModelInfo)
* [ ] ModelRouter (selecionar modelo, verificar capabilities, streaming, fallback)
* [ ] Integração com provedores (OpenAI, Anthropic, NVIDIA, Ollama)
* [ ] Streaming real no Chat
* [ ] Estados: pending, streaming, completed, failed, cancelled
* [ ] Cancelamento via AbortController
* [ ] Tratamento de erros do provider

## MÓDULO 08 — CHAT COMPLETO
* [ ] Sidebar navegação (Chat, Codex, Projetos, Arquivos, Configurações)
* [ ] Header fixo (logo, contexto, perfil)
* [ ] Área de mensagens (Markdown, código, syntax highlighting)
* [ ] Composer (textarea multiline, anexo, enviar/Shift+Enter)
* [ ] Model selector no chat
* [ ] Anexos/attachments (upload, preview, remoção)
* [ ] Message actions (copiar, regenerar, continuar, editar)
* [ ] Estados: loading, error, empty, success
* [ ] Markdown renderer seguro
* [ ] Código blocks com highlight e copiar

## MÓDULO 09 — FILES
* [ ] Upload (arrastar/soltar, progresso, cancelamento, validação MIME/tamanho)
* [ ] Download
* [ ] Preview de arquivos
* [ ] Listar arquivos com filtros/pesquisa
* [ ] Delete com confirmação
* [ ] Rename
* [ ] Metadata (name, mimeType, size, storageKey, type)
* [ ] Associação com projeto e conversa
* [ ] Storage service (configurável: local/S3)

## MÓDULO 10 — CONTEXTO DE PROJETO
* [ ] ProjectContextBuilder (reunir instructions, files, conversations, tasks, workspace)
* [ ] Seleção inteligente de contexto (não enviar tudo indiscriminadamente)
* [ ] Limite de tokens do contexto
* [ ] Priorização de informações recentes e relevantes

## MÓDULO 11 — CODEX WORKSPACE
* [ ] Workspace criação e abertura
* [ ] Status do workspace
* [ ] Árvore de arquivos (folder/file structure)
* [ ] Permissões dentro do workspace
* [ ] Contexto do projeto vinculado

## MÓDULO 12 — FILE EXPLORER
* [ ] Árvore de arquivos (navegável)
* [ ] Criar arquivo
* [ ] Criar pasta
* [ ] Renomear
* [ ] Excluir (com validação de referências)
* [ ] Busca dentro do workspace
* [ ] Refresh/atualização
* [ ] Proteção contra path traversal (../)

## MÓDULO 13 — MONACO EDITOR
* [ ] Integrar Monaco Editor
* [ ] Abas de arquivo
* [ ] Syntax highlighting
* [ ] Busca (find)
* [ ] Substituir (replace)
* [ ] Número de linhas
* [ ] Minimap opcional
* [ ] Salvar através do backend (não apenas estado React)

## MÓDULO 14 — TERMINAL
* [ ] Terminal real com sandbox seguro
* [ ] Comando execução com working directory controlado
* [ ] stdout/stderr com limitações
* [ ] Timeout automático
* [ ] Cancelamento de execução
* [ ] Limite de memória/processos
* [ ] Histórico de comandos
* [ ] Não permitir escape do sandbox ou acesso fora do workspace

## MÓDULO 15 — CODEX AGENT
* [ ] Fluxo: REQUEST → ANALYZE → PLAN → CONTEXT → TOOLS → CHANGES → TEST → REVIEW → APPLY → RESULT
* [ ] Task identification e breakdown
* [ ] Contexto do projeto disponível
* [ ] Arquivos relevantes leitura
* [ ] Planejar alterações
* [ ] Gerar diff
* [ ] Validar alterações
* [ ] Apresentar resultado ao usuário
* [ ] Solicitar aprovação quando necessário
* [ ] Aplicar alterações confirmadas
* [ ] Registrar CodeChange

## MÓDULO 16 — CODE CHANGES / DIFF
* [ ] Diff viewer (antes/depois)
* [ ] Linha a linha com contexto
* [ ] Status: proposed, approved, rejected, applied, failed, reverted
* [ ] Aprovação/rejeição pelo usuário
* [ ] Aplicação silenciosa não permitida
* [ ] Rollback quando houver conflito

## MÓDULO 17 — TASKS
* [ ] Status: TODO, IN_PROGRESS, REVIEW, COMPLETED, FAILED, CANCELLED
* [ ] Prioridade: LOW, MEDIUM, HIGH, URGENT
* [ ] Title, description, instructions, plan, result, error
* [ ] Criador (createdById)
* [ ] Workspace e Project associação
* [ ] Filtros e ordenação

## MÓDULO 18 — CHAT → CODEX IMPORT
* [ ] Botão "Importar para Codex" na conversa
* [ ] Modal com opções: novo projeto, projeto existente, novo workspace, workspace existente
* [ ] Transferir contexto: conversa, mensagens, arquivos, instruções, requisitos, contexto selecionado, modelo
* [ ] Criar associação persistente (sourceConversationId → targetWorkspaceId)
[ ] Codex abre automaticamente após importação
* [ ] Conversa original não é destruída

## MÓDULO 19 — GIT NO CODEX
* [ ] Status do repositório
* [ ] Branch management
* [ ] Diff viewing
* [ ] Log/history
* [ ] Commit (apenas com autorização explícita)
* [ ] Never push automaticamente sem regra/autorização

## MÓDULO 20 — AUDITORIA E LOGS
* [ ] AuditLog creation para eventos críticos
* [ ] Request logs estruturados
* [ ] AI usage tracking
* [ ] Terminal logs
* [ ] Code changes tracking
* [ ] Security events
* [ ] Não registrar senhas/tokens/segredos

## MÓDULO 21 — SEGURANÇA
* [ ] Authentication (hash Argon2id/ bcrypt, cookies HttpOnly, Secure, SameSite)
* [ ] Authorization (proteção IDOR em todas as rotas /api/...)
* [ ] Upload validation (MIME, extensão, tamanho, conteúdo)
* [ ] Path traversal protection
* [ ] Command injection prevention no terminal
* [ ] Rate limiting (login, register, forgot password, AI requests, file upload, terminal, Codex)
* [ ] Security headers (CSP, X-Content-Type-Options, Referrer-Policy, Permissions-Policy)
* [ ] Secrets never no frontend/Não commitar .env

## MÓDULO 22 — TESTES
* [ ] Unitários: auth service, password hashing, session, authorization, conversation service, message service, file validation, path validation
* [ ] Integração: registro, login, logout, sessões, criação de conversa, envio de mensagem, upload, criação de projeto
* [ ] API: endpoints, validation, errors, auth, authorization, IDOR, rate limiting
* [ ] E2E: fluxo completo Register → Login → Chat → Mensagem → Histórico → Importar → Codex → Workspace → Arquivo → Agent → Diff → Aprovação → Aplicação

## MÓDULO 23 — PERFORMANCE
* [ ] Queries otimizadas (evitar N+1)
* [ ] Indexes adequados (User.email, Session.userId, Conversation.userId, etc.)
* [ ] Paginação em listagens (conversas, files, projects, tasks)
* [ ] Lazy loading onde aplicável
* [ ] Caching estratégico
* [ ] Bundle size analysis

## MÓDULO 24 — DOCUMENTAÇÃO
* [ ] README.md completo (instalação, configuração, deploy, troubleshooting)
* [ ] docs/architecture/ (overview, data flow, AI, Codex, deployment)
* [ ] docs/database/ (schema, entities, relationships, indexes, migrations, backup)
* [ ] docs/api/ (overview, authentication, cada endpoint, errors, OpenAPI)
* [ ] docs/security/ (overview, authentication, authorization, sessions, uploads, threat model)
* [ ] docs/ai/ (overview, providers, models, streaming, context, tools, usage, failures)
* [ ] docs/codex/ (overview, workspace, editor, terminal, agent, tools, tasks, code-changes, chat-import)
* [ ] docs/files/ (overview, upload, storage, permissions, supported-types)
* [ ] docs/development/ (setup, local-development, environment, commands, testing, debugging)
* [ ] docs/deployment/ (overview, infrastructure, environment-variables, database, migrations, deploy, rollback, health-checks)
* [ ] docs/operations/ (logging, audit, backups, incident-response, troubleshooting)
* [ ] docs/changelog/CHANGELOG.md
* [ ] ADRs quando necessários
* [ ] Project status table atualizada

## MÓDULO 25 — GIT E DEPLOY
* [ ] .gitignore correto (node_modules, .env, .next, logs, build artifacts)
* [ ] Nenhum segredo versionado
* [ ] Working tree limpa após commits
* [ ] Commit descriptivo por módulo
* [ ] Push para GitHub após cada módulo concluído
* [ ] Deploy Vercel após cada módulo
* [ ] Health check endpoint /api/health
* [ ] Variáveis de ambiente .env.example criado

## MÓDULO 26 — BUILD E VALIDAÇÃO
* [ ] npm run lint — sem erros críticos
* [ ] npm run typecheck — TypeScript sem erros
* [ ] npm run build — produção OK
* [ ] npm test — testes passando
* [ ] Deploy Vercel status: Production Ready
* [ ] Smoke test na produção
* [ ] Logs verificados

## MÓDULO 27 — CHECKPOINT FINAL
* [ ] TODO.md 100% concluído
* [ ] Todas as funcionalidades implementadas e testadas
* [ ] Build, lint, typecheck aprovados
* [ ] Deploy na Vercel validado
* [ ] Git limpo (todos commits e pushes realizados)
* [ ] Documentação sincronizada com código
* [ ] Projeto considerado CONCLUÍDO