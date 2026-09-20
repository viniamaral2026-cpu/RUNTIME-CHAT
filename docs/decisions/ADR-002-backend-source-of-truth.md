# ADR-002 --- Backend Source of Truth

## Status

PROPOSED

## Contexto

O frontend referencia `RUNTIME-BACKEND`, enquanto existe Prisma no
projeto frontend.

## Problema

Duas fontes de persistência podem gerar divergência.

## Decisão

O backend oficial deve ser definido como fonte de verdade. O Prisma do
frontend só deve permanecer se fizer parte explicitamente da arquitetura
aprovada.

## Consequência

Evitar segundo backend e segundo banco.
