import React from "react";
import './createPokemon.css'
import { useState, useEffect } from "react";
import Nav from "../nav/Nav.jsx";
import { useDispatch, useSelector } from "react-redux";
import { postPokemon , getAllTypes  } from "../../acciones/action.js";




const  CreatePokemon = () =>{
const [listaTipos, setListaTipos] = useState([])
const dispatch = useDispatch();
const types = useSelector((state) => state.allTypes);

useEffect(() => {
    dispatch(getAllTypes())
}, [dispatch])




console.log(types)
const [newPokemon, setNewPokemon] = useState({
  name: "",
  hp: 0,
  attack: 0,
  defense: 0,
  speed: 0,
  height: 0,
  weight: 0,
  image: "",
  type: [],
});

const mapTypes = new Map();
mapTypes.set("12", "container-grass");
mapTypes.set("10", "container-fire");
mapTypes.set("11", "container-water");
mapTypes.set("7", "container-bug");
mapTypes.set("1", "container-normal");
mapTypes.set("13", "container-electric");
mapTypes.set("4", "container-poison");
mapTypes.set("5", "container-ground");
mapTypes.set("18", "container-fairy");
mapTypes.set("2", "container-fighting");
mapTypes.set("14", "container-psychic");
mapTypes.set("6", "container-rock");
mapTypes.set("8", "container-ghost");
mapTypes.set("15", "container-ice");
mapTypes.set("16", "container-dragon");
mapTypes.set("17", "container-dark");
mapTypes.set("9", "container-steel");
mapTypes.set("3", "container-flying");
mapTypes.set("19", "container-unknown");
mapTypes.set("20", "container-shadow");

const updatePokemon = async () => {
  if (newPokemon.name === "") {
    alert("Name is required");
  } 
  else if (
    newPokemon.hp === 0 ||
    newPokemon.attack === 0 ||
    newPokemon.defense === 0 ||
    newPokemon.speed === 0 ||
    newPokemon.height === 0 ||  
    newPokemon.weight === 0 ||
    newPokemon.type.length === 0 
  ) {
    alert("All fields must be completed, the image is not required");
  } else if (newPokemon.image === "") {
    newPokemon.name = newPokemon.name.toLowerCase();
    newPokemon.image ="https://www.wikihow.com/images_en/thumb/9/99/Draw-Pictures-of-Pokemon-Step-13.jpg/v4-1200px-Draw-Pictures-of-Pokemon-Step-13.jpg";
    
    dispatch(postPokemon(newPokemon));
    setNewPokemon({
      name: "",
      hp: 0,
      attack: 0,
      defense: 0,
      speed: 0,
      height: 0,
      weight: 0,
      image: "",
      type: [],
    });
    alert("Pokemon created");
    resetFromTypes();
  } else {
    newPokemon.name = newPokemon.name.toLowerCase();
    dispatch(postPokemon(newPokemon));
    setNewPokemon({
      name: "",
      hp: 0,
      attack: 0,
      defense: 0,
      speed: 0,
      height: 0,
      weight: 0,
      image: "",
      type: [],
    });
    alert("Pokemon created");
    resetFromTypes();
  }
};
useEffect(() => {
  setNewPokemon({
    ...newPokemon,
    type: listaTipos,
  });

  console.log(listaTipos);
  // eslint-disable-next-line
}, [listaTipos]);

const capturarRango = (e) => {
  setNewPokemon({
    ...newPokemon,
    [e.target.name]: e.target.value,
  });
};

const capturarTipo = (e) => {
  if (e.target.checked) {
    if (listaTipos.length < 3) {
      setListaTipos([...listaTipos, e.target.value]);
    } else {
      e.target.checked = false;
      alert("You can only select 3 types");
    }
    console.log(listaTipos);
  } else {
    // setListaTipos(listaTipos.filter((e) => e !== e.target.value))
    listaTipos.splice(listaTipos.indexOf(e.target.value), 1);
    setListaTipos([...listaTipos]);
    console.log(listaTipos);
    return listaTipos;
  }
};

const resetFromTypes = () => {
  if (listaTipos.length > 0) {
    let types = document.querySelectorAll(".c1");
    types.forEach((e) => (e.checked = false));
    setListaTipos([]);
  } else {
    return alert("No types selected");
  }
};

console.log(newPokemon);
return (
  <div className="contenedor-principal">
    {/* <form> */}
    <div className="content-nav">
      <Nav />
    </div>

    <div className="contenedor-create-pokemon">
      <h1> Here you can create your pokemon</h1>
      {/* inpust name, imagen, types */}
      <div className="contenedor-imagen-name-type-pokemon">
        <div>
          <h3>Name your pokemon:</h3>
          
          <input
            className="input-name"
            type="text"
            onChange={capturarRango}
            name="name"
            value={newPokemon.name}
            placeholder="Name"
            required
          />
          <span className="validity"></span>
        </div>

        <div className="contenedor-imagen-create-pokemon">
          <img
            className="imagen-pokemon-create"
            src={newPokemon.image}
            alt=""
            width={300}
          />
        </div>

        <p>Add an image url for your pokemon:</p>
        <label>
          URL:{" "}
          <input
            
            className="url-imagen"
            type="text"
            name="image"
            onChange={capturarRango}
          />
        </label>
        <div className="contenedor-types-create-pokemon">
          <h3>Types of your pokemon:</h3>
          {/* <form> */}
            <div className="contenedor-types-create-pokemons">
              {types.map((e) => (
                <div className="contenedor-type-create-pokemon"
                  key={e.name.toString()}>
                  <label className={mapTypes.get(e.id)}>{e.name}</label>
                  <input
                    className="c1"
                    type="checkbox"
                    name="type"
                    value={e.id}
                    onChange={capturarTipo}
                  />
                </div>
              ))}
            </div>
            <input type="reset" value="Reset types" onClick={resetFromTypes} />
          {/* </form> */}
        </div>
      </div>

      <div className="estadisticas-pokemon">
        <h2>Stats of your pokemon</h2>
        {/* INPUST HP */}
        <h1 className="title-inputs">
          Select how much hp your pokemon will have
        </h1>
        <div className="estadistica">
          <input
            type="range"
            onChange={capturarRango}
            name="hp"
            min="0"
            max="100"
            value={newPokemon.hp}
            className="slider"
          />
          <strong>
            <h1>HP:</h1>
          </strong>
          <div className="num">
            {newPokemon.hp ? <p>{newPokemon.hp}</p> : <p>0</p>}
          </div>
        </div>

        {/* INPUST ATK */}
        <h1 className="title-inputs">
          Select how much atk your pokemon will have
        </h1>
        <div className="estadistica">
          <input
            type="range"
            onChange={capturarRango}
            name="attack"
            min="0"
            max="100"
            value={newPokemon.attack}
            className="slider"
          />
          <strong>
            <h1>ATK:</h1>
          </strong>
          <div className="num">
            {newPokemon.attack ? <p>{newPokemon.attack}</p> : <p>0</p>}
          </div>
        </div>

        {/* INPUST DEF */}
        <h1 className="title-inputs">
          Select how much defense your pokemon will have
        </h1>
        <div className="estadistica">
          <input
            type="range"
            onChange={capturarRango}
            name="defense"
            min="0"
            max="100"
            value={newPokemon.defense}
            className="slider"
          />
          <strong>
            <h1>DEF:</h1>
          </strong>
          <div className="num">
            {newPokemon.defense ? <p>{newPokemon.defense}</p> : <p>0</p>}
          </div>
        </div>

        {/* INPUST SPEED */}
        <h1 className="title-inputs">
          Select how much speed your pokemon will have
        </h1>
        <div className="estadistica">
          <input
            type="range"
            onChange={capturarRango}
            name="speed"
            min="0"
            max="100"
            value={newPokemon.speed}
            className="slider"
          />
          <strong>
            <h1>SPEED:</h1>
          </strong>
          <div className="num">
            {newPokemon.speed ? <p>{newPokemon.speed}</p> : <p>0</p>}
          </div>
        </div>

        <div className="lista-Types">
          {listaTipos ? (
            listaTipos.map((tipo) => (
              <div className={mapTypes.get(tipo)}>.</div>
            ))
          ) : (
            <div> hola</div>
          )}
        </div>
        <div>
          {/* INPUST HEIGHT */}
          <div className="estadisticas-height">
            <input
              className="input-heigth"
              type="range"
              min="0"
              max="1000"
              onChange={capturarRango}
              value={newPokemon.height}
              name="height"
              required
            ></input>
            <span>{newPokemon.height}cm </span>
          </div>
        </div>
        {/* INPUTS WEIGTH */}
        <div className="estadisticas-weigth">
          <label>
            {" "}
            how much does your pokemon weigh?
            <input
              className="input-weigth"
              type="range"
              min="0"
              max="1000"
              onChange={capturarRango}
              value={newPokemon.weight}
              name="weight"
            ></input>
          </label>
          <span>{newPokemon.weight} kg</span>
        </div>
      </div>
    </div>
    <div className="boton-Create-Pokemon">
      <button onClick={updatePokemon}>Crear Pokemon</button>
    </div>
    {/* </form> */}
  </div>
);
}


export default CreatePokemon;