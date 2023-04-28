const input= document.getElementById('txt-character');
const containerCards = document.getElementById('container-cards');
const URL1 = "https://rickandmortyapi.com/api/character";
const URL2 = "https://rickandmortyapi.com/api/character/?name=";

const getApi = async(URL) => {
    const response = await fetch(URL);
    const data = await response.json();
    // Array
    return data.results;
}
// Funcion encargada de crear las tarjetas
const createCrads = (character) => {
    const card = document.createElement('div');
    card.classList.add('card-character');

    const img = document.createElement('img');
    img.src = character.image;
    img.alt = character.name; 

    const containerDescription = document.createElement('div');
    containerDescription.classList.add('description-card');

    const nameCharacter = document.createElement('h2');
    nameCharacter.textContent = character.name;
    const genderCharacter = document.createElement('p');
    genderCharacter.textContent = "Gender:" + character.gender;
    
    // Anexo en el arbol DOM
    containerDescription.appendChild(nameCharacter);
    containerDescription.appendChild(genderCharacter);

    card.appendChild(img);
    card.appendChild(containerDescription);

    containerCards.appendChild(card)
}

const generate = async() => {
    const data =  await getApi(URL1);
    data.map(character => createCrads(character));
}


const getCharacterByName = async(event) => {
    containerCards.innerHTML= '';
    const data = await getApi(URL2 + event.target.value);
    data.map( character => createCrads(character))
    
}
window.addEventListener('DOMcontentLoaded', generate())

input.addEventListener('keyup', getCharacterByName);