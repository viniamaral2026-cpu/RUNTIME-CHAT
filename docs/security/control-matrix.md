# Security Control Matrix

  -----------------------------------------------------------------------
  Controle          Objetivo          Estado auditado   Prioridade
  ----------------- ----------------- ----------------- -----------------
  Password hashing  proteger          Não comprovado    P0
                    credenciais                         

  HttpOnly session  proteger sessão   Não implementado  P0
                                      no frontend atual 

  Server            impedir IDOR      Não comprovado    P0
  authorization                                         

  Rate limit        impedir abuso     Ausente           P1

  Upload validation reduzir risco     Ausente           P1

  Path isolation    proteger          Ausente           P0
                    workspace                           

  Terminal sandbox  conter execução   Ausente           P0

  CSP               reduzir XSS       Não configurado   P1

  Audit logging     rastrear eventos  Modelo parcial    P1

  Secret hygiene    impedir vazamento `.env` ignorado;  P0
                                      conteúdo não lido 
  -----------------------------------------------------------------------

## Regra

Um controle não é considerado implementado por existir um comentário ou
configuração parcial.
