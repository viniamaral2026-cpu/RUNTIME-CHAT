# Code Changes

Operações:

-   CREATE;
-   UPDATE;
-   DELETE;
-   RENAME.

Status:

-   PROPOSED;
-   APPROVED;
-   REJECTED;
-   APPLIED;
-   FAILED;
-   REVERTED.

O modelo atual usa `ChangeStatus` também para `operation`, o que é
semanticamente incorreto e deve ser corrigido.
