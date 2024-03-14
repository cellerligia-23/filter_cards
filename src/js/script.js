const element_ul = document.getElementById("cards-container");
const element_input = document.getElementById("input-seach");

async function getArrayPlayers() {
  const response = await fetch("./players.json");
  const players_data = await response.json();
  const players_list = players_data.players;
  
  return players_list;
};

async function createList() {
  const array_list_players = await getArrayPlayers();
  
  element_ul.innerHTML += array_list_players.map(
    (player) => `
    <li class="cards">
      <img src="${player.url}" alt="Jogador ${player.name}" />
      <div class="content-text">
        <h4 
          id="name-player-${player.number}" 
          class="information-players name-player"
        >
          ${player.name}
        </h4>
        <p 
          id="position-player-${player.number}" 
          class="information-player position-player"
        >
          ${player.position}
        </p>
        <p 
          id="number-player-${player.number}" 
          class="information-player number-player"
        >
          Camisa Nº: ${player.number}
        </p>
      </div>
    </li>`
  ).join("");
};

function removerSpecials(texto) {
  // eliminando acentuação
  texto = texto.replace(/[ÀÁÂÃÄÅ]/,"A");
  texto = texto.replace(/[àáâãäå]/,"a");
  texto = texto.replace(/[ÈÉÊË]/,"E");
  texto = texto.replace(/[èéê]/,"e");
  texto = texto.replace(/[Ç]/,"C");
  texto = texto.replace(/[ç]/,"c");
  texto = texto.replace(/[Ñ]/,"N");
  texto = texto.replace(/[ñ]/,"n");

  return texto.replace(/[^a-z0-9]/gi,' '); 
};

function filterCards() {
  const cards = document.querySelectorAll(".cards");
  let format_input_text = element_input.value.toLocaleLowerCase();

  if(format_input_text != "") {
    
    for(let card of cards) {
      let name = card.querySelector("h4");
      name = name.textContent.toLocaleLowerCase();

      format_input_text = removerSpecials(format_input_text);
      name = removerSpecials(name);
      
      if(!name.includes(format_input_text)) {
        card.style.display = "none";
      } else {
        card.style.display = "block";
      };
    };

  } else {
    for(let card of cards) {
      card.style.display = "block";
    };
  };
};

element_input.addEventListener("input", filterCards);

window.onload = () => {
  createList();
};
