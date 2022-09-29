import{GET_POKEMONS, GET_POKEMONS_BY_NAME,ACTION_FILTER_TYPES, GET_ALL_TYPES, ACTION_TYPE_ORDEN, GET_POKEMON_BY_ID, RESET_FILTER} from '../acciones/index.js'


const initialState = {
    allPokemon: [],
    listaPokemon: [],
    pokemonDetail: [],
    allTypes: [],
    pokemonFilter: [],

}

export default function rootReducer( state = initialState, action){
switch(action.type){
    case GET_POKEMONS:
        return {
            ...state,
            listaPokemon: action.payload,
            allPokemon: action.payload,
            
        }
    case GET_POKEMONS_BY_NAME:
        return{
            ...state,
            listaPokemon: [action.payload],
            pokemonFilter: [action.payload]


        }
    case GET_POKEMON_BY_ID:
        return {
            ...state,
            pokemonDetail: action.payload,
        }

        
    case ACTION_FILTER_TYPES:
      if(action.payload.length === 0){
        return {
          ...state,
          pokemonFilter: state.allPokemon
        } 
      } else {
        let types = action.payload
        let result = []
      


      if(state.pokemonFilter.length > 0){
        let listaFiltrada = [...state.pokemonFilter]
        for(let i = 0 ; i < types.length ; i++){
          result = listaFiltrada.filter(pokemon => pokemon.type.includes(action.payload[i]))
        }
        return {
          ...state,
          pokemonFilter: result
        }
        
      } else {
        let allPokemon = [...state.allPokemon]
        for(let i = 0 ; i < types.length ; i++){
          result = allPokemon.filter(pokemon => pokemon.type.includes(action.payload[i]))
        }
        return {
          ...state,
          pokemonFilter: result
      }
    }

      }
    case GET_ALL_TYPES:
      return {
        ...state,
        allTypes: action.payload
      }
    
    case  RESET_FILTER:
      console.log("esto se ejecuta" ,state.allPokemon)
      return {
        ...state,
        listaPokemon: state.allPokemon,
        pokemonFilter: state.allPokemon
        
      }


    case ACTION_TYPE_ORDEN:
      
      let ordenPokemon = [...state.allPokemon]
      console.log(ordenPokemon)
      switch(action.payload){
        case 'DB':
          let resultOrden = ordenPokemon.filter(e => e.createdInDb === true)

          if(resultOrden.length === 0) {
            return{
              ...state,
              pokemonFilter: ""
            }
          } else {
            return{
              ...state,
              pokemonFilter: resultOrden
            }
          }
          
          
          // console.log("resultOrden" , resultOrden)

          
          // return{
          //   ...state,
          //   pokemonFilter: resultOrden
          // }
        case 'API':
          
          let resultOrden2 = ordenPokemon.filter(e => e.hasOwnProperty('createdInDb') === false)
          return{
            ...state,
            pokemonFilter: resultOrden2
          }
        case 'ALL':
          return{
            ...state,
            pokemonFilter: state.allPokemon
          }
        case 'A-Z':
          let resultOrden3 = ordenPokemon.sort((a,b) => {
            if(a.name > b.name){
              return 1
            }
            if(a.name < b.name){
              return -1
            }
            return 0
          })
          return{
            ...state,
            pokemonFilter: resultOrden3
          }
        case 'Z-A':
          let resultOrden4 = ordenPokemon.sort((a,b) => {
            if(a.name > b.name){
              return -1
            }
            if(a.name < b.name){
              return 1
            }
            return 0
          })
          return{
            ...state,
            pokemonFilter: resultOrden4
          }
        case 'Mayor':
          let resultOrden5 = ordenPokemon.sort((a,b) => {
            if(a.attack > b.attack){
              return -1
            }
            if(a.attack < b.attack){
              return 1
            }
            return 0
          })
          return{
            ...state,
            pokemonFilter: resultOrden5
          }
        case 'Menor':
          let resultOrden6 = ordenPokemon.sort((a,b) => {
            if(a.attack > b.attack){
              return 1
            }
            if(a.attack < b.attack){
              return -1
            }
            return 0
          })
          return{
            ...state,
            pokemonFilter: resultOrden6
          }    
        case 'Menorhp':
          let resultOrden7 = ordenPokemon.sort((a,b) => {
            if(a.hp > b.hp){
              return -1
            }
            if(a.hp < b.hp){
              return 1
            }
            return 0
          })
          return {
            ...state,
            pokemonFilter: resultOrden7

          } 

        case 'Mayorhp':
          let resultOrden8 = ordenPokemon.sort((a,b) => {
            if(a.hp > b.hp){
              return 1
            }
            if(a.hp < b.hp){
              return -1
            }
            return 0
          })
          return {
            ...state,
            pokemonFilter: resultOrden8

          } 

          default:
            return state

  

      }


    default:
        return state
        
}
    

}