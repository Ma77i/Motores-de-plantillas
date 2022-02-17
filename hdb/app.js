const express = require('express');
const app = express();
const path = require('path')
const PORT = process.env.PORT || 2000


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))



//engine
const { engine } = require('express-handlebars')

app.engine("handlebars", engine({
    layoutsDir: path.join(__dirname, "views/layout"),
    defaultLayout: 'index'
    
}))

app.set("view engine", "handlebars")


// router
const homeRouter = require('./routes/home')
const addRouter = require('./routes/add')
const prodRouter = require('./routes/prod')

app.use("/", homeRouter)
app.use("/add", addRouter)
app.use("/prod", prodRouter)



const server = app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
server.on('err', (err) => {
    console.log(`Error: ${err}`);
})