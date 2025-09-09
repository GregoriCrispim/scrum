Passo a passo: trabalhar na sua branch (ex.: karla) — do clone ao deploy

2) Clonar o repositório (apenas 1ª vez)
git clone <URL-do-repositorio>
cd <nome-da-pasta-do-repositorio>

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
git checkout -b karla origin/karla

6) Fluxo diário para trabalhar na sua branch
# Antes de começar (garante que está na branch e atualizada)
git checkout karla
git pull origin karla

# Trabalhar nos arquivos...
# Depois:
git add .
git commit -m "Descrição curta e clara do que foi feito"
git push origin karla