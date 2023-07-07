import {selector} from "./selectores.js";

export const getPokes= ()=>{
  fetch(
    `https://pokeapi.co/api/v2/pokemon`
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