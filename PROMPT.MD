Crie uma aplicação web completa de uma plataforma de Inteligência Artificial conversacional, inspirada na experiência de produtos como ChatGPT, porém com identidade visual própria.

IMPORTANTE: NÃO criar apenas um mockup ou protótipo visual. Construir uma interface funcional, organizada e preparada para integração com backend/API.

## 1. IDENTIDADE VISUAL

A aplicação deve utilizar EXCLUSIVAMENTE tema claro.

Não implementar dark mode.

Diretrizes visuais:

* Fundo predominantemente branco.
* Superfícies em branco e cinza muito claro.
* Azul como cor principal.
* Ciano como cor secundária/destaque.
* Texto em tons escuros.
* Bordas sutis.
* Sombras muito leves.
* Cantos moderadamente arredondados.
* Bastante espaço em branco.
* Design moderno de SaaS profissional.
* Interface limpa e minimalista.
* Excelente hierarquia visual.
* Responsiva para desktop, tablet e mobile.

Não utilizar visual neon, cyberpunk, excesso de gradientes ou aparência de template genérico.

## 2. AUTENTICAÇÃO

Criar uma área completa de autenticação.

### Login

Criar página `/login` contendo:

* Logo/nome da plataforma.
* Campo de e-mail.
* Campo de senha.
* Mostrar/ocultar senha.
* Checkbox "Lembrar de mim".
* Botão "Entrar".
* Link "Esqueci minha senha".
* Link "Criar conta".

Estados necessários:

* carregando;
* erro de credenciais;
* e-mail inválido;
* senha inválida;
* conta inexistente;
* sessão expirada.

Não utilizar credenciais fictícias.

## 3. CADASTRO

Criar página `/register`.

Campos:

* Nome completo.
* E-mail.
* Senha.
* Confirmar senha.

Adicionar validação de:

* e-mail válido;
* senha mínima;
* confirmação da senha;
* campos obrigatórios.

Exibir requisitos da senha de forma clara.

Após cadastro bem-sucedido, encaminhar o usuário para o fluxo de autenticação/painel.

## 4. RECUPERAÇÃO DE SENHA

Criar `/forgot-password`.

Fluxo:

1. Usuário informa e-mail.
2. Sistema informa que as instruções foram enviadas.
3. Criar tela para redefinição.
4. Usuário informa nova senha.
5. Confirma nova senha.
6. Sistema valida o token.
7. Senha é alterada.
8. Usuário pode retornar ao login.

Criar também estados de:

* token expirado;
* token inválido;
* solicitação inválida;
* senha incompatível;
* sucesso.

## 5. ALTERAÇÃO DE SENHA

Dentro da conta do usuário criar:

`Configurações → Segurança → Alterar senha`

Campos:

* Senha atual.
* Nova senha.
* Confirmar nova senha.

Exigir confirmação da senha atual antes da alteração.

## 6. PAINEL PRINCIPAL

Após login, abrir o painel principal da plataforma.

Estrutura:

SIDEBAR ESQUERDA

* Logo.
* Novo chat.
* Chat.
* Codex.
* Projetos.
* Arquivos.
* Configurações.

Separar visualmente a navegação principal do histórico de conversas.

### Histórico

Exibir:

* conversas recentes;
* nome da conversa;
* data/horário;
* menu de ações.

Ações:

* renomear;
* excluir;
* arquivar;
* fixar.

Adicionar busca nas conversas.

## 7. CHAT

O centro da aplicação deve ser um ambiente de conversa com IA.

Criar:

* cabeçalho da conversa;
* seleção de modelo;
* mensagens do usuário;
* mensagens da IA;
* suporte a Markdown;
* blocos de código;
* botão copiar código;
* regenerar resposta;
* editar mensagem;
* continuar conversa;
* anexar arquivos;
* campo de mensagem;
* botão enviar;
* indicador de geração.

O composer deve ficar fixado na parte inferior da área de chat.

## 8. NOVA CONVERSA

Ao clicar em "Novo chat", iniciar uma conversa limpa.

Na tela inicial do chat apresentar:

"Como posso ajudar?"

Abaixo, apresentar sugestões de utilização, por exemplo:

* Desenvolver uma aplicação.
* Analisar um arquivo.
* Explicar um código.
* Criar documentação.
* Resolver um problema.
* Planejar um projeto.

## 9. IMPORTAR PARA CODEX

A plataforma deve possuir uma integração conceitual entre Chat e Codex.

No menu de uma conversa disponibilizar:

"Importar para Codex"

Ao selecionar essa opção, abrir uma confirmação:

"Importar esta conversa para o Codex?"

Informar que o contexto da conversa será levado para o ambiente de desenvolvimento.

Preservar:

* mensagens;
* arquivos;
* código;
* requisitos;
* contexto técnico;
* instruções relevantes.

Após confirmar, abrir o workspace Codex.

