const axios = require('axios')
const { Type } = require ('../db.js')


const getCarryTypesDb  = async () =>{
  const response = await axios.get('https://pokeapi.co/api/v2/type')
  console.log(response.data)
  const resultado = response.data.results.map((e) => e.name)
  
  const infoTipeDb = await Type.findAll()

  if(infoTipeDb.length === 0 ){
    for(let i = 0 ; i < resultado.length; i++){
      const types = await Type.findOrCreate({
        where: {
          name: resultado[i]
        }
      })
    }
    return await Type.findAll()
  }
  return infoTipeDb
 }

module.exports= {
  getCarryTypesDb
}