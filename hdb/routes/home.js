const { Router } = require('express')
const path = require('path')

const router = new Router()

router.get('/', async(req, res) => {
    res.render('main')
})

module.exports = router