import React from "react";
import './cards.css'
import {Link} from 'react-router-dom'


export default function Cards(pokemon){
  const {name , image, type, key, id} = pokemon
  
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


  console.log(type)


  // return (
  //   <div className={ `${color}`}>
  //     <div>{name}</div>
  //   </div>

  // )


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
            return <li key={key} >{tipo}</li>
          })}
        </div>
    </div>
  )
}


//   if(type[0] === "grass"){
//     return(
//       <div className={mapColores.get(type[0])}>
//           <div>
//             <h1>{name}</h1>
//           </div>
//           <div>
//             <img
//               src={image}
//               alt="not Found"
//               width={300}
//             />
//           </div>
//           <div>
//             <h1>type</h1>
//             {type?.map((tipo) => {
//               return <li key={key} >{tipo}</li>
//             })}
//           </div>
//       </div>
//     )
//   } else if(type[0] === "fire"){
    
//     console.log(type)
//     return(
//       <div className="contenedor-carta-fire" >
//           <div>
//             <h1>{name}</h1>
//           </div>
//           <div>
//             <img
//               src={image}
//               alt="not Found"
//               width={300}
//             />
//           </div>
//           <div>
//             <h1>type</h1>
//             {type?.map((tipo) => {
//               return <li key={key} >{tipo}</li>
//             })}
//           </div>
//       </div>
//     )
//   }
//   else  if(type[0] === "water"){
//     return(
//       <div className="contenedor-carta-whater">
//           <div>
//             <h1>{name}</h1>
//           </div>
//           <div>
//             <img
//               src={image}
//               alt="not Found"
//               width={300}
//             />
//           </div>
//           <div>
//             <h1>type</h1>
//             {type?.map((tipo) => {
//               return <li key={key} >{tipo}</li>
//             })}
//           </div>
//       </div>
//     )
//   }
//   else  if(type[0] === "bug"){
//     return(
//       <div className="contenedor-carta-bug">
//           <div>
//             <h1>{name}</h1>
//           </div>
//           <div>
//             <img
//               src={image}
//               alt="not Found"
//               width={300}
//             />
//           </div>
//           <div>
//             <h1>type</h1>
//             {type?.map((tipo) => {
//               return <li key={key} >{tipo}</li>
//             })}
//           </div>
//       </div>
//     )
//   }
//   else  if(type[0] === "normal"){
//     return(
//       <div className="contenedor-carta-normal">
//           <div>
//             <h1>{name}</h1>
//           </div>
//           <div>
//             <img
//               src={image}
//               alt="not Found"
//               width={300}
//             />
//           </div>
//           <div>
//             <h1>type</h1>
//             {type?.map((tipo) => {
//               return <li key={key} >{tipo}</li>
//             })}
//           </div>
//       </div>
//     )
//   }
//   else  if(type[0] === "poison"){
//     return(
//       <div className="contenedor-carta-poison">
//           <div>
//             <h1>{name}</h1>
//           </div>
//           <div>
//             <img
//               src={image}
//               alt="not Found"
//               width={300}
//             />
//           </div>
//           <div>
//             <h1>type</h1>
//             {type?.map((tipo) => {
//               return <li key={key} >{tipo}</li>
//             })}
//           </div>
//       </div>
//     )
//   }
//   else  if(type[0] === "electric"){
//     return(
//       <div className="contenedor-carta-electric">
//           <div>
//             <h1>{name}</h1>
//           </div>
//           <div>
//             <img
//               src={image}
//               alt="not Found"
//               width={300}
//             />
//           </div>
//           <div>
//             <h1>type</h1>
//             {type?.map((tipo) => {
//               return <li key={key} >{tipo}</li>
//             })}
//           </div>
//       </div>
//     )
//   }
//   else  if(type[0] === "ground"){
//     return(
//       <div className="contenedor-carta-ground">
//           <div>
//             <h1>{name}</h1>
//           </div>
//           <div>
//             <img
//               src={image}
//               alt="not Found"
//               width={300}
//             />
//           </div>
//           <div>
//             <h1>type</h1>
//             {type?.map((tipo) => {
//               return <li key={key} >{tipo}</li>
//             })}
//           </div>
//       </div>
//     )
//   }
//   else  if(type[0] === "fairy"){
//     return(
//       <div className="contenedor-carta-fairy">
//           <div>
//             <h1>{name}</h1>
//           </div>
//           <div>
//             <img
//               src={image}
//               alt="not Found"
//               width={300}
//             />
//           </div>
//           <div>
//             <h1>type</h1>
//             {type?.map((tipo) => {
//               return <li key={key} >{tipo}</li>
//             })}
//           </div>
//       </div>
//     )
//   }
//   else  if(type[0] === "fighting"){
//     return(
//       <div className="contenedor-carta-fighting">
//           <div>
//             <h1>{name}</h1>
//           </div>
//           <div>
//             <img
//               src={image}
//               alt="not Found"
//               width={300}
//             />
//           </div>
//           <div>
//             <h1>type</h1>
//             {type?.map((tipo) => {
//               return <li key={key} >{tipo}</li>
//             })}
//           </div>
//       </div>
//     )
//   }
//   else  if(type[0] === "psychic"){
//     return(
//       <div className="contenedor-carta-psychic">
//           <div>
//             <h1>{name}</h1>
//           </div>
//           <div>
//             <img
//               src={image}
//               alt="not Found"
//               width={300}
//             />
//           </div>
//           <div>
//             <h1>type</h1>
//             {type?.map((tipo) => {
//               return <li key={key} >{tipo}</li>
//             })}
//           </div>
//       </div>
//     )
//   }
//   else  if(type[0] === "rock"){
//     return(
//       <div className="contenedor-carta-rock">
//           <div>
//             <h1>{name}</h1>
//           </div>
//           <div>
//             <img
//               src={image}
//               alt="not Found"
//               width={300}
//             />
//           </div>
//           <div>
//             <h1>type</h1>
//             {type?.map((tipo) => {
//               return <li key={key} >{tipo}</li>
//             })}
//           </div>
//       </div>
//     )
//   }
//   else  if(type[0] === "ghost"){
//     return(
//       <div className="contenedor-carta-ghost">
//           <div>
//             <h1>{name}</h1>
//           </div>
//           <div>
//             <img
//               src={image}
//               alt="not Found"
//               width={300}
//             />
//           </div>
//           <div>
//             <h1>type</h1>
//             {type?.map((tipo) => {
//               return <li key={key} >{tipo}</li>
//             })}
//           </div>
//       </div>
//     )
//   }
//   else  if(type[0] === "ice"){
//     return(
//       <div className="contenedor-carta-ice">
//           <div>
//             <h1>{name}</h1>
//           </div>
//           <div>
//             <img
//               src={image}
//               alt="not Found"
//               width={300}
//             />
//           </div>
//           <div>
//             <h1>type</h1>
//             {type?.map((tipo) => {
//               return <li key={key} >{tipo}</li>
//             })}
//           </div>
//       </div>
//     )
//   }
//   else  if(type[0] === "dragon"){
//     return(
//       <div className="contenedor-carta-dragon">
//           <div>
//             <h1>{name}</h1>
//           </div>
//           <div>
  
