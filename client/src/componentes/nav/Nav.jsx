import { React, useEffect, useState } from "react";
import "./nav.css";
import Searchbar from "../searchbar/Searchbar.jsx";
import {
  actionFilterTypes,
  actionTypeOrden,
  getAllTypes,
  resetFilter,
} from "../../acciones/action";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Nav() {
  const dispatch = useDispatch();
  const [orderTypes, setOrderTypes] = useState([]);
  const types = useSelector((state) => state.allTypes);
  const [order, setOrder] = useState("");

  useEffect(() => {
    dispatch(getAllTypes());
    dispatch(actionTypeOrden(order));
  }, [dispatch, order]);

  useEffect(() => {
    if(orderTypes.length > 0)
    {
      dispatch(actionFilterTypes(orderTypes));
    }
    else{
      console.log("entre")
    }
  }, [dispatch, orderTypes]);
  
  const capturarTipo = (e) => {
    if (e.target.checked) {
      setOrderTypes([...orderTypes, e.target.value]);
      console.log(e.target.value);
    } else {
      setOrderTypes(orderTypes.filter((t) => t !== e.target.value));
      console.log(orderTypes);
    }
  };

  const capturarOrden = (e) => {
    setOrder(e.target.value);
  };

  const restart = () => {
    if (orderTypes.length > 0) {
      let rest = document.querySelectorAll("input[type=checkbox]");
      rest.forEach((e) => (e.checked = false));
  
      dispatch(resetFilter());
      setOrderTypes([]);
    }
    setOrder("");
    dispatch(resetFilter());
    console.log(orderTypes);
  };
  console.log("orderTypes" ,orderTypes);

  return (
    <div className="Contenedor-nav">
      <form className="form">
        
          <div className="tipos">
            <h5>Search by types:</h5>
          </div>
          <div className="input-checkbox-type">
            {types?.map((t) => {
              return (
                
                  <label key={t.id}>
                    {t.name}:
                    <input 
                      type="checkbox"
                      name={t.name}
                      value={t.name}
                      className="c2"
                      onChange={capturarTipo}
                    />
                  </label>
                
              );
            })}
          </div>
          <div className="button-name">
            <label> sort by: </label>
            <select className="button-name-select" onChange={capturarOrden}>
              <option value="seleccionar">Select↴</option>
              <optgroup label="All Pokemons">
                <option value="ALL">All</option>
              </optgroup>
              <optgroup label="DB Pokemons">
                <option value="DB">DataBase</option>
              </optgroup>
              <optgroup label="Api Pokemons">
                <option value="API">Api</option>
              </optgroup>
              <optgroup label="Alphabet">
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
              </optgroup>
              <optgroup label="Pokemon by attack">
                <option value="Menor">Min</option>
                <option value="Mayor">Max</option>
              </optgroup>
              <optgroup label="Pokemon by hp">
                <option value="Mayorhp">Min HP</option>
                <option value="Menorhp">Max HP</option>
              </optgroup>
            </select>
          </div>

          <div className="botones">
            <input
              key="reset"
              className="button-name"
              type="reset"
              value="Restart"
              onClick={restart}
            />

            <Link to="/pokemons/create">
              <button className="button-name">Create Pokemon</button>
            </Link>

            <Link to="/">
              <button className="button-name">Landing Page </button>
            </Link>

            <Link to="/pokemons">
              <button className="button-name">Home</button>
            </Link>
          </div>
        
      </form>
      <div>
        <Searchbar />
      </div>
    </div>
  );
}
