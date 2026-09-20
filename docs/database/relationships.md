# Relacionamentos

``` text
User
 ├── Sessions
 ├── Conversations
 ├── Projects
 ├── Files
 ├── CodexWorkspaces
 ├── CodexSessions
 ├── CodexTasks
 └── AuditLogs

Project
 ├── Members
 ├── Conversations
 ├── Files
 ├── Workspaces
 └── Tasks

Conversation
 ├── Messages
 └── Attachments

Message
 └── MessageAttachments

FileAsset
 └── MessageAttachments

Workspace
 ├── CodexSessions
 ├── CodexTasks
 └── CodeChanges

Task
 └── CodeChanges
```

Todas as relações precisam possuir foreign keys e regras de deleção
explicitamente definidas.
