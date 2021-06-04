const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let icons = ["/vocab/images/bee_a.png", "/vocab/images/bike_a.png", "/vocab/images/book_a.png"]
let audio = "/vocab/audio/apple.mp3"
let currentQuestion = {
    prompt: "/vocab/audio/bed.mp3",
    anotherThing: "string",
    iconsArray: ["/vocab/images/book_a.png", "/vocab/images/bike_a.png", "/vocab/images/bee_a.png"]
    // icons: "/vocab/images/book_a.png"
}

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public')); //!! don't forget the slash!

// setup array of images
// pass that array to index.ejs

app.get("/", (req, res) => {
    res.render("index", {options: icons, audioPrompt: audio}) //!! change this to pass an object
})

app.get("/selected", (req, res) => {
    // pass selected
    // score
    // progress
    // load next

})

app.get("/next", (req, res) => {
    res.json(currentQuestion) //!! use this to pass next question object
})


app.listen(3000, () => {
    console.log('App listening on port 3000');
})