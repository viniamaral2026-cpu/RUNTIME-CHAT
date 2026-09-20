# Model Router

Responsabilidades:

1.  validar modelo ativo;
2.  verificar capabilities;
3.  escolher provider;
4.  aplicar limites;
5.  selecionar fallback permitido;
6.  registrar usage;
7.  medir duração;
8.  propagar erro corretamente.

Fallback não deve mudar silenciosamente a experiência sem regra
documentada.
