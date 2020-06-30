import React from "react";
//import logo from './logo.svg';
import TiraPeliculas from "./components/TiraPeliculas";
import ContenedorPublicidad from "./components/ContenerdorPublicidad";


function App() {
  return (
    <div className="App">
      <header className="App-header"></header>

      <main>
        <ContenedorPublicidad> 
          <h2>Wooo!!!  Publicidad!! </h2>
      {/*Aca desidimos q va en los children*/}
        </ContenedorPublicidad>
        <TiraPeliculas />
        <TiraPeliculas />
        <ContenedorPublicidad> 
          <ul>
            <li>Pubicidad 1</li>
            <li>Pubicidad 2</li>
            <li>Pubicidad 3</li>
          </ul>
        </ContenedorPublicidad>
      </main>
    </div>
  );
}

export default App;
