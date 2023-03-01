import reactLogo from './assets/react.svg'
import "./App.css";
import Home from "./Components/Home";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Dietas from "./components/Dietas.jsx";
import {Route, Routes} from 'react-router-dom';
import Inicio from './components/Inicio.jsx';
import Sobre from './Sobre.jsx';
import  Menu from './Menu'



function App() {

        
  return (
    <div className="App">
        
      <Home />
      <Menu />   
      <Work />
      <Testimonial />
      <Contact />
      <Dietas 
      imagen='asiatica'
      nombre='Ensalada asiática de quinoa y gambas'
      calorias='390'
      ingredientes= 'Quinoa 60g, gambones 150g, aguacate 1, canonigos 100g, tomate cherry 100g, zumo de lima, chile de copos 2g, salsa de soja 15ml, sirope de arce 2.5 ml'  
      />
      <Footer />

    </div>
    
  )
 
}

export default App
