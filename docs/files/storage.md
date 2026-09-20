# Storage

Storage deve ser abstraído.

Exemplo:

``` ts
interface FileStorage {
  put(...)
  get(...)
  delete(...)
  exists(...)
}
```

Implementações podem ser local ou object storage, mas o domínio não deve
depender diretamente de uma tecnologia específica.
