import { GET_POKEMONS , GET_POKEMONS_BY_NAME,ACTION_FILTER_TYPES,ACTION_TYPE_ORDEN, RESET_FILTER, GET_ALL_TYPES ,GET_POKEMON_BY_ID} from "./index.js";
import axios from "axios";





export function getPokemons() {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/pokemons");
      return dispatch({
        type: GET_POKEMONS,
        payload: response.data,
      });
    } catch (error) {
      alert("Error");
    }
  };
  

  // return async function (dispatch) {
  //   const pokemon = await axios.get(`http://localhost:3001/pokemons`);
  //   return dispatch({
  //     type: GET_POKEMONS,
  //     payload: pokemon.data,
  //   })
  // }

}

export function getPokemonByName(name){
  return async function (dispatch){
await axios.get(`http://localhost:3001/pokemons?name=${name}`)
 .then((response) =>{
  return dispatch({type: GET_POKEMONS_BY_NAME, payload: response.data})
 }).catch((error) =>{
  alert("Pokemon Not Found ")
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

export function getAllTypes(){
  return async function (dispatch){
    axios.get(`http://localhost:3001/types`)
    .then((response) =>{
      return dispatch({type: GET_ALL_TYPES, payload: response.data})
    }).catch((error) =>{
      console.log(error)
    }
    )
}}



export function postPokemon(newPokemon){
  return async function (){
      const response = await axios.post(`http://localhost:3001/pokemons/create`, newPokemon)
      return response
    } 
}

export function actionFilterTypes(orderTypes){
  return{
    type: ACTION_FILTER_TYPES,
    payload: orderTypes
  }
}

export function actionTypeOrden(orden){
  return {
    type: ACTION_TYPE_ORDEN,
    payload: orden
  }
}


//MODIFICAR ESTO
export function resetFilter (payload){
  return{
    type: RESET_FILTER,
payload
  }
}