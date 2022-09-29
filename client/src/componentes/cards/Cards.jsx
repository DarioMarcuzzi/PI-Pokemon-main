import React from "react";
import './cards.css'
import {Link} from 'react-router-dom'


export default function Cards(pokemon){
  const {name , image, type, id} = pokemon
  
const mapColores = new Map();

mapColores.set("grass","contenedor-carta-grass")
mapColores.set("fire","contenedor-carta-fire")
mapColores.set("normal","contenedor-carta-normal")
mapColores.set("fighting","contenedor-carta-fighting")
mapColores.set("flying","contenedor-carta-flying")
mapColores.set("ground","contenedor-carta-ground")
mapColores.set("poison","contenedor-carta-poison")
mapColores.set("rock","contenedor-carta-rock")
mapColores.set("bug","contenedor-carta-bug")
mapColores.set("ghost","contenedor-carta-ghost")
mapColores.set("steel","contenedor-carta-steel")
mapColores.set("water","contenedor-carta-water")
mapColores.set("shadow","contenedor-carta-shadow")
mapColores.set("electric","contenedor-carta-electric")
mapColores.set("psychic","contenedor-carta-psychic")
mapColores.set("ice","contenedor-carta-ice")
mapColores.set("dragon","contenedor-carta-dragon")
mapColores.set("dark","contenedor-carta-dark")
mapColores.set("fairy","contenedor-carta-fairy")
mapColores.set("unknown","contenedor-carta-unknown")


  return(
    <div className={mapColores.get(type[0])}>
        <div className="name-pokemon">
          <h1>{name}</h1>
        </div>
        <div className="contenedor-imagen">
          <Link to={`/pokemons/${id}`}>
          <img
            src={image}
            alt="not Found"
            width={200}
          />
          </Link>
        </div>
        <div className="type-carta">
          <h1>Types:</h1>
          {type?.map((tipo) => {
            return <li key={tipo.toString()} >{tipo}</li>
          })}
        </div>
    </div>
  )
}


