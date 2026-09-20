# API de Autenticação

## Endpoints previstos

  Método   Endpoint                      Auth
  -------- ----------------------------- ------------------------
  POST     `/auth/register`              Não
  POST     `/auth/login`                 Não
  POST     `/auth/logout`                Sim
  GET      `/auth/session`               Sim/controle de sessão
  POST     `/auth/forgot-password`       Não
  POST     `/auth/reset-password`        Token
  POST     `/auth/change-password`       Sim
  GET      `/auth/sessions`              Sim
  DELETE   `/auth/sessions/:id`          Sim
  POST     `/auth/sessions/revoke-all`   Sim

## Requisitos

Todos os endpoints devem validar entrada, controlar rate limit e
produzir erros consistentes.
