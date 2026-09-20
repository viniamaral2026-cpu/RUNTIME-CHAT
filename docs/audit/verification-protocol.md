# Verification Protocol

Uma feature só pode ser marcada `VERIFIED` quando cumprir:

## 1. Static

-   código presente;
-   tipos válidos;
-   imports válidos;
-   rotas válidas.

## 2. Functional

-   happy path;
-   validation;
-   error path;
-   permission path.

## 3. Persistence

Se houver dados, comprovar persistência real.

## 4. Security

Comprovar autorização e isolamento.

## 5. Tests

Automatizar casos críticos.

## 6. Production

Quando aplicável:

-   deploy;
-   health;
-   smoke.

## 7. Documentation

Atualizar docs.

## 8. Git

Commit, push e working tree limpo.

Sem todas essas evidências, o status permanece `PARTIAL`.
