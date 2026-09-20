import { UserRole, UserStatus, ConversationStatus, MessageRole, MessageStatus, ProjectStatus, ProjectMemberRole, FileStatus, FileType, WorkspaceStatus, TaskStatus, TaskPriority, ChangeStatus, SessionStatus, AuditAction } from './enums'

export interface User {
  id: string
  email: string
  emailVerifiedAt: Date | null
  passwordHash: string | null
  name: string | null
  avatarUrl: string | null
  role: UserRole
  status: UserStatus
  lastLoginAt: Date | null
  createdAt: Date
  updatedAt: Date
  deletedAt: Date | null

  sessions: Session[]
  conversations: Conversation[]
  projects: Project[]
}

export interface Session {
  id: string
  userId: string
  tokenHash: string
  status: SessionStatus
  ipAddress: string | null
  userAgent: string | null
  lastActivityAt: Date
  expiresAt: Date
  createdAt: Date
  revokedAt: Date | null

  user: User
}

export interface PasswordResetToken {
  id: string
  userId: string
  tokenHash: string
  expiresAt: Date
  usedAt: Date | null
  createdAt: Date
}

export interface Conversation {
  id: string
  userId: string
  projectId: string | null
  title: string
  status: ConversationStatus
  modelId: string | null
  systemPrompt: string | null
  metadata: Record<string, unknown> | null
  lastMessageAt: Date | null
  createdAt: Date
  updatedAt: Date
  deletedAt: Date | null

  user: User
  project: Project | null
  messages: Message[]
  attachments: MessageAttachment[]
}

export interface Message {
  id: string
  conversationId: string
  parentMessageId: string | null
  role: MessageRole
  status: MessageStatus
  content: string
  contentJson: Record<string, unknown> | null
  modelId: string | null
  provider: string | null
  inputTokens: number | null
  outputTokens: number | null
  totalTokens: number | null
  finishReason: string | null
  errorCode: string | null
  errorMessage: string | null
  createdAt: Date
  updatedAt: Date

  conversation: Conversation
  aiModel: AIModel | null
  parentMessage: Message | null
  attachments: MessageAttachment[]
}

export interface MessageAttachment {
  id: string
  messageId: string
  fileId: string
  createdAt: Date

  message: Message
  file: FileAsset
}

export interface FileAsset {
  id: string
  ownerId: string
  projectId: string | null
  name: string
  originalName: string
  mimeType: string
  extension: string | null
  size: number
  storageKey: string
  storageProvider: string
  status: FileStatus
  type: FileType
  checksum: string | null
  metadata: Record<string, unknown> | null
  createdAt: Date
  updatedAt: Date
  deletedAt: Date | null

  owner: User
  project: Project | null
  messageAttachments: MessageAttachment[]
}

export interface Project {
  id: string
  ownerId: string
  name: string
  slug: string
  description: string | null
  instructions: string | null
  status: ProjectStatus
  metadata: Record<string, unknown> | null
  createdAt: Date
  updatedAt: Date
  deletedAt: Date | null

  owner: User
  members: ProjectMember[]
  conversations: Conversation[]
  files: FileAsset[]
  workspaces: CodexWorkspace[]
  tasks: CodexTask[]
}

export interface ProjectMember {
  id: string
  projectId: string
  userId: string
  role: ProjectMemberRole
  createdAt: Date
  updatedAt: Date

  project: Project
  user: User
}

export interface AIModel {
  id: string
  provider: string
  name: string
  displayName: string
  modelIdentifier: string
  description: string | null
  contextWindow: number | null
  maxOutputTokens: number | null
  supportsVision: boolean
  supportsStreaming: boolean
  supportsTools: boolean
  supportsCode: boolean
  isActive: boolean
  isDefault: boolean
  metadata: Record<string, unknown> | null
  createdAt: Date
  updatedAt: Date
}

export interface AIProviderConfig {
  id: string
  provider: string
  name: string
  isActive: boolean
  baseUrl: string | null
  metadata: Record<string, unknown> | null
  createdAt: Date
  updatedAt: Date
}

export interface UsageRecord {
  id: string
  userId: string
  conversationId: string | null
  messageId: string | null
  modelId: string | null
  provider: string
  inputTokens: number | null
  outputTokens: number | null
  totalTokens: number | null
  estimatedCost: number | null
  requestDurationMs: number | null
  status: string
  createdAt: Date
}

export interface CodexWorkspace {
  id: string
  projectId: string | null
  ownerId: string
  name: string
  description: string | null
  rootPath: string
  status: WorkspaceStatus
  repositoryUrl: string | null
  branch: string | null
  baseCommit: string | null
  metadata: Record<string, unknown> | null
  createdAt: Date
  updatedAt: Date
  deletedAt: Date | null

  project: Project | null
  owner: User
  codexSessions: CodexSession[]
  codexTasks: CodexTask[]
  codexChanges: CodeChange[]
}

export interface CodexSession {
  id: string
  workspaceId: string
  userId: string
  title: string | null
  status: string
  modelId: string | null
  context: Record<string, unknown> | null
  startedAt: Date
  endedAt: Date | null
  createdAt: Date

  workspace: CodexWorkspace
  user: User
}

export interface CodexTask {
  id: string
  workspaceId: string
  projectId: string | null
  conversationId: string | null
  createdById: string
  title: string
  description: string | null
  status: TaskStatus
  priority: TaskPriority
  instructions: string | null
  plan: Record<string, unknown> | null
  result: Record<string, unknown> | null
  error: string | null
  startedAt: Date | null
  completedAt: Date | null
  createdAt: Date
  updatedAt: Date

  workspace: CodexWorkspace
  project: Project | null
  createdBy: User
}

export interface CodeChange {
  id: string
  workspaceId: string
  taskId: string | null
  createdById: string
  filePath: string
  operation: 'CREATE' | 'UPDATE' | 'DELETE' | 'RENAME'
  oldContent: string | null
  newContent: string | null
  diff: string | null
  status: ChangeStatus
  createdAt: Date
  appliedAt: Date | null
  rejectedAt: Date | null
  approvedById: string | null

  workspace: CodexWorkspace
  task: CodexTask | null
  createdBy: User
}

export interface TerminalExecution {
  id: string
  workspaceId: string
  userId: string
  command: string
  workingDirectory: string
  exitCode: number | null
  stdout: string | null
  stderr: string | null
  durationMs: number | null
  status: string
  createdAt: Date

  workspace: CodexWorkspace
  user: User
}

export interface AuditLog {
  id: string
  userId: string | null
  action: AuditAction
  entityType: string
  entityId: string | null
  ipAddress: string | null
  userAgent: string | null
  metadata: Record<string, unknown> | null
  createdAt: Date

  user: User | null
}