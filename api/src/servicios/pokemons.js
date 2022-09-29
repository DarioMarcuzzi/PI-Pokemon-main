
const axios = require('axios')
const { Pokemon, Type } = require ('../db.js')




const getPokemons = async (name) =>{
  try {
    if(name){
      const dbInfo = await Pokemon.findAll({where: {name: name},include: Type})
      if(dbInfo.length === 0){
        
        const pokemonByNameInfo = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const obj = {
          id: pokemonByNameInfo.data.id,
          name: pokemonByNameInfo.data.name,
          image: pokemonByNameInfo.data.sprites.other['official-artwork'].front_default,
          hp: pokemonByNameInfo.data.stats[0].base_stat,
          attack: pokemonByNameInfo.data.stats[1].base_stat,
          defense: pokemonByNameInfo.data.stats[2].base_stat,
          speed: pokemonByNameInfo.data.stats[5].base_stat,
          height: pokemonByNameInfo.data.height,
          weight: pokemonByNameInfo.data.weight,
          type: pokemonByNameInfo.data.types.map(e => e.type.name)
        }
        
        
        return obj
        
      }
      const obj = {
        id: dbInfo[0].id,
        name: dbInfo[0].name,
        hp: dbInfo[0].hp,
        attack: dbInfo[0].attack,
        defense: dbInfo[0].defense,
        speed: dbInfo[0].speed,
        height: dbInfo[0].height,
        weight: dbInfo[0].weight,
        image: dbInfo[0].image,
        type: dbInfo[0].types.map(e => e.name)
      }
      return obj
      
    }  else {
      
      const apiUrlCrudo = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
      
      const apiInfo = await apiUrlCrudo.data.results.map((e) =>{
        return {
        name: e.name,
        url: e.url,
        id: e.url.split('/')[6],
      }
    })
    
    result = apiInfo.map((e) => e.url)
    
    let nuevoArray =[]
    for (let i = 0; i < result.length; i++) {
      nuevoArray.push( await getPokemonsInfoByUrl(result[i]))
      console.log(result[i])

    } 
    console.log(nuevoArray)
    const dbCrudo = await Pokemon.findAll({ include:{
      model:Type,
      attributes: ['name'],
      through:{
        attributes:[] 
      }
    } 

  });
    
    const dbInfo = dbCrudo.map((e) => {
      return {

        id: e.id,
        hp: e.hp,
        name: e.name,
        image: e.image,
        attack: e.attack,
        type: e.types.map((e) => e.name),
        createdInDb: e.createdInDb
      }
    })

    const infoApi = nuevoArray.map((e) =>{
      return{
        id: e.id,
        hp: e.stats[0].base_stat,
        name: e.name,
        attack: e.stats[1].base_stat,
        type: e.types.map((e) => e.type.name),
        image: e.sprites.other['official-artwork'].front_default,
      }
    })

    const info = dbInfo.concat(infoApi)


    return info
  }


  // tenemos api info  que es un array y tenemos que buscar en cada objeto de ese array la url
  // hacer un axios.get a esa url y devolver la data 
  // const info = await axios.get(`https://pokeapi.co/api/v2/pokemon/1`)
  //  https://pokeapi.co/api/v2/pokemon/1/
  
}

catch(error){
  console.log(error)
}
}

const getPokemonsInfoByUrl = async(url) =>{
  const result = await axios.get(url)
  return result.data
}     
const getPokemonDbById = async(id) =>{
  const dbInfo = await
  Pokemon.findByPk(id,{
    include: {
      model:Type,
      attributes: ['name'],
      through:{
        attributes:[]
      }
    }
  })

  if(dbInfo){
    const obj ={
      id: dbInfo.id,
      name: dbInfo.name,
      hp: dbInfo.hp,
      attack: dbInfo.attack,
      defense: dbInfo.defense,
      speed: dbInfo.speed,
      height: dbInfo.height,
      weight: dbInfo.weight,
      image: dbInfo.image,
      type: dbInfo.types.map(e => e.name)

    }
    return(obj)
  }

            
}

const getPokemonApiById = async(id)=>{
  const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const obj = {
    id: result.data.id,
    name: result.data.name,
    image: result.data.sprites.other['official-artwork'].front_default,
    hp: result.data.stats[0].base_stat,
    attack: result.data.stats[1].base_stat,
    defense: result.data.stats[2].base_stat,
    speed:result.data.stats[5].base_stat,
    height: result.data.height,
    weight: result.data.weight,
    type: result.data.types.map((e) => e.type.name)
  }
  return obj
}


module.exports = {
  getPokemons,
  getPokemonDbById,
  getPokemonApiById
} 