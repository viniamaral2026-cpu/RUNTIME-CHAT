# Arquitetura Frontend

## Estado atual

O snapshot utiliza Next.js 14 com Pages Router, arquivos JavaScript em
`pages/` e TypeScript em `src/`.

A decisão de manter Pages Router ou migrar para App Router deve ser
formalizada antes de uma migração estrutural.

## Estrutura alvo

``` text
src/
├── components/
│   ├── ui/
│   ├── layout/
│   ├── navigation/
│   ├── chat/
│   ├── projects/
│   ├── files/
│   ├── codex/
│   ├── settings/
│   └── feedback/
├── contexts/
├── hooks/
├── services/
├── repositories/
├── api/
├── lib/
├── types/
└── features/
```

A camada de rotas deve permanecer separada da camada de domínio.

## Responsabilidades

### Components

Apresentação e interação.

### Hooks

Estado e comportamento reutilizável.

### Services

Orquestração de casos de uso no frontend quando necessário.

### API

Cliente HTTP tipado.

### Types

Contratos compartilhados do frontend.

### Contexts

Estado transversal, como autenticação e preferências.

## Regra

Componentes não devem executar diretamente operações críticas de
persistência nem possuir segredos de provider de IA.
