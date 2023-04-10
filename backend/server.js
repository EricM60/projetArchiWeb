const express = require('express')
const app  = express()
const mongoose = require('mongoose');
mongoose.set('strictQuery',false);
var routes = require('./route/routes');
const cors = require('cors');


app.use(cors({
    origin: 'http://localhost:4200'
}));

app.listen(9992, function check(err)
{
    if(err)
    console.log("error")
    else
    console.log("started")
});

/* mongoose.connect("mongodb://localhost:27017/baseProjet", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to database"))
  .catch((error) => console.log("Error connecting to database", error)); */

  mongoose.connect('mongodb://127.0.0.1:27017/baseProjet', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');

  // Code pour interagir avec la base de données ici
});

app.use(express.json());
app.use(routes);