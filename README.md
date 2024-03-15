# <img src="./src/assets/img/icon/escudo_flamengo.png" target="_blank" alt="logo dio" width="40" /> PROJETO DE FILTRO DE CARDS 

Aqui você vai encontrar um pequeno projeto em HTML, CSS e JavaScript. Esse projeto mostra um filtro de cards. Criei cards dos jogadores do **Flamengo** e é possível encontrar o jogador através do input de pesquisa.

<div align="center">
 <img 
    src="./src/assets/img/img_readme/html-logo.png"
    alt="logo html" width="40"
  />
   <img 
    src="./src/assets/img/img_readme/css-logo.png"
    alt="logo css" width="48"
  />
  <img 
    src="./src/assets/img/img_readme/js-logo.png"
    alt="logo javascript" width="40" />
</div>

## DESCRIÇÃO DO PROJETO :computer:

Uso o JavaScript para criar dinamicamente os cards e para fazer o filtro.

No arquivo JSON **(players.json)** está as informações dos jogadores. Acesso ele com as funções **assíncronas** e com a função **map()** crio os cards.

<br/>
<div align="center">
 <img 
    src="./src/assets/img/img_readme/json_players.png"
    alt="json players" width="150" border="2"
  />
  <img 
    src="./src/assets/img/img_readme/function_create_list.png"
    alt="function create list" width="100" border="2"
  />
  <img 
    src="./src/assets/img/img_readme/function_window_onload.png"
    alt="function window onload" width="100" border="2"
  />
</div>
<br/>

Na função de filtro, uso o **FOR OF** para percorrer todas as tags li criadas e pegar o nome do jogador e vê se é o mesmo que estou buscando.

Também coloquei uma função para tirar os caracteres especiais (acentuação), para o filtro ser mais específico.

<br/>
<div align="center">
 <img 
    src="./src/assets/img/img_readme/function_filter_cards.png"
    alt="function filter cards" width="150" border="2"
  />
  <img 
    src="./src/assets/img/img_readme/function_remove_special_character.png"
    alt="function remove special character" width="100" border="2"
  />
</div>
<br/>

### GIF DO PROJETO

<br/>
<div align="center">
 <img 
    src="./src/assets/img/img_readme/projeto_flamengo.gif"
    alt="logo html" width="350" border="2"
  />
 
</div>
<br/>
<br/>

:smile: **<a href="https://cellerligia-23.github.io/filter_cards/">Página do projeto Filter Cards</a>** :blush:

