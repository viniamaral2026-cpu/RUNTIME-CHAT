# Traceability Matrix

A rastreabilidade conecta requisito, código, API, persistência, teste e
documentação.

  Domínio         Frontend   API        Persistência   Teste     Docs
  --------------- ---------- ---------- -------------- --------- ----------
  Auth            Partial    Contract   Partial        Missing   Complete
  Projects        Mock       Contract   Partial        Missing   Complete
  Conversations   Mock       Contract   Partial        Missing   Complete
  Chat            Partial    Contract   Partial        Missing   Complete
  Files           Mock       Contract   Partial        Missing   Complete
  AI              Partial    Contract   Partial        Missing   Complete
  Codex           Partial    Contract   Partial        Missing   Complete

## Regra

Quando uma funcionalidade muda, atualizar todos os elementos da cadeia.

Uma feature não deve existir somente no frontend.
