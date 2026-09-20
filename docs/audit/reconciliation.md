# Reconciliação

## Objetivo

Comparar o que foi especificado com o que realmente existe.

  Domínio      Especificação           Implementação auditada   Resultado
  ------------ ----------------------- ------------------------ ------------
  Auth         real                    mock                     Divergente
  Chat         persistente/streaming   parcial                  Divergente
  Projects     CRUD                    estático                 Divergente
  Files        storage                 estático                 Divergente
  Codex        workspace/runtime       UI/tipos                 Divergente
  Navigation   desktop/mobile          ausente                  Divergente
  DB           completo                simplificado             Divergente
  Tests        unit/integration/e2e    ausente                  Divergente
  Docs         completa                mínima                   Divergente
  Git          clean                   `.next` tracked          Divergente

## Regra

O TODO deve ser reconstruído a partir desta reconciliação.
