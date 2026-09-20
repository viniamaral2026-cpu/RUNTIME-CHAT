# Streaming

O adapter atual possui parser simplificado de SSE e ignora erros de
parse.

Implementação robusta deve suportar:

-   chunks parciais;
-   eventos fragmentados;
-   `data:`;
-   `[DONE]`;
-   cancelamento;
-   timeout;
-   provider error;
-   finalização;
-   persistência da mensagem.

`TextDecoderStream`/buffering apropriado deve ser considerado conforme
runtime.
