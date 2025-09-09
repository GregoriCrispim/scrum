Passo a passo: trabalhar na sua branch (ex.: karla) — do clone ao deploy

1) Pré-requisitos
- Git instalado (git --version)
- Acesso ao repositório no GitHub (HTTPS ou SSH)
- Configurar usuário local (uma vez):
  git config --global user.name "Seu Nome"
  git config --global user.email "seu.email@exemplo.com"
- Se usar SSH, gere e adicione sua chave ao GitHub:
  ssh-keygen -t ed25519 -C "seu.email@exemplo.com"
  # copie o conteúdo de ~/.ssh/id_ed25519.pub para o GitHub

2) Clonar o repositório (apenas 1ª vez)
git clone <URL-do-repositorio>
cd <nome-da-pasta-do-repositorio>

Exemplo:
git clone https://github.com/empresa/projeto.git
cd projeto

3) Verificar / adicionar remote
git remote -v
# Se não existir:
git remote add origin <URL-do-repositorio>

4) Buscar tudo do remoto
git fetch --all
# opcionalmente atualizar main local:
git checkout main
git pull origin main

5) Criar ou acessar sua branch "karla"
# Se a branch já existir no remoto:
git fetch origin
git checkout karla            # ou: git checkout -b karla origin/karla

# Se a branch NÃO existir (criar e publicar):
git checkout -b karla
git push -u origin karla

6) Fluxo diário para trabalhar na sua branch
# Antes de começar (garante que está na branch e atualizada)
git checkout karla
git pull origin karla

# Trabalhar nos arquivos...
# Depois:
git add .
git commit -m "Descrição curta e clara do que foi feito"
git push origin karla

7) Manter sua branch atualizada com main
Opção A — Merge (mais simples):
git checkout karla
git fetch origin
git merge origin/main
# resolver conflitos se aparecerem, depois:
git add .
git commit -m "Resolvendo conflitos com main"
git push origin karla

Opção B — Rebase (histórico mais limpo):
git checkout karla
git fetch origin
git rebase origin/main
# resolver conflitos durante o rebase:
# editar arquivos -> git add <arquivo> -> git rebase --continue
# após terminar:
git push origin karla --force-with-lease
# Atenção: force push reescreve histórico — use --force-with-lease para segurança

8) Resolver conflitos (passo a passo)
- Git mostrará os arquivos em conflito.
- Abra os arquivos, procure os marcadores (<<<<<<<, =======, >>>>>>>) e escolha/mescle o código.
- Depois:
  git add <arquivo-resolvido>
  # se estiver em rebase: git rebase --continue
  # se estiver em merge: git commit -m "Resolvendo conflitos"
  git push origin karla

9) Enviar Pull Request (PR) para integrar sua branch em main
- No GitHub: vá no repositório -> Compare & pull request (ou New pull request)
- Base: main, Compare: karla
- Descreva o que foi alterado, coloque reviewers, labels e link para issues se houver.
- Após aprovação, faça merge via GitHub (Squash / Merge / Rebase conforme a política do time).
- Depois do merge, atualize seu main local:
  git checkout main
  git pull origin main

10) Deploy por branch (cada dev com sua própria branch)
- Vercel: em Project Settings -> Git -> Production Branch / Preview Branch -> selecione "karla" para deploy automático de pushes na sua branch.
- Heroku: Connect to GitHub -> escolha o repositório -> Enable Automatic Deploys na branch "karla".
- Netlify / outros: configurar para monitorar a branch "karla".
- GitHub Actions: no workflow (.github/workflows/*.yml) defina triggers para a branch:
  on:
    push:
      branches: [ "karla" ]

Observação: em ambientes de produção normalmente usa-se a branch main (ou production). Branches de dev costumam fazer deploy em ambientes de review/staging.

11) Dicas e comandos úteis
- Ver branches locais e remotas:
  git branch         # locais
  git branch -a      # locais + remotas
- Configurar upstream (se esqueceu):
  git push -u origin karla
- Se você tiver um fork:
  git remote add fork <URL-do-seu-fork>
  git push -u fork karla
- Para ver status/modificações:
  git status
  git log --oneline --graph --decorate
- Se receber o erro "fatal: 'karla' does not appear to be a git repository":
  Isso ocorreu por executar `git push karla` — correto é `git push origin karla`
- Forçar push com segurança:
  git push origin karla --force-with-lease

12) Checklist resumido (comandos em ordem)
# Clonar (1ª vez)
git clone <URL>
cd <repo>

# Preparar e entrar na branch
git fetch origin
git checkout -b karla origin/karla    # se existir remotamente
# OU
git checkout -b karla                 # se for criar
git push -u origin karla              # define upstream

# Trabalhar e enviar
git checkout karla
git pull origin karla
# fazer alterações
git add .
git commit -m "mensagem"
git push origin karla

# Atualizar com main (merge ou rebase)
git fetch origin
git merge origin/main    # ou git rebase origin/main

# Abrir PR no GitHub e depois, se mergeado:
git checkout main
git pull origin main