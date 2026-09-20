# Threat Model

## Ameaças principais

  Ameaça              Impacto      Mitigação
  ------------------- ------------ ------------------------------------
  Account takeover    Alto         sessão segura, hashing, rate limit
  IDOR                Alto         autorização por recurso
  Path traversal      Alto         canonicalização e root enforcement
  Command injection   Crítico      sandbox e execução controlada
  Secret leakage      Crítico      server-side secrets
  Malicious upload    Alto         validação e isolamento
  Prompt/tool abuse   Alto         permission checks e limites
  AI cost abuse       Alto         quotas/rate limits
  XSS                 Alto         renderer seguro/CSP
  CSRF                Médio/alto   SameSite/CSRF strategy
  Data leakage        Alto         isolation e logs seguros

O threat model deve ser atualizado quando novas superfícies forem
adicionadas.
