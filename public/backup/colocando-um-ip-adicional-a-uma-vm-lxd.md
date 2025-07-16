---
title: "Colocando um IP adicional a uma Virtual Machine do LXD"
description: 'Muita gente me pergunta "Ah, qual a formula mágica para crescer um bot?", "Como surgiu a ideia de fazer bot", então reduzi tudo a este único post.'
date: "2025-02-28"
---

Se tem um servidor dedicado na a OVH por exemplo, você pode adquirir IPs adicionais, para o seu dedicado. Como tenho recursos sobrando em meus servidores dedicados, queria fazer mini VPSs para meus projetos meus, utilizando de maneira mais simples ao invés de alugar uma VPS separada (sai caro).

Primeiro, temos que criar nossa virtual machine com o LXD

```
ubuntu@brownie:~$ lxc launch ubuntu:24.04 dreamteam --vm
Launching dreamteam
ubuntu@brownie:~$
```

Beleza, agora vamos o nome da nossa interface de hospedagem, isso é importante para que consigamos ligar a VM ao IP externo

```
ubuntu@brownie:~$ ip -o -4 route show to default
default via 127.0.0.1 dev eno1 proto dhcp src 127.0.0.1 metric 100
```

Agora adicionamos a interface de rede com

```
ubuntu@brownie:~$ lxc config device add dreamteam eth0 nic nictype=macvlan parent=eno1
Device eth0 added to dreamteam
```

Agora vamos para o painel da OVH Cloud na seção "Bare Metal Cloud" e vamos adicionar um MAC virtual.

No popup, vamos selecionar o tipo como OVH, e o nome fica a seu critério

Agora com o virtual mac gerado (pode demorar alguns minutos), nós adicionamos ele ao nosso servidor.

```
ubuntu@brownie:~$ lxc config set dreamteam volatile.eth0.hwaddr YOUR_VIRTUAL_MAC_HERE
```

Agora nós reiniciamos a virtual machine

```
ubuntu@brownie:~$ lxc restart dreamteam
```

Agora nós entramos no terminal de nossa virtual machine

```
ubuntu@brownie:~$ lxc exec dreamteam bash
root@dreamteam:~$ 
```

Agora vamos abrir as configurações do netplan

```
root@dreamteam:~# nano /etc/netplan/50-cloud-init.yaml
```