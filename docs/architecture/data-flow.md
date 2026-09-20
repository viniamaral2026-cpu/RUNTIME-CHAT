# Data Flow

## Chat

``` text
User
→ Composer
→ API Client
→ Backend
→ Auth
→ Conversation authorization
→ Message creation
→ Context builder
→ Model router
→ Provider
→ Streaming events
→ Message finalization
→ Client
```

## Files

``` text
Browser
→ Upload API
→ Authentication
→ Authorization
→ Validation
→ Storage
→ File metadata DB
```

## Codex

``` text
Chat/Agent
→ Task
→ Workspace
→ File operations
→ Proposed CodeChange
→ Diff
→ Approval
→ Apply
→ Validation
→ Audit
```

## Segurança

Toda transição que cruza usuário, projeto, conversa, arquivo ou
workspace deve revalidar autorização no backend.
