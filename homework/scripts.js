
// Creating Search form for pokemon
const pokemonForm = document.querySelector('#form-data')

// creating event for pokemon search
pokemonForm.addEventListener('submit', (event) => {
    // preventing the page from refreshing
    event.preventDefault()
    // just seeing what we get
    // console.log(event)
    console.log(event.target[0].value)

    // creating a variable with the input from search
    const name = pokemonForm.name.value

    //calling function below with searched value
    pokemonData(name)
})

const pokeCard = document.querySelector('.pokeCard')

// creating async function to query the pokemon data for the search 
async function pokemonData(name){
    pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${name}`

    // await the fetch of the url
    const response = await fetch(pokemonUrl)

    // await for response from url
    const pokeData = await response.json()
    console.log(pokeData)
    
    //Pokemon attributes
    const pokeSprite = pokeData.sprites.front_default
    const pokeName = pokeData.name
    const pokeAbility = pokeData.abilities[0].ability.name
    // const pokeType = pokemonData.types[0].type.name

    pokeCard.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${pokeSprite}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${pokeName.toUpperCase()}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Abilities: </li>
                    <div id="displayAbilities">
                    </div>
                </ul>
            </div>
    </div>
    `

    // looping through all the abilities
    let abilities = ''
    for(let i in pokeData.abilities){
        abilities += `<li class="list-group-item">${pokeData.abilities[i].ability.name}</li>`
    }
    displayAbilities.innerHTML = abilities
} 