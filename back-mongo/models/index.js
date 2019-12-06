const mongoose = require('mongoose');
const Director = require('./Director');
const Pelicula = require('./Pelicula');

const URL = 'mongodb+srv://admin:qwerty123@cluster0-5mwb0.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(URL, { useUnifiedTopology: true }, (err) => {
    if (!err) console.log('Conexión exitosa');
    else console.log(err);
});

module.exports = {
    Director,
    Pelicula
}
