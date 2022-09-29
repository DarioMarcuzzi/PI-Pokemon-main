import React from "react"
import Nav from "../nav/Nav"
import {getPokemons} from '../../acciones/action.js'
import { useEffect, useState } from "react";
import { useDispatch, useSelector} from 'react-redux';
import './home.css'
import Cards from "../cards/Cards.jsx";
import Gif from "../../image/gif/loadin1.gif"


export default function Home() {
  const dispatch = useDispatch();
  const pokemonsFiltered = useSelector((state) => state.pokemonFilter);
  const pokemons = useSelector((state) => state.listaPokemon);
  const [listaPoke, setListaPoke] = useState([]);
  const [pagActual, setPagActual] = useState(0);
  const [ListaPoke1, setListaPoke1] = useState([]);

  useEffect(() => {
    if (pokemons.length === 0) {
      dispatch(getPokemons());
    }

    // eslint-disable-next-line
  }, [dispatch]);
  useEffect(() => {
    if (pokemonsFiltered.length === 0) {
      setListaPoke(pokemons);
    } else {
      setListaPoke(pokemonsFiltered);
    }
  }, [pokemons, pagActual, pokemonsFiltered]);

  useEffect(() => {
    if (pokemonsFiltered === "") {
      alert("There is no pokemon in the database");
    } else if (pokemonsFiltered.length === 0) {
      setListaPoke1(pokemons.slice(pagActual, pagActual + 12));
    } else {
      setListaPoke1(pokemonsFiltered.slice(pagActual, pagActual + 12));
    }
  }, [pokemonsFiltered, pokemons, pagActual]);

  const nextPage = () => {
    if (listaPoke.length <= pagActual + 12) {
      setPagActual(pagActual);
      console.log(pagActual);
    } else {
      console.log(pagActual);
      setPagActual(pagActual + 12);
    }
  };

  const prevPage = () => {
    if (pagActual < 12) {
      setPagActual(0);
    } else {
      setPagActual(pagActual - 12);
    }
  };

  return (
    <div className="contenedor-principal-home">
      <div className="contenedor-home">
        <div className="content-nav">
          <Nav />
        </div>

        <div className="contenedor-Next-Prev">
          <button className="button-name" onClick={prevPage}>
            Previous
          </button>
          <button className="button-name" onClick={nextPage}>
            next
          </button>
        </div>
        {ListaPoke1.length > 0 ? 
        <div className="contenedor-cartas">
          {ListaPoke1?.map((pokemon) => {
            return (
              <div key={pokemon.id} className="carta-pokemon">
                <Cards
                  key={pokemon.id}
                  id={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.image}
                  type={pokemon.type}
                />
              </div> 
            );
          })}
        </div> : <div className="contenedor-loading"> <img className="imagen-loading" src={Gif} alt="not found"/> </div>}
        <div>
          <button className="button-name" onClick={prevPage}>
            Previous
          </button>
          <button className="button-name" onClick={nextPage}>
            Next
          </button>
        </div>
      </div>
    </div>
  );



};
