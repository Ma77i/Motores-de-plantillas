const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))


//engine
const pugEngine = require('./engines/pug')
pugEngine(app)


// router
const homeRouter = require('./routes/home')
const addRouter = require('./routes/add')
const prodRouter = require('./routes/products')

app.use("/", homeRouter)
app.use("/add", addRouter)
app.use("/prod", prodRouter)


const server = app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
server.on('err', (err) => {
    console.log(`Error: ${err}`);
})