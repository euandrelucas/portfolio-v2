---
title: "Como ter um bot grande no Discord?"
description: 'Muita gente me pergunta "Ah, qual a formula mágica para crescer um bot?", "Como surgiu a ideia de fazer bot", então reduzi tudo a este único post.'
date: "2024-05-26"
---

Para começar, você precisa ter um rumo... Por qual motivo você está fazendo aquele bot? E por que você quer que ele cresça? Se você não souber responder a essas perguntas, então você não está pronto para ter um bot.

## O que é um bot?

Bot de forma geral, é um "programa" (vulgo aplicativos, tanto que o discord mudou o nome de bots para APPs), que executa tarefas automatizadas, mas isso não se resume apenas ao Discord, sabia que este website que você está vendo é gerado por um bot? Só que ao invés de fazer automações para usuários, ele gera páginas HTML a partir de códigos em TypeScript!

Existem vários tipos de bots, já os bots para discord, são bots que interagem com os usuários, seja para entretenimento, moderação, ou até mesmo para ajudar em alguma tarefa.

"Ah, então é só fazer um bot e pronto?" Não, não é bem assim, você precisa de um diferencial, algo que faça as pessoas quererem usar o seu bot, e não o de outra pessoa.

Lista de ideias que pessoas tem mas que vários bots diferentes já fazem:

- Bot de música;
- Bot de moderação;
- Bot de economia;
- Bot de memes;
- Bot de anúncios;
- Bot de bem-vindo;
- Bot de despedida;
- Bot de sugestões;
  Entre muitos outros...

Tudo bem você querer fazer um bot que já "exista", mas se for fazer, você tem que ser melhor do que os que já existem, que se seu bot for bom, ele irá crescer naturalmente.

## Como fazer um bot crescer?

Agora que você já tem um bot, e ele é bom, como fazer ele crescer? A resposta é simples: Divulgação.

Quando eu digo divulgação, não é sair por ai mandando mensagem para todo mundo "Ei, usa meu bot", isso é chato e você pode ser banido de vários servidores por isso.

A melhor forma de divulgar seu bot é tentar fazer parcerias com servidores do nicho do seu bot, como eu posso citar o caso do DreamTeam, antes do lançamento, ele já tinha várias parcerias com diversos servidores de futebol, e isso fez com que o bot crescesse muito rápido, por ele já ter um público alvo.

É bem melhor quando o bot é nichado, ou seja, ele é feito para um público específico, do que um bot genérico, que faz de tudo um pouco, mas nada muito bem, e de preferência, faça um bot que você mesmo usaria, pois assim você saberá o que melhorar.

## Planejando um Bot

Agora que você já sabe o que é um bot, e como fazer ele crescer, você precisa planejar o seu bot, e para isso, você precisa responder as seguintes perguntas:

- Qual o objetivo do bot?
- Qual o público alvo?
- O que o bot fará?
- O que o bot precisa para funcionar?

Além disso, precisaria ser feito um estudo de caso.

Se você souber responder a essas perguntas, você já está no caminho certo para ter um bot.

Paa isso, vou exemplificar aqui um bot ficticio para Discord, vamos **supor** que o bot vá ser de astronomia.

### Qual o objetivo do bot?

Isso entra no primeiro tópico, por que você está fazendo o bot? O que você quer que ele faça?

No caso do bot de astronomia, ele poderia mostrar informações sobre planetas, estrelas, constelações, e até mesmo prever eclipses, e eventos astronômicos.

Além disso, seria interessante ele ter atualizações diárias sobre o que está acontecendo no espaço, e quem sabe até mesmo um sistema de perguntas e respostas sobre astronomia.

E também seria interessante ele ter um sistema para integrar ele com as principais agências espaciais, como a NASA, a ESA, e talvez até empresas terciarias como a SpaceX.

### Estudo de caso

Ok, temos o objetivo do bot, agora precisamos saber quem vai usar o bot, e o que eles esperam do bot.

Para isso, vamos utilizar a ferramenta de "descobrir servidores" do Discord e pesquisar por servidores com tema espacial.

Para isso, eu escolhi algumas palavras chaves e vou pesquisar elas no descobrir servidores.
![Descobrir Servidores](/assets/posts/descobrirservidores.webp)

1. Palavra chave "nasa"

