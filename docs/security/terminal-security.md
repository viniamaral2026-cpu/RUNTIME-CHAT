# Terminal Security

O terminal é uma superfície de execução arbitrária e exige isolamento.

Requisitos:

-   sandbox;
-   filesystem restrito;
-   timeout;
-   limites de memória;
-   limite de processos;
-   cancelamento;
-   política de rede;
-   logging;
-   autorização;
-   cleanup.

Não executar comandos arbitrários diretamente no host principal da
aplicação.
