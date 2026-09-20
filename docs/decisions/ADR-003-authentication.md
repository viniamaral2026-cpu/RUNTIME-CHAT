# ADR-003 --- Authentication

## Status

PROPOSED

## Decisão proposta

Sessões server-side com cookie HttpOnly, Secure em produção, SameSite
apropriado e password hashing forte.

Frontend nunca deve fabricar identidade.
