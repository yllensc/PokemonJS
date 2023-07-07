import {selector,pokeBox} from "./selectores.js";
console.log(pokeBox);
export const getPokes= ()=>{
  fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=30&limit=30`
  )
    .then((response) => response.json())
    .then(data=>{
        listPokes(data);
        console.log(data.result.name);
    })
    .catch(e=>{
    });
};

function listPokes(data){
    let arrayPokes = data.results;
    console.log(arrayPokes);
    arrayPokes.forEach(d => {
        const option = document.createElement('option');
        option.value = d.url;
        option.textContent = d.name;
        selector.appendChild(option);
    });
}

//pokemon escogido
const pokemon = {
  poke: ''
}
//

export function selectPoke(e){
  pokemon.poke = e.target.value;
  seeDataPoke();
}

function seeDataPoke(){
  const {poke} = pokemon;
  console.log(poke);
  fetch(poke)
    .then((pokeResponse)=>{ return pokeResponse.json()})
    .then((dataPoke)=>showPoke(dataPoke))
    .catch(e=>{console.log(e)})
}

function showPoke(data){
  console.log(data);
  let html = `<img src="${data.sprites.other.dream_world.front_default}" alt="" srcset="">
              <h4>${data.name}</h4>
              <p>Habilidad: ${data.abilities[0].ability.name}</p>
              <p>Peso: ${data.weight}</p>`;
  pokeBox.innerHTML = html;
}

