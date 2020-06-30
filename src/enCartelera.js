const fs = require ("fs");

let enCartelera = {
    bd: './data/movies.json',
    titulo: "En Cartelera\n",
    leerJSON: function() {
        let moviesJson = fs.readFileSync(this.bd, 'utf-8');
        let movies = JSON.parse(moviesJson);
        return movies 
    },
    cantidad: function() {
        return this.leerJSON().total_movies
    },
    tituloYReseña: function(){
        let movies = this.leerJSON();
        let peliculas = []
        movies.movies.forEach(function(movie){
            peliculas.push(movie)
        })
        return peliculas
    },
}
module.exports = enCartelera