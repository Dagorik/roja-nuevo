const mongoose = require('mongoose');

const peliculaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    genero: {
        type: String,
        enum:['DRAMA','ACCION','COMEDIA']
    },
    director: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'director'
    },
});


const Pelicula = mongoose.model('pelicula', peliculaSchema);

module.exports = Pelicula;