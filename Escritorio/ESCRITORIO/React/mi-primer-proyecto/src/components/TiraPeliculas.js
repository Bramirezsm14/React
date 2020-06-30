import React from "react";
import Pelicula from "./Pelicula";


function TiraPelicula() {
    return (
        <div>
        <Pelicula  generos={['Fantasia','Aventura']} rating={8.0} titulo='Harry Potter'/> 
        <Pelicula generos={['Animacion','Familias']} rating={7.5} titulo='Toy Story'/> 
        <Pelicula generos={['Drama']}                rating={6.0} titulo='Her'/> 
        <Pelicula genero={['Drama']}                 rating={9.0} titulo='Parasite'/> 
        <Pelicula generos={['Accion','Aventura']}    rating={4.0} titulo='Transformer'/> 
        </div>
    );
  }



  export default TiraPelicula