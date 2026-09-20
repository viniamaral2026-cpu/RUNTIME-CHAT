# ADR-001 --- Routing Architecture

## Status

PROPOSED

## Contexto

O snapshot possui Pages Router e arquivos como `pages/projects/page.js`,
enquanto o middleware espera `/projects`.

## Problema

A estrutura atual não representa claramente as rotas declaradas.

## Opções

1.  manter Pages Router e reorganizar páginas;
2.  migrar integralmente para App Router.

## Decisão

Pendente de validação técnica durante a reconciliação.

## Consequência

Não iniciar migração parcial.
