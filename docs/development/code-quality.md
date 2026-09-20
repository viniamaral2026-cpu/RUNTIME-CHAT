# Code Quality

## TypeScript

-   strict;
-   sem `any` desnecessário;
-   tipos de domínio centralizados;
-   sem duplicação.

## ESLint

A configuração atual precisa ser reconciliada com o formato de módulo
utilizado pelo arquivo `eslint.config.mjs`.

## Formatting

Prettier deve ser aplicado consistentemente.

## Build

Nenhum erro deve ser escondido por flags ou `|| true`.

## Dead code

Imports e componentes não utilizados devem ser removidos.
