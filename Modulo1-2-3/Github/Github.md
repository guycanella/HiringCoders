
# Comandos do Git

Selecione o diretório que deseja iniciar o versionamento e execute:

```
git init
```

Crie um arquivo chamado `index.html` no mesmo diretório e execute:

```
git add index.html
```

Gera um ponto na linha do tempo para o nosso arquivo:

```
git commit -m "<algum comentário>"
```

Verifica os pontos da linha do tempo

```
git log
```

Supondo que o arquivo adicionado seja modificado no futuro, para verificar o status dele execute:

```
git status
```

Para poder navegar em uma linha do tempo alternativa, execute:

```
git branch <nome do novo branch>
```

Para migrar para a nova linha do tempo, execute:

```
git checkout <nome do novo branch>
```

Vamos supor que houve um erro em um arquivo adicionado recentemente ao novo branch. Para fazer uma alteração antes de "commitar" 
o arquivo, execute:

```
git reset
```

Então prossiga adicionando novamente o arquivo (`git add <arquivo>`) e "commitando" (`git commit -m "<comentário>"`).


Para voltar a linha do tempo principal, execute:

```
git checkout master
```

Entretanto as linhas do tempo ainda não se conhecem. Então para uni-lás em uma só, execute:

```
git merge <nome do novo branch>
```

Para obter informação de algum commit específico, execute:

```
git show <número do commit>
```

Para remover uma branch específica, execute:

```
git branch -D <nome do branch a ser deletado>
```
