import React from "react";
import Slide from './common/Slide';
import About from './common/About';
import Publi from './common/Publi';
//import Categorias from './common/Categorias';
import Public from './common/Public';
import Info from './common/Info';



//Concentra a todos los elementos de la pagina principal
export const HomeComponent =() => (
    <div>
        <Slide />
        <About />
        <Publi />
        {/*<Categorias />*/}
        <Public />
        <Info />
    </div>
);