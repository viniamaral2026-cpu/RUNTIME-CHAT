# Execution Policy

## Princípio

Nenhuma ferramenta do Codex recebe permissões ilimitadas.

## File operations

Permitidas somente dentro do workspace autorizado.

## Terminal

Permitido somente dentro de sandbox e política de comandos/recursos.

## Git

Read operations podem ser automatizadas conforme autorização. Write/push
devem respeitar política explícita.

## Agent

O agente pode planejar e propor. A aplicação de mudanças deve respeitar
approval policy.

## Auditoria

Cada execução crítica deve gerar evento de auditoria.
