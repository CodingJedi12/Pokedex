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
  app.use(express.static('public'))
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

//LANDING PAGE
app.get("/", (req, res) => {
    res.send("Welcome!")
})

//INDEX
app.get("/pokemon", (req, res) => {
    res.render("index.ejs", {
        pokedex: pokemon
    })
})

//NEW
app.get("/pokemon/new", (req, res) => {
   res.render("new.ejs", {
    pokedex: pokemon
   })
})

//DELETE
app.delete("/pokemon/:id", (req, res) => {
    console.log("deleted")
})

//UPDATE
app.post("/pokemon", (req, res) => {
    console.log(req.body)
})

//CREATE
// app.post("/pokemon", (req, res) => {
//     pokemon.push(req.body)
//     console.log(req.body)
//     res.redirect("/pokemon")
// })

//EDIT
app.get("/pokemon/:id/edit", (req, res) => {
    res.send("edit page")
})

//SHOW
app.get("/pokemon/:id", (req, res) => {
    console.log(pokemon[req.params.id])
    res.render("show.ejs", {
        pokemonId: pokemon[req.params.id]
    })
})

app.listen(3000, () => {
    console.log("GOTTA CATCH 'EM ALL")
})