//             <img
//               src={image}
//               alt="not Found"
//               width={300}
//             />
//           </div>
//           <div>
//             <h1>type</h1>
//             {type?.map((tipo) => {
//               return <li key={key} >{tipo}</li>
//             })}
//           </div>
//       </div>
//     )
//   }
//   else  if(type[0] === "dark"){
//     return(
//       <div className="contenedor-carta-dark">
//           <div>
//             <h1>{name}</h1>
//           </div>
//           <div>
//             <img
//               src={image}
//               alt="not Found"
//               width={300}
//             />
//           </div>
//           <div>
//             <h1>type</h1>
//             {type?.map((tipo) => {
//               return <li key={key} >{tipo}</li>
//             })}
//           </div>
//       </div>
//     )
//   }
//   else  if(type[0] === "steel"){
//     return(
//       <div className="contenedor-carta-steel">
//           <div>
//             <h1>{name}</h1>
//           </div>
//           <div>
//             <img
//               src={image}
//               alt="not Found"
//               width={300}
//             />
//           </div>
//           <div>
//             <h1>type</h1>
//             {type?.map((tipo) => {
//               return <li key={key} >{tipo}</li>
//             })}
//           </div>
//       </div>
//     )
//   }
//   else  if(type[0] === "flying"){
//     return(
//       <div className="contenedor-carta-flying">
//           <div>
//             <h1>{name}</h1>
//           </div>
//           <div>
//             <img
//               src={image}
//               alt="not Found"
//               width={300}
//             />
//           </div>
//           <div>
//             <h1>type</h1>
//             {type?.map((tipo) => {
//               return <li key={key} >{tipo}</li>
//             })}
//           </div>
//       </div>
//     )
//   }
//   else  if(type[0] === "unknown"){
//     return(
//       <div className="contenedor-carta-unknown">
//           <div>
//             <h1>{name}</h1>
//           </div>
//           <div>
//             <img
//               src={image}
//               alt="not Found"
//               width={300}
//             />
//           </div>
//           <div>
//             <h1>type</h1>
//             {type?.map((tipo) => {
//               return <li key={key} >{tipo}</li>
//             })}
//           </div>
//       </div>
//     )
//   }
//   else  if(type[0] === "shadow"){
//     return(
//       <div className="contenedor-carta-shadow">
//           <div>
//             <h1>{name}</h1>
//           </div>
//           <div>
//             <img
//               src={image}
//               alt="not Found"
//               width={300}
//             />
//           </div>
//           <div>
//             <h1>type</h1>
//             {type?.map((tipo) => {
//               return <li key={key} >{tipo}</li>
//             })}
//           </div>
//       </div>
//     )
//   }
//    else{
//     return(
//       <div className="contenedor-carta">
//           <div>
//             <h1>{name}</h1>
//           </div>
//           <div>
//             <img
//               src={image}
//               alt="not Found"
//               width={300}
//             />
//           </div>
//           <div>
//             <h1>type</h1>
//             {type?.map((tipo) => {
//               return <li key={key} >{tipo}</li>
//             })}
//           </div>
//       </div>
//     )
//   }
// }