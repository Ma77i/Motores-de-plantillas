const path = require('path')
const { Router } = require('express')

const router = new Router()
const Contenedor = require(path.join(__dirname, "../model/contenedor.js"));
const products = new Contenedor(path.join(__dirname, "../database/data.json"))

router.get('/', (req, res) => res.render('agregar'))



router.post('/', async (req, res) => {
    const save = await products.save(req.body)
    console.log(save)
    res.redirect(`/prod`)
})



module.exports = router