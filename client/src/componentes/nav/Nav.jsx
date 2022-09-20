import React from "react";
import './nav.css'
import Searchbar from "../searchbar/Searchbar.jsx"
import { getPokemons } from "../../acciones/action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Nav() {
  
  const dispatch = useDispatch();


const restart =() =>{
    dispatch(getPokemons())
}

  return(
    <div className="Contenedor-nav">
      <h1> este es el nav</h1>
      <div>

        <button
            onClick={restart}
          > restart 
        </button>

        <Link to='/pokemons/create'>
          <button>
            Create Pokemon
          </button>
        </Link>
        
        <Link to='/'>
          <button>
            Landing Page
          </button>
        </Link>

        <Link to='/pokemons'>
          <button>
            Home
          </button>
        </Link>
        
      </div>
      <div>
        <Searchbar/>
      </div>
    </div>
  )
};
