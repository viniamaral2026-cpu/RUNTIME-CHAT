# AI Model Contract

``` ts
interface ModelInfo {
  id: string
  provider: string
  displayName: string
  contextWindow: number | null
  maxOutputTokens: number | null
  supportsVision: boolean
  supportsStreaming: boolean
  supportsTools: boolean
  supportsCode: boolean
}
```

## Request

Deve conter:

-   messages;
-   model;
-   temperature quando suportado;
-   tools;
-   context;
-   abort signal;
-   metadata.

## Result

Deve conter:

-   content;
-   finishReason;
-   usage;
-   provider metadata segura.

O contrato deve ser independente do provider.
