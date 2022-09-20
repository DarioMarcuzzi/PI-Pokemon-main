const {Router} = require('express')
const router = Router()
const {getCarryTypesDb} = require('../servicios/types')


router.get('/',async(req, res) =>{
  const result = await getCarryTypesDb()
  res.status(200).send(result)
})

module.exports = router;