- Encontrei 1 servidor, de um YouTuber que fala sobre astronomia, e tem um servidor para os inscritos dele.
  ![NASA](/assets/posts/pesquisanasa.webp)

2. Palavra chave "astronomia"

- Pesquisando por astronomia, encontrei 3 servidores que parecem ser os mais focados no assunto:
- - Frederico Andrade: Comunidade sobre "SpaceFlight Simulator";
- - Astronoia: Comunidade sobre astronomia, aparentemente francês;
- - Frontera Espacial: Comunidade sobre astronomia, aparentemente espanhol (parceira do Discord).
    ![Astronomia](/assets/posts/pesquisaastronomia.webp)

O bot de astronomia seria bem recebido nesses servidores, e poderia até mesmo ser um bot oficial deles, com isso já temos mais algumas coisas para por em mente:

1. Bot precisa ter suporte a vários idiomas (Português, Inglês, Francês, Espanhol);
2. Bot **pode** ter um sistema de notícias diárias sobre astronomia;
3. Bot **pode** ter um sistema de perguntas e respostas sobre astronomia;
4. Bot **pode** ter um sistema de integração com a NASA, ESA, e SpaceX.

Segundo estudo de caso é procurar por bots de astronomia, e ver o que eles fazem, e o que eles não fazem, e tentar fazer melhor.

Ao pesquisar pelos bots, foram encontrados 3:

