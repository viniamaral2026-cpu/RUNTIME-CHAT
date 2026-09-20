# Auditoria AI

## Estado

PARTIAL.

## Evidências

Existe `AIProvider` e `OpenAIProvider`, mas:

-   usa `any`;
-   provider está implementado diretamente no módulo;
-   não há ModelRouter;
-   não há catálogo de modelos;
-   não há múltiplos providers comprovados;
-   token count é estimado por comprimento JSON;
-   streaming possui parser incompleto;
-   não há usage persistence.

## Correção

Criar arquitetura de provider server-side, contratos tipados e streaming
robusto.
