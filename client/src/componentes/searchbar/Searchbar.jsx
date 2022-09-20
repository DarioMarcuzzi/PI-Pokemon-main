import React from "react";
import { useState  } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../../acciones/action";


export default function Searchbar(){
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");


  const searchPokemon =() =>{
    try{
      dispatch(getPokemonByName(search))
      setSearch('')
    } catch (error){
      console.log(error)
    }
  }


  const handleOnchange = (e) =>{
    setSearch(e.target.value)
    console.log(e.target.value)
  }


console.log(search)
  return(
    <div>
      <input 
      value={search}
      type="text" 
      placeholder="Search Pokemon"
      onChange={handleOnchange}
      />
    <button
    onClick={searchPokemon}
    >buscar</button>

    </div>
  )
}