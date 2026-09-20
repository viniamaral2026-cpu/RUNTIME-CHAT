# Path Traversal

Arquivos de workspace devem ser resolvidos sob uma raiz autorizada.

Rejeitar:

``` text
../
..\ 
absolute paths
symlink escape
```

A verificação deve ocorrer no backend/runtime, não somente na interface.
