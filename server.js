const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejs = require('ejs');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect('mongodb+srv://ThruMyEyez:<password>@cluster0x.etarw.mongodb.net/gbookDB?retryWrites=true&w=majority', { useNewUrlParser: true }, { useUnifiedTopology: true })                      



//create a data schema
const notesShema = {
    username: String,
    title: String,
    content: String
}

const Note = mongoose.model("Note", notesShema);

app.get("/", function(req, res) {
    // res.sendFile(__dirname + "/index.html");
})

// app.get("/notes", function(req, res) {});
app.get('/', (req,res) => {
    
    res.render('index');
})
//

//app.post request:
app.post("/", function(req, res) {
    let newNote = new Note({
        username: req.body.username,
        title: req.body.title,
        content: req.body.content
    });
    newNote.save();
    res.redirect('/');
})
//

app.listen(3000, function () {
    console.log("server is running on port 3000");
})