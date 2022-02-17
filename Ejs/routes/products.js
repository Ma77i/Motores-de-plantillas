const path = require('path')
const { Router } = require('express')

const router = new Router()
const Contenedor = require(path.join(__dirname, "../model/contenedor.js"));
const products = new Contenedor(path.join(__dirname, "../database/data.json"))

router.get('/', async (req, res) => {
    const list = await products.getAll()
    res.render('productos', {list})
})


module.exports = router