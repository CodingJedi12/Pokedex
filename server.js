//DECLARE DEPENDENCIES
const express = require("express")
const pokemon = require("./models/pokemon.js")
const methodOverride = require("method-override")

//////////////////////
//INITIALIZING EXPRESS
//////////////////////

const app = express();

//////////////////////
//MIDDLEWARE
//////////////////////

//TELLING EXPRESS TO USE MIDDLEWARE
  //Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option
  //The extended option allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true).
  app.use(express.urlencoded({extended: false}))
  app.use(methodOverride("_method"))

////////////////
//DEFINE ROUTES
////////////////

//INDEX
//SHOW
//NEW
//EDIT
//CREATE
//UPDATE
//DELETE

//INDEX
app.get("/pokemon", (req, res) => {
    res.send("index page")
})

//NEW
app.get("/pokemon/new", (req, res) => {
    res.send("new page")
})

//DELETE
app.delete("/pokemon/:id", (req, res) => {
    cnosole.log("deleted")
})

//UPDATE
app.post("/pokemon", (req, res) => {
    console.log("updated")
})

//CREATE
app.post("/pokemon", (req, res) => {
    console.log("created")
})

//EDIT
app.get("/pokemon/:id/edit", (req, res) => {
    res.send("edit page")
})

//SHOW
app.get("/pokemon/:id", (req, res) => {
    res.send("show page")
})

app.listen(3000, () => {
    console.log("GOTTA CATCH 'EM ALL")
})