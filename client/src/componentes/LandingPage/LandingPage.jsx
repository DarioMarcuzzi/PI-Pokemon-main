import React from "react";
import { Link } from "react-router-dom";
import "./landingPage.css";

const LandingPage = () => {
  return (
    <div className="contenedor-landingPage">
      <div className="contenedor-logo-landingPage">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png"
          alt="Pokemon"
        />
      </div>
      <div className="contenedor-pokebolas-legend">
        <div className="legend-landingPage">
          <h1>Pick the pokeball for go Home!</h1>
        </div>
        <div className="pokebolas-landingPage">
          <div className="contenedor-pokemon">
            <img
              className="pokemon"
              id="bulba"
              src="https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png"
              alt="img"
            />
            <img
              className="pokemon"
              id="char"
              src="https://img.pokemondb.net/sprites/black-white/normal/charmander.png"
              alt="img"
            />
            <img
              className="pokemon"
              id="squir"
              src="https://img.pokemondb.net/sprites/black-white/normal/squirtle.png"
              alt="img"
            />
          </div>
          <div className="contenedor-pokebola">
            <Link to="/pokemons">
              <img
                className="pokebola"
                id="p1"
                src="https://cdn2.bulbagarden.net/upload/thumb/d/dc/GO_Pok%C3%A9_Ball.png/200px-GO_Pok%C3%A9_Ball.png"
                alt="img"
              />
            </Link>

            <Link to="/pokemons">
              <img
                className="pokebola"
                id="p2"
                src="https://cdn2.bulbagarden.net/upload/thumb/d/dc/GO_Pok%C3%A9_Ball.png/200px-GO_Pok%C3%A9_Ball.png"
                alt="img"
              />
            </Link>

            <Link to="/pokemons">
              <img
                className="pokebola"
                id="p3"
                src="https://cdn2.bulbagarden.net/upload/thumb/d/dc/GO_Pok%C3%A9_Ball.png/200px-GO_Pok%C3%A9_Ball.png"
                alt="img"
              />
            </Link>
          </div>
        </div>
      </div>
      <h1 className="title">
        PI Henry by{" "}
        <a
          href="https://www.linkedin.com/in/dario-marcuzzi-399908224"
          target="_blanck"
        >
          Dario Marcuzzi
        </a>{" "}
      </h1>
    </div>
  );
};

export default LandingPage;
