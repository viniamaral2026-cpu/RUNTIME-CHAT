# Autorização

Autorização deve ocorrer no backend.

Matriz conceitual:

  Recurso               Owner               Admin              Member   Viewer
  ------------------- ------- ------------------- ------------------- --------
  Ver projeto             Sim                 Sim                 Sim      Sim
  Alterar projeto         Sim                 Sim      conforme regra      Não
  Gerenciar membros       Sim                 Sim                 Não      Não
  Alterar arquivos        Sim                 Sim      conforme regra      Não
  Executar Codex          Sim                 Sim      conforme regra      Não
  Terminal                Sim   conforme política   conforme política      Não

A matriz final deve ser validada antes da implementação.
