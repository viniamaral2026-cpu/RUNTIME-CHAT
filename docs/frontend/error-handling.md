# Error Handling Frontend

Estados mínimos:

``` text
loading
empty
success
error
retry
offline quando aplicável
```

Erros devem possuir:

-   mensagem compreensível;
-   ação de retry quando apropriado;
-   código técnico para diagnóstico;
-   nenhuma exposição de stack trace ou secret.
