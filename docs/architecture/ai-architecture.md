# Arquitetura de IA

## Objetivo

Separar o produto de um provider específico.

``` text
Chat
 ↓
AI Application Service
 ↓
Model Router
 ↓
AI Provider Adapter
 ↓
Provider
```

## Provider interface

A interface deve ser tipada e independente de provider:

``` ts
interface AIProvider {
  generateText(request: GenerateTextRequest): Promise<GenerateTextResult>
  streamText(request: StreamTextRequest): AsyncIterable<AIStreamEvent>
  getModelInfo(modelId: string): Promise<ModelInfo>
}
```

A implementação atual usa `any` e chama diretamente a API OpenAI. Deve
ser substituída por contratos tipados e execução server-side.

## Model Router

Responsabilidades:

-   selecionar modelo;
-   validar capabilities;
-   selecionar provider;
-   fallback controlado;
-   timeout;
-   retry;
-   usage;
-   auditoria.

Fallback nunca deve alterar silenciosamente requisitos do usuário.
