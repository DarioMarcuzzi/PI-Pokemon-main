let { Router } = require ('express');
const { Pokemon, Type  } = require('../db.js');
const { getPokemons,getPokemonDbById,getPokemonApiById } = require('../servicios/pokemons');


const router = Router()

router.get('/', async (req, res) =>{
  const { name } = req.query;
  if(name){
    const pokemonsByName = await getPokemons(name)
    if(pokemonsByName){
      res.status(200).send(pokemonsByName)
    } else {
      res.status(404).send('Pokemon no encontrado')
    }
  } else{
    const listaPokemons = await getPokemons()
    res.status(200).send(listaPokemons)
  }

   
})
router.get('/:id', async (req, res) =>{
  const { id } = req.params
  if(id.length > 12){
    const pokemonInfodbById = await getPokemonDbById(id)
    res.status(200).send(pokemonInfodbById)
  } else {
    const pokemonsInfoApiById = await getPokemonApiById(id)
    res.status(200).send(pokemonsInfoApiById)
  }
  
})

router.post('/create', async (req, res) => {
  
  const { name, hp, attack, defense, speed, height, weight, type, image } = req.body;

  const pokemon = await Pokemon.create({
    name,
    hp,
    attack,
    defense,
    speed,
    height, 
    weight, 
    type,
    image

  })
  await pokemon.setTypes(type);
  res.status(200).send(pokemon)
})

module.exports = router;