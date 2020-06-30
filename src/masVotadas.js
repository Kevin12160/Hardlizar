const  fs  =  require ( 'fs' ) ;
let  masVotadas  =  {
    bd : './data/movies.json' ,
    titulo : "Mas Votadas",
    leerJSON: function() {
        let moviesJson = fs.readFileSync(this.bd, 'utf-8');
        let movies = JSON.parse(moviesJson);
        return movies
    } ,
    cantidad: function() {
        return this.leerJSON().total_movies
    },
    pelisMasVotadas: function() {
        let movies = this.leerJSON();
        let Votadas = movies.movies.filter(function(movie){
            return movie.vote_average >= 7         
        })
        return Votadas
    },
}
module.exports = masVotadas; 