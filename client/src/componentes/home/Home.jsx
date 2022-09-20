import React from "react"
import Nav from "../nav/Nav"
import {getPokemons} from '../../acciones/action.js'
import { useEffect, useState } from "react";
import { useDispatch, useSelector} from 'react-redux';
import './home.css'
import Cards from "../cards/Cards.jsx";


export default function Home() {
  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.listaPokemon)
  const [listaPoke , setListaPoke] = useState([])
  


  useEffect(() => {
    if(pokemons.length === 0){
    dispatch(getPokemons());
    }
    setListaPoke(pokemons)
    
  } ,[dispatch]);

  useEffect(() => {

    setListaPoke(pokemons);

    
  } ,[pokemons]);


  
  console.log(pokemons)
  return(
    <div className="contenedor-home">
      <Nav/>
      <h1>hola estas en el home</h1>
      <div className="contenedor-cartas">
          {listaPoke?.map((pokemon) => {
            return(
            <div key={pokemon.id} className="carta-pokemon">
              <Cards
                id={pokemon.id}
                name={pokemon.name}
                
                image={pokemon.image}
                type={pokemon.type}
              />
            </div>
          )})}
      </div>
    </div>
  )



};
