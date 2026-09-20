# Endpoint Matrix

Esta matriz é o contrato alvo e não deve ser tratada como evidência de
que os endpoints já existem.

  --------------------------------------------------------------------------------------------------
  Domínio         Método         Rota                                 Auth           Autorização
  --------------- -------------- ------------------------------------ -------------- ---------------
  Auth            POST           `/auth/register`                     Não            Rate limit

  Auth            POST           `/auth/login`                        Não            Rate limit

  Auth            POST           `/auth/logout`                       Sim            Session

  Auth            GET            `/auth/session`                      Sim            Session

  Projects        GET            `/projects`                          Sim            User

  Projects        POST           `/projects`                          Sim            User

  Projects        GET            `/projects/:id`                      Sim            Project

  Projects        PATCH          `/projects/:id`                      Sim            Project role

  Conversations   GET            `/conversations`                     Sim            User

  Conversations   POST           `/conversations`                     Sim            User

  Messages        GET            `/conversations/:id/messages`        Sim            Conversation

  Messages        POST           `/conversations/:id/messages`        Sim            Conversation

  Files           POST           `/files`                             Sim            Owner/project

  Files           GET            `/files/:id`                         Sim            Owner/project

  Codex           GET            `/workspaces/:id`                    Sim            Workspace

  Codex           POST           `/workspaces/:id/tasks`              Sim            Workspace

  Codex           POST           `/workspaces/:id/terminal/execute`   Sim            Workspace
                                                                                     policy
  --------------------------------------------------------------------------------------------------

Cada endpoint implementado deve ganhar documentação de request,
response, errors, limits e side effects.
