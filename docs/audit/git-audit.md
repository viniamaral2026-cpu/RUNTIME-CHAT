# Auditoria Git

## Achados

`.next` está rastreado pelo Git mesmo estando no `.gitignore`.

Também existem alterações não commitadas no snapshot.

## Correção

Remover artefatos de build do índice e estabelecer ciclo:

``` text
module
→ validate
→ commit
→ push
→ deploy
→ clean tree
```
