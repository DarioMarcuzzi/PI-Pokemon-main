import React from "react";
import './createPokemon.css'
import { useState, useEffect } from "react";
import Nav from "../nav/Nav.jsx";
import { useDispatch, useSelector } from "react-redux";
import { postPokemon } from "../../acciones/action.js";




const  CreatePokemon = () =>{
const [listaTipos, setListaTipos] = useState([])
const dispatch = useDispatch();

const [newPokemon, setNewPokemon] = useState({
    name: '',
    hp: '',
    attack: '',
    defense: '',
    speed: '',
    height: 0,
    weight: 0,
    image: '',
    type: []
})


const mapTypes = new Map()
mapTypes.set('12',"container-grass")
mapTypes.set('10',"container-fire")
mapTypes.set('11',"container-water")
mapTypes.set('7',"container-bug")
mapTypes.set('1',"container-normal")
mapTypes.set('13',"container-electric")
mapTypes.set('4',"container-poison")
mapTypes.set('5',"container-ground")
mapTypes.set('18',"container-fairy")
mapTypes.set('2',"container-fighting")
mapTypes.set('14',"container-psychic")
mapTypes.set('6',"container-rock")
mapTypes.set('8',"container-ghost")
mapTypes.set('15',"container-ice")
mapTypes.set('16',"container-dragon")
mapTypes.set('17',"container-dark")
mapTypes.set('9',"container-steel")
mapTypes.set('3',"container-flying")


const updatePokemon = async () => {
    if(newPokemon.name ===  "" || newPokemon.hp === "" || newPokemon.attack === "" || newPokemon.defense === "" || newPokemon.speed === "" || newPokemon.height === "" || newPokemon.weight === ""  || newPokemon.type.length === 0){
        alert("faltan datos")
    }else if(newPokemon.image === ""){
      newPokemon.image = "https://www.wikihow.com/images_en/thumb/9/99/Draw-Pictures-of-Pokemon-Step-13.jpg/v4-1200px-Draw-Pictures-of-Pokemon-Step-13.jpg"
      dispatch(postPokemon(newPokemon))
    setNewPokemon({
        name: '',
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        height: 0,
        weight: 0,
        image: '',
        type: []
    })
    resetFromTypes()

    } else {
      dispatch(postPokemon(newPokemon))
    setNewPokemon({
        name: '',
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        height: 0,
        weight: 0,
        image: '',
        type: []
    })
    resetFromTypes()
  }
}
useEffect(() => {
  setNewPokemon({
    ...newPokemon,
    type: listaTipos
  })
  
  console.log(listaTipos)
}, [listaTipos])




const capturarRango = (e) => {
  setNewPokemon({
        ...newPokemon,
        [e.target.name]: e.target.value
    })
  
}

const capturarTipo =(e) =>{
  if(e.target.checked){
    setListaTipos([...listaTipos, e.target.value])
    console.log(listaTipos)
  }else{
    // setListaTipos(listaTipos.filter((e) => e !== e.target.value))
    listaTipos.splice(listaTipos.indexOf(e.target.value), 1)
    setListaTipos([...listaTipos])
    console.log(listaTipos)
    return listaTipos
  }
}


const resetFromTypes = () =>{
  if(listaTipos.length > 0){
  let types = document.querySelectorAll('.c1')
  types.forEach((e) => e.checked = false)
  setListaTipos([])}
  else {
    return alert('No hay tipos seleccionados')
  }
}


console.log(newPokemon)
  return (
    <div className="contenedor-principal">
    <Nav/>

      <div className="contenedor-create-pokemon">
        <h1> Aqui Puedes Crear tu pokemon</h1>
        {/* inpust name, imagen, types */}
        <div className="contenedor-imagen-name-type-pokemon">
          <div>
            <h3>Nombre a su pokemon:</h3>
            <span>asda
            <input 
                  type="text"
                  onChange={capturarRango}
                  name="name"
                  value={newPokemon.name}
                  placeholder="Nombre"
                  />
             </span>
            
          </div>
          
          <div className="contenedor-imagen-create-pokemon">
          <img className="imagen-pokemon-create" src={newPokemon.image} alt="" width={300} />
          </div>
          <p>Agregue una url de imagen para su pokemon:</p>
          <label>URL: <input className="url-imagen" type="text" name="image" onChange={capturarRango} />
          </label>
          <div className="contenedor-types-create-pokemon">
            <h3>Tipos de su pokemon:</h3>
            <form>
              <div className="contenedor-types-create-pokemons">
                <label>Planta: <input type="checkbox" name="grass" class="c1" value="12" onChange={capturarTipo} /></label>
                <label>Fuego: <input type="checkbox" name="fire" class="c1" value="10" onChange={capturarTipo} /></label>
                <label>Agua: <input type="checkbox" name="water" class="c1" value="11" onChange={capturarTipo} /></label>
                <label>Insecto: <input type="checkbox" name="bug" class="c1" value="7" onChange={capturarTipo} /></label>
                <label>Normal: <input type="checkbox" name="normal" class="c1" value="1" onChange={capturarTipo} /></label>
                <label>Electrico: <input type="checkbox" name="electric" class="c1" value="13" onChange={capturarTipo} /></label>
                <label>Veneno: <input type="checkbox" name="poison" class="c1" value="4" onChange={capturarTipo} /></label>
                <label>Tierra: <input type="checkbox" name="ground" class="c1" value="5" onChange={capturarTipo} /></label>
                <label>Hada: <input type="checkbox" name="fairy" class="c1" value="18" onChange={capturarTipo} /></label>
                <label>Volador: <input type="checkbox" name="flying" class="c1" value="3" onChange={capturarTipo} /></label>
                <label>Pelea: <input type="checkbox" name="fighting" class="c1" value="2" onChange={capturarTipo} /></label>
                <label>Psiquico: <input type="checkbox" name="psychic" class="c1" value="13" onChange={capturarTipo} /></label>
                <label>Roca: <input type="checkbox" name="rock" class="c1" value="6" onChange={capturarTipo} /></label>
                <label>Fantasma: <input type="checkbox" name="ghost" class="c1" value="8" onChange={capturarTipo} /></label>
                <label>Hielo: <input type="checkbox" name="ice" class="c1" value="15" onChange={capturarTipo} /></label>
                <label>Dragon: <input type="checkbox" name="dragon" class="c1" value="16" onChange={capturarTipo} /></label>
                <label>Oscuridad: <input type="checkbox" name="dark" class="c1" value="17" onChange={capturarTipo} /></label>
                <label>Acero: <input type="checkbox" name="steel" class="c1" value="9" onChange={capturarTipo} /></label>
              </div>
              <input type="reset" value="Reset types"
                      onClick={resetFromTypes}/>
            </form>
          </div>
          
        </div>
        
        
          <div className="estadisticas-pokemon">
            <h2>Estadisticas de tu pokemon</h2>
                      {/* INPUST HP */}
            <h1 className="title-inputs">Selecciona cuanta hp tendra tu pokemon</h1>
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
              <strong><h1>HP:</h1></strong>
              <div className="num">{newPokemon.hp? <p>{newPokemon.hp}</p>: <p>50</p>}</div>
            </div>
            
          
                      {/* INPUST ATK */}
            <h1 className="title-inputs">Selecciona cuanto atk tendra tu pokemon</h1>
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
              <strong><h1>ATK:</h1></strong>
              <div className="num">{newPokemon.attack? <p>{newPokemon.attack}</p>: <p>50</p>}</div>
            </div>

            {/* INPUST DEF */}
            <h1 className="title-inputs">Selecciona cuanta def tendra tu pokemon</h1>
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
              <strong><h1>DEF:</h1></strong>
              <div className="num">{newPokemon.defense? <p>{newPokemon.defense}</p>: <p>50</p>}</div>
            </div>

                      {/* INPUST SPEED */}
            <h1 className="title-inputs">Selecciona cuanta speed tendra tu pokemon</h1>
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
              <strong><h1>SPEED:</h1></strong>
              <div className="num">{newPokemon.speed? <p>{newPokemon.speed}</p>: <p>50</p>}</div>
            </div>

            <div className="lista-Types">
            {listaTipos? listaTipos.map((tipo) => <div
            className={mapTypes.get(tipo)}>.</div>): <div > hola</div>}
            
              {/* {listaTipos?.map((tipo) => {
                return(
                <div className={mapTypes.get(tipo)}>hola</div>)})} */}
            </div>
          <div>

                      {/* INPUST HEIGHT */}
            <div className="estadisticas-height">
                
            <input className="input-heigth" 
                    type="range" 
                    min="0" 
                    max="1000"
                    onChange={capturarRango}
                    value={newPokemon.height}
                    name="height">
                    </input>
                    <span>{newPokemon.height} cm</span>
            </div>
          </div>
              {/* INPUTS WEIGTH */}
              <div className="estadisticas-weigth">
              <label> Cuanto pesa tu pokemon ?
                <input 
                  className="input-weigth"
                  type="range"
                  min="0"
                  max="1000"
                  onChange={capturarRango}
                  value={newPokemon.weight}
                  name="weight">
                  </input>
                  </label>
                  <span>{newPokemon.weight} kg</span>

            </div>
          </div>
        </div>
        <div className="boton-Create-Pokemon">
              <button onClick={updatePokemon}>
                Crear Pokemon
              </button>
            </div>
  </div>
  )
}


export default CreatePokemon;