## 10. CODEX

Criar a estrutura visual inicial do ambiente Codex.

O Codex deve possuir:

* explorador de arquivos;
* editor de código;
* terminal;
* painel de conversa com agente;
* execução de tarefas;
* histórico de alterações;
* projetos.

A interface deve parecer um ambiente profissional de desenvolvimento integrado à plataforma de IA.

Não implementar ainda ferramentas perigosas ou execução arbitrária no navegador. Criar a arquitetura visual e os pontos de integração para implementação posterior.

## 11. PROJETOS

Criar seção `/projects`.

Permitir visualizar:

* projetos existentes;
* criar projeto;
* nome;
* descrição;
* última atualização;
* quantidade de arquivos;
* quantidade de conversas.

Um projeto poderá posteriormente conter:

* chats;
* código;
* arquivos;
* sessões Codex;
* instruções;
* agentes.

## 12. ARQUIVOS

Criar `/files`.

Permitir:

* visualizar arquivos;
* pesquisar arquivos;
* fazer upload;
* excluir;
* visualizar informações;
* associar arquivos a projetos/conversas.

Criar interface preparada para diferentes tipos de arquivo.

## 13. PERFIL E CONFIGURAÇÕES

Criar `/settings`.

Seções:

### Conta

* nome;
* e-mail;
* foto/avatar.

### Segurança

* alterar senha;
* sessões ativas;
* sair de outras sessões.

### Preferências

* idioma;
* comportamento da interface;
* configurações de chat.

### Conta

* excluir conta.

## 14. RESPONSIVIDADE

A aplicação precisa funcionar corretamente em:

* desktop;
* notebook;
* tablet;
* smartphone.

No mobile:

* sidebar deve transformar-se em menu lateral;
* composer deve permanecer acessível;
* chat deve ocupar toda a largura;
* Codex deve adaptar sua estrutura.

## 15. ARQUITETURA DA INTERFACE

Organizar o projeto de forma modular.

Separar:

* autenticação;
* layout;
* chat;
* Codex;
* projetos;
* arquivos;
* configurações;
* componentes reutilizáveis;
* serviços de API;
* gerenciamento de estado.

Não duplicar componentes.

Criar componentes reutilizáveis para:

* Button;
* Input;
* Modal;
* Dropdown;
* Sidebar;
* ChatMessage;
* ChatComposer;
* FileUpload;
* Avatar;
* Toast;
* Dialog;
* LoadingState;
* EmptyState.

## 16. API

A interface deve ser preparada para consumir uma API real.

NÃO colocar lógica de negócio diretamente nos componentes da interface.

Criar uma camada de serviços para posteriormente conectar:

* autenticação;
* usuários;
* conversas;
* mensagens;
* arquivos;
* projetos;
* Codex;
* modelos de IA.

Exemplo conceitual:

`/api/auth`
`/api/users`
`/api/conversations`
`/api/messages`
`/api/files`
`/api/projects`
`/api/codex`
`/api/models`

Não utilizar dados falsos como se fossem dados reais.

Quando precisar demonstrar estados da interface, utilizar dados claramente identificados como estado local de desenvolvimento.

## 17. SEGURANÇA

Preparar a aplicação para:

* autenticação baseada em sessão/token;
* proteção de rotas;
* validação de entrada;
* tratamento seguro de erros;
* recuperação segura de senha;
* controle de sessão;
* logout;
* proteção contra acesso não autorizado.

Nunca armazenar senha em texto puro.

## 18. EXPERIÊNCIA DO USUÁRIO

A experiência deve ser extremamente simples:

Usuário entra:

LOGIN
↓
PAINEL
↓
NOVO CHAT
↓
CONVERSA COM IA
↓
"IMPORTAR PARA CODEX"
↓
WORKSPACE CODEX

O usuário não deve precisar entender detalhes técnicos para utilizar o sistema.

## 19. PRINCÍPIO FUNDAMENTAL

O produto NÃO deve parecer um simples chatbot.

Ele deve parecer uma plataforma completa de trabalho com Inteligência Artificial.

O Chat é a porta de entrada.

O Codex é o ambiente especializado de desenvolvimento.

Projetos, arquivos, conversas e contexto devem fazer parte do mesmo ecossistema.

## 20. QUALIDADE VISUAL

Priorizar:

* consistência;
* alinhamento;
* espaçamento;
* acessibilidade;
* responsividade;
* estados de loading;
* estados vazios;
* estados de erro;
* feedback visual;
* microinterações discretas.

Não criar telas genéricas apenas para preencher o projeto.

Cada tela deve ter uma finalidade real.

Resultado esperado:

Uma plataforma de IA moderna, profissional e totalmente clara, com autenticação completa, painel de chat, gerenciamento de conversas, arquivos, projetos, configurações e uma área Codex integrada ao contexto das conversas.
