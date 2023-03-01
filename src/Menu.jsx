import React from "react";
import Inicio from "./components/Inicio.jsx";
import Sobre from "./Sobre.jsx";
import { Link, Route, Routes } from "react-router-dom";

const Menu =()=>{
    return(
        <div>
        <h2>Menu</h2>
        <Link to = '/Inicio'>Inicio</Link>
        <Link to = '/Sobre'>Sobre</Link>
        <Routes>
        <Route path="/Inicio"  element={<Inicio />} />
        <Route path="/Sobre"  element={<Sobre />} />  
     </Routes>  
        </div>
        
    )
}

export default Menu