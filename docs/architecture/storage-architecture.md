# Storage Architecture

## Metadados

PostgreSQL deve guardar:

-   owner;
-   project;
-   name;
-   originalName;
-   MIME;
-   extension;
-   size;
-   storageKey;
-   provider;
-   checksum;
-   status;
-   timestamps.

## Conteúdo

O conteúdo deve residir em storage apropriado, não em colunas de texto
do banco para arquivos grandes.

## Requisitos

-   keys não previsíveis;
-   autorização antes de download;
-   validação de tamanho;
-   validação de tipo;
-   checksum quando aplicável;
-   exclusão lógica ou física conforme política;
-   limpeza de uploads incompletos.
