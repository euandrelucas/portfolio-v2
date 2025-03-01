---
title: "E: Unable to locate package"
description: "Para instalar softwares (ou packages) no ubuntu utilizamos comandos, Mas em casos muito raros pode ser que você consiga um erro muito chato, vamos aprender a resolver esse erro?"
date: "2021-08-08"
---

# E: Unable to locate package

Para instalar softwares (ou packages) no ubuntu utilizamos o comando:

```
$ sudo apt install package_name
```

Mas em casos muito raros pode ser que você consiga o seguinte erro:

```
Reading package lists... Done
Building dependency tree
Reading state information... Done
E: Unable to locate package package_name
```

Vamos resolver ele? Ok!

## Solução 1: Veja o nome do package

Possa ser que você esteja escrevendo o nome do package errado, por exemplo, **sudo apt install nofetch**, quando na verdade é **sudo apt install neofetch**, isso pode acontecer, caso você digite na pressa

## Solução 2: Atualize o cache de repositórios

Os pacotes atualizam, com isso versões antigas podem parar de funcionar, por isso é importante que você sempre verifique se eles estão atualizados

```
$ sudo apt update
```

**Este comando não atualizará o Ubuntu imediatamente. Eu recomendo entender o conceito de repositórios do Ubuntu. Basicamente, o comando ‘sudo apt update’ constrói um cache local de pacotes disponíveis.**

## Solução 3: Veja se o package está disponivel para sua versão do ubuntu

Tudo bem! Você verificou o nome do pacote e ele está correto. Você executa o comando update para reconstruir o cache e ainda vê o erro não foi possível localizar o pacote.

É possível que o pacote realmente não esteja disponível. Mas você está seguindo as instruções mencionadas em algum site e todo mundo parece ser capaz de instalá-lo assim. Qual pode ser o problema?

Eu posso ver duas coisas aqui. O pacote está disponível no repositório Universe e seu sistema não o habilitou ou o pacote não está totalmente disponível em sua versão do Ubuntu. Não se confunda. Eu vou explicar para você.

Primeiro passo, verifique a versão do Ubuntu que você está usando. Abra um terminal e use o seguinte comando:

```
$ lsb_release -a
```

Você obterá o número da versão do Ubuntu e o codinome na saída. O codinome é o que importa aqui:

```
estudo@estudo-pc:~$ lsb_release -a
No LSB modules are available.
Distributor ID:	Ubuntu
Description:	Ubuntu 20.04.2 LTS
Release:	20.04
Codename:	focal
```

## Solução 4: Ative os repositórios do ubuntu

Como dito no item 3 existem os repositorios, pode ser que eles não estejam ativados em sua maquina, você pode ativar com os comandos:

```
$ sudo add-apt-repository main
```

```
$ sudo add-apt-repository universe
```

```
$ sudo add-apt-repository restricted
```

```
$ sudo add-apt-repository multiverse
```
