const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const pokemonModal = document.getElementById('pokemonModal')
let selectedPokemon
let cardClicado 
let selectname


const maxRecords = 151
const limit = 10
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}" onclick="modalDetails(); adicionarIDAoCard()" >
            <span class="number">#${pokemon.number}</span>
            <span class="name" id="selectname">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})


function modalDetailsPokemon() {
    return `
    <li class="pokemon ${pokemon.type}" onclick="modalDetails(); adicionarIDAoCard()" >
        <span class="number">#${pokemon.number}</span>
        <span class="name" >${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>

            <img src="${pokemon.photo}"
                 alt="${pokemon.name}">
        </div>
    </li>
`
  }



// Função para adicionar um ID único ao card quando clicado
  function adicionarIDAoCard() {
    // Gere um ID único (por exemplo, um timestamp)
    const selectPoke = 'selectPoke' 
    // Encontre o card clicado
    cardClicado = event.currentTarget;
    // Atribua o novo ID ao card clicado
    cardClicado.id = selectPoke;
    
  }

  // Selecione todos os cards com a classe "card"
  const pokemon = document.querySelectorAll('.pokemon');

  // Adicione um evento de clique a cada card
  pokemon.forEach(pokemon => {
    pokemon.addEventListener('click', adicionarIDAoCard);
  });


  function removerID() {
    cardClicado.id ='';
  }



  