1. [AstroBot](https://discord.com/application-directory/792458754208956466):

- - This is an Astronomy discord bot with various functionalities and uses; created with love and built with your support.

2. [Cosmos](https://discord.com/application-directory/943033915600404512)

- - Cosmos is an advanced astronomy discord bot providing you with over 25 commands, with each track of what's happening in our solar system! Its purpose is to educate people about the universe and its secrets. Space is the greatest mystery right now, so it's never too late to understand it. If you like space and want to explore it, simply invite Cosmos.

3. [Horizon](https://discord.com/application-directory/1183177251316047983)

- - Horizon utilises real-time data to bring you the latest and most accurate information about the cosmos! Whether you're a space enthusiast, astronomer, or just curious about the wonders beyond our planet, Horizon is the perfect addition to your Discord server.

![Bots](/assets/posts/descobrirbots.webp)

OBS: Dos 3, o "Horizon" parece ser o mais arrumadinho.

Agora o ideal é que você teste os bots, e veja o que eles fazem, e o que eles não fazem, e tente fazer melhor.

### O que o bot precisa para funcionar?

Agora que você já sabe o que o bot vai fazer, você precisa saber o que ele precisa para funcionar.

Bots para Discord, eles precisam em sua composição:

1. Programador;
2. Designer;
3. Hospedagem;
4. Website (opcional, porém acho importante);
5. Servidor de Suporte (opcional, porém acho importante).

Atualmente o que é prioridade é:

1. Programador;
2. Hospedagem.

O programador é a pessoa que vai fazer o bot, e o hospedagem é onde o bot vai ficar, e o website é onde você vai divulgar o bot, e o servidor de suporte é onde as pessoas vão tirar dúvidas sobre o bot.

1. Programação
   Para fazer um bot, você precisa saber programar, e para fazer um bot para Discord, você precisa ter conhecimento de qualquer linguagem de programação back-end: Rust, JavaScript, TypeScript, Python, Kotlin, Java, e afins... Além de precisar de conhecimento em banco de dados, como MongoDB, MySQL, MariaDB, PostgreSQL, ou até SQLite.

Se você não sabe programar, e não tem ninguém que possa programar para você, você pode contratar um programador, ou aprender a programar, eu mesmo aprendi a programar fazendo bots para Discord, e hoje sou um "ótimo" programador backend, quem sabe um hobby se torne uma profissão? Vou deixar aqui algumas recomendações:

### Programação back-end

- Lógica de Programação: [Curso em Vídeo](https://www.youtube.com/watch?v=8mei6uVttho&list=PLHz_AreHm4dmSj0MHol_aoNYCSGFqvfXV&pp=iAQB)
- Python: [Curso em Vídeo](https://www.youtube.com/watch?v=0LB3FSfjvao&list=PLHz_AreHm4dksnH2jVTIVNviIMBVYyFnH&pp=iAQB)
- JavaScript: [Curso em Vídeo](https://www.youtube.com/watch?v=1-w1RfGIov4&list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1&pp=iAQB)
- Java: [Curso em Video](https://www.youtube.com/watch?v=sTX0UEplF54&list=PLHz_AreHm4dkI2ZdjTwZA4mPMxWTfNSpR&pp=iAQB)
- MySQL: [Curso em Vídeo](https://www.youtube.com/watch?v=Ofktsne-utM&list=PLHz_AreHm4dkBs-795Dsgvau_ekxg8g1r&pp=iAQB)
- PHP: [Curso em Vídeo](https://www.youtube.com/watch?v=F7KzJ7e6EAc&list=PLHz_AreHm4dm4beCCCmW4xwpmLf6EHY9k&pp=iAQB)

### Programação front-end

- HTML 5 e CSS 3:
- - Módulo 1: [Curso em Vídeo](https://www.youtube.com/watch?v=Ejkb_YpuHWs&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n&pp=iAQB)
- - Módulo 2: [Curso em Vídeo](https://www.youtube.com/watch?v=vPNIAJ9B4hg&list=PLHz_AreHm4dlUpEXkY1AyVLQGcpSgVF8s&pp=iAQB)
- - Módulo 3: [Curso em Vídeo](https://www.youtube.com/watch?v=ofFgnDtn_1c&list=PLHz_AreHm4dmcAviDwiGgHbeEJToxbOpZ&pp=iAQB)
- - Módulo 4: [Curso em Vídeo](https://www.youtube.com/watch?v=zHKHMmEG9vE&list=PLHz_AreHm4dkcVCk2Bn_fdVQ81Fkrh6WT&pp=iAQB)

- PHP: [Curso em Vídeo](https://www.youtube.com/watch?v=F7KzJ7e6EAc&list=PLHz_AreHm4dm4beCCCmW4xwpmLf6EHY9k&pp=iAQB)

Com os cursos acima, você já consegue fazer um bot para Discord, e até mesmo um website para ele.

2. Hospedagem
   Para hospedar um bot, você precisa de um servidor, e para isso, recomendo fortemente utilizar um VPS (Virtual Private Server), eu mesmo utilizo a [Contabo](https://contabo.com/), e recomendo, pois é barato, e tem um bom suporte, mas vou deixar aqui algumas recomendações:

- [Contabo](https://contabo.com/)
- [Digital Ocean](https://www.digitalocean.com/)
- [Vultr](https://www.vultr.com/)
- [Hetzner](https://www.hetzner.com/)
- [OVH](https://www.ovh.com/)
- [AWS](https://aws.amazon.com/)
- [Google Cloud](https://cloud.google.com/)
- [Azure](https://azure.microsoft.com/)
  Enter muitos outros...

Caso não tenha dinheiro para pagar um VPS, você pode utilizar hospedagens de Discord, como a Discloud ou a SquareCloud, porém, elas são limitadas, e não recomendadas para bots grandes, porém, das listadas, já usei a Discloud, e nunca tive problemas, então recomendo ela.

- [Discloud](https://discloudbot.com/)
- [SquareCloud](https://squarecloud.app/)

3. Designer
   Para fazer um bot, você pode precisar de um designer, para fazer artes, design de comandos e etc, e para isso, você pode contratar um, ou fazer você mesmo, eu mesmo faço meus designs, e recomendo o [Figma](https://www.figma.com/), é uma ferramenta gratuita, e muito boa, e fácil de usar.

4. Website
   Para divulgar o bot, você precisa de um website, e para isso, você pode utilizar o [Vercel](https://vercel.com/), o [Netlify](https://www.netlify.com/), ou até mesmo o [GitHub Pages](https://pages.github.com/), ou você mesmo pode hospedar em seu próprio VPS, caso tenha optado pora essa opção!

### Conclusão

Agora que você já sabe o que é um bot, como fazer ele crescer, e o que ele precisa para funcionar, você já está pronto para ter um bot, e fazer ele crescer, e quem sabe, ele se torne o próximo MEE6.

Se você tiver alguma dúvida, ou precisar de ajuda, pode me chamar no Discord, ou me mandar um e-mail, estou sempre disposto a ajudar.

Espero que tenha gostado do post, e que ele tenha te ajudado a entender um pouco mais sobre bots, e como fazer eles crescerem.

Até a próxima!
