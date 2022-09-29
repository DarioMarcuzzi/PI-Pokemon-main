import React from "react";
import './detailPokemon.css';
import { useEffect ,} from "react";
import { useDispatch, useSelector} from 'react-redux';
import { Link } from "react-router-dom"; 
import { useParams } from "react-router-dom";
import { getPokemonById } from "../../acciones/action";



export default function DetailPokemon() {
    const dispatch = useDispatch();
    const {id} = useParams();
    const detailPokemon = useSelector(state => state.pokemonDetail)
    const filter = useSelector(state => state.pokemonFilter)

    useEffect(() =>{
      dispatch(getPokemonById(id))
      return () => {
        dispatch({type: 'GET_POKEMON_BY_ID', payload: []})
      }
    },[dispatch, id])


    console.log(detailPokemon.type? detailPokemon.type[0]:null)
console.log(filter)
  return (
    <div className="contenedor-principal-detail">
    <div id="pokedex">
      <div id="left">
        <div id="logo"></div>
        <div id="bg_curve1_left"></div>
        <div id="bg_curve2_left"></div>
        <div id="curve1_left">
          <div id="buttonGlass">
          <div id="reflect"> </div>
      </div>
      <div id="miniButtonGlass1"></div>
      <div id="miniButtonGlass2"></div>
      <div id="miniButtonGlass3"></div>
    </div>
    <div id="curve2_left">
      <div id="junction">
        <div id="junction1"></div>
        <div id="junction2"></div>
      </div>
    </div>
    <div id="screen">
      <div id="topPicture">
        <div id="buttontopPicture1"></div>
        <div id="buttontopPicture2"></div>
      </div>
      <div id="picture">
        <img src={detailPokemon.image} alt="psykokwak" width={200}
          height={150} />
      </div>
      <div id="buttonbottomPicture"></div>
      <div id="speakers">
        <div className="sp"></div>
        <div className="sp"></div>
        <div className="sp"></div>
        <div className="sp"></div>
      </div>
    </div>
    <div id="bigbluebutton"></div>
    <div id="barbutton1"></div>
    <div id="barbutton2"></div>
    <div id="cross">
      <div id="leftcross">
        <div id="leftT"></div>
      </div>
      <div id="topcross">
        <div id="upT"></div>
      </div>
      <div id="rightcross">
        <div id="rightT"></div>
      </div>
      <div id="midcross">
        <div id="midCircle"></div>
      </div>
      <div id="botcross">
        <div id="downT"></div>
      </div>
    </div>
  </div>
  <div id="right">
    <div id="stats">
      <strong>Name: </strong> {detailPokemon.name}<br/>
      <strong>Type: </strong> {detailPokemon.type?.map((type) => {
          return(
            <label key={type}>
               {type},
              </label>
            )
          }
            )}<br/>
      <strong>Height: </strong> {detailPokemon.height}cm<br/>
      <strong>Weight: </strong>{detailPokemon.weight}kg<br/>
      <strong>Attack: </strong> {detailPokemon.attack}<br/>
      <strong>Defense: </strong>{detailPokemon.defense}<br/>
      <strong>Hp: </strong> {detailPokemon.hp}<br/>
      <strong>speed: </strong>{detailPokemon.speed}<br/><br/>
    </div>
    <div id="blueButtons1">
      <div className="blueButton">{detailPokemon.type? detailPokemon.type[0]:null}</div>
      <div className="blueButton">{detailPokemon.type? detailPokemon.type[1]:null}</div>
      <div className="blueButton">{detailPokemon.type? detailPokemon.type[2]:null}</div>
      <div className="blueButton">{detailPokemon.type? detailPokemon.type[4]:null}</div>
      <div className="blueButton"></div>
    </div>
    <div id="blueButtons2">
      <div className="blueButton"></div>
      <div className="blueButton"></div>
      <div className="blueButton"></div>
      <div className="blueButton"></div>
      <div className="blueButton"></div>
    </div>
    <div id="miniButtonGlass4"></div>
    <div id="miniButtonGlass5"></div>
    <div id="barbutton3"></div>
    <div id="barbutton4"></div>
    <div id="yellowBox1"></div>
    <div id="yellowBox2"><Link to='/pokemons'> <button className="boton-back"><strong>Back</strong></button></Link></div>
    <div id="bg_curve1_right"></div>
    <div id="bg_curve2_right"></div>
    <div id="curve1_right"></div>
    <div id="curve2_right"></div>
  </div>
</div>
</div>

  );
}