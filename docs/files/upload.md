# Upload

Fluxo:

``` text
Select/drop
→ client validation
→ upload API
→ auth
→ authorization
→ server validation
→ storage
→ metadata DB
→ ready
```

Estados:

-   uploading;
-   processing;
-   ready;
-   failed;
-   deleted.

Cancelamento deve limpar recursos parciais quando possível.
