import { GET_POKEMONS , GET_POKEMONS_BY_NAME, RESTART,POST_POKEMON ,GET_POKEMON_BY_ID} from "./index.js";
import axios from "axios";





export function getPokemons() {
  return async function (dispatch) {
    const pokemon = await axios.get(`http://localhost:3001/pokemons`);
    return dispatch({
      type: GET_POKEMONS,
      payload: pokemon.data,
    });
  };

}

export function getPokemonByName(name){
  return async function (dispatch){
 axios.get(`http://localhost:3001/pokemons?name=${name}`)
 .then((response) =>{
  return dispatch({type: GET_POKEMONS_BY_NAME, payload: response.data})
 }).catch((error) =>{
  console.log(error)
 })
} 
}
              
export function getPokemonById(id){
  return async function (dispatch){
    axios.get(`http://localhost:3001/pokemons/${id}`)
    .then((response) =>{
      return dispatch({type: GET_POKEMON_BY_ID, payload: response.data})
    }).catch((error) =>{
      console.log(error)
    }
    )
}};



export function postPokemon(newPokemon){
  return async function (){
      const response = await axios.post(`http://localhost:3001/pokemons/create`, newPokemon)
      console.log(response)
    } 
}


//MODIFICAR ESTO
export function restart (payload){
  return{
    type: restart,
payload
  
  }
}