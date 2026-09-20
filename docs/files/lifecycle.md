# File Lifecycle

``` text
REQUESTED
→ UPLOADING
→ PROCESSING
→ READY
```

Falhas:

``` text
UPLOADING → FAILED
PROCESSING → FAILED
```

Exclusão:

``` text
READY → DELETED
```

A máquina de estados deve ser implementada no backend.

Uploads abandonados precisam de cleanup.
