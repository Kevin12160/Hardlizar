const homePage = require("./homePage");
const enCartelera = require("./enCartelera");
const masVotadas = require("./masVotadas");
const sucursales = require("./sucursales")
const contacto = require("./contacto");
const preguntasFrecuentes = require("./preguntasFrecuentes")
let index = {
    homePage: function(res){
        res.write(homePage.titulo + "\n");                                      
        res.write("Total: " + homePage.cantidad()+ "\n");     
        let titulos = homePage.listarPelis();
           for (titulo of titulos){
               res.write(titulo)
               res.write("\n")
           }
         res.end()
     },
    enCartelera: function(res){
        res.write(enCartelera.titulo)
        res.write("\n\n")
        let movies = enCartelera.tituloYReseña()
        movies.forEach(function(movie){
            res.write("TITULO: " + movie.title)
            res.write("\n\n")
            res.write("RESEÑA: " + movie.overview) 
            res.write("\n\n")
        })
        res.end()
    },
    masVotadas: function(res){
        res.write(masVotadas.titulo)
        res.write("\n\n")
        let movies = masVotadas.pelisMasVotadas()
        movies.forEach(function(movie){
            res.write("TITULO: " + movie.title)
            res.write("\n\n")
            res.write("RATING: " + movie.vote_average)
            res.write("\n\n")
            res.write("RESEÑA: " + movie.overview) 
            res.write("\n\n")
        })
        res.end()
       
     },
    sucursales: function(res){
        res.write(sucursales.titulo)
        res.write("\n\n")
        let sucursalesInfo = sucursales.leerJSON().theaters
         sucursalesInfo.forEach(function(cine){
            res.write("NOMBRE: " + cine.name)
            res.write("\n\n")
            res.write("DIRECCION: " + cine.address)
            res.write("\n\n")
            res.write("DESCRIPCION: " + cine.description) 
            res.write("\n\n")
        })
        res.end()

     },
    contacto: function(res){
            res.write(contacto.titulo)
            res.write("\n\n")
            res.write(contacto.contenido)
            res.end()
     },
    preguntasFrecuentes: function(res){
        res.write(preguntasFrecuentes.titulo)
        res.write("\n\n")
        let preguntas = preguntasFrecuentes.listasPreguntas()
         preguntas.forEach(function(pregunta){
            res.write("PREGUNTA: " + pregunta.faq_title)
            res.write("\n\n")
            res.write("RESPUESTA: " + pregunta.faq_answer)
        })
        res.end()
 }
}
module.exports = index; 
