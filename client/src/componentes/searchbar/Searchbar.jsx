import React from "react";
import { useState  } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../../acciones/action";


export default function Searchbar(){
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");


  const searchPokemon =() =>{
    if(search !== ""){
      try{
      dispatch(getPokemonByName(search.toLowerCase()))
      setSearch('')
    } catch (error){
      console.log(error)
    }

  } else {
    alert("Please enter a pokemon name")
  }
  }



  const handleOnchange = (e) =>{
    setSearch(e.target.value)
    console.log(e.target.value)
  }


console.log(search)
  return(
    <div>
      <input className="button-name"
      value={search}
      type="text" 
      placeholder="Search Pokemon"
      onChange={handleOnchange}
      />
    <button className="button-name"
    onClick={searchPokemon}
    >Search</button>

    </div>
  )
}