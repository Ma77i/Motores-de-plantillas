const express = require('express');
const app = express();
const PORT = process.env.PORT || 1000


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))


///Engine
const ejsEngine = require('./engines/ejs')
ejsEngine(app)


//ROUTERS
const ejsRouter = require('./routes/home')
const ejsAddRouter = require('./routes/add')
const ejsProdRouter = require('./routes/products')

app.use("/", ejsRouter)
app.use("/add", ejsAddRouter)
app.use("/prod", ejsProdRouter)


const server = app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
server.on('err', (err) => {
    console.log(`Error: ${err}`);
})