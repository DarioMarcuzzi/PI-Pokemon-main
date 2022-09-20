import{GET_POKEMONS, GET_POKEMONS_BY_NAME, POST_POKEMON, GET_POKEMON_BY_ID} from '../acciones/index.js'


const initialState = {
    listaPokemon: [],
    pokemonDetail: [],
}

export default function rootReducer( state = initialState, action){
switch(action.type){
    case GET_POKEMONS:
        return {
            ...state,
            listaPokemon: action.payload
        }
    case GET_POKEMONS_BY_NAME:
        return{
            ...state,
            listaPokemon: [action.payload]
        }
    case GET_POKEMON_BY_ID:
        return {
            ...state,
            pokemonDetail: action.payload
        }
    case POST_POKEMON:
        return {
            ...state,
        }


    default:
        return state
        
}
    

}