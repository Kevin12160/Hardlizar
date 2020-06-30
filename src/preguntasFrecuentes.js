const  fs  =  require ( 'fs' ) ;
let  preguntasFrecuentes  =  {
    db : './data/faqs.json' ,
    titulo : "Preguntas Frecuentes" ,
    leerJSON : function ( )  {
        let  faqsJson  =  fs.readFileSync ( this.db,"utf-8" ) ;
        let  faqs  =  JSON.parse( faqsJson ) ;
        return  faqs
    } ,
    cantidad : function ()  {
        return this.leerJSON().total_faqs
    } ,
    listasPreguntas : function ( )  {
        let  faqs  =  this.leerJSON ( ) ;
        let  preguntasfrecuentes  =  [ ]
        faqs.faqs.forEach ( function ( faq ) {
            preguntasfrecuentes.push(faq) ;
            
        } )
        return  preguntasfrecuentes 
    }
}
module.exports =  preguntasFrecuentes 