import {useState} from 'react';

import Formulario from "./Components/Formulario";
import Header from "./Components/Header";
import ListadoPasientes from "./Components/ListadoPasientes";

function App() {
  //Buen lugar para hacer funciones :D

  const [pacientes, setPacientes] = useState([]);

  return (
    
    <div className="container mx-auto my-5"> 
      <Header/>
      <div className="mt-12 md:flex ">
        <Formulario
        pacientes={pacientes}
        setPacientes={setPacientes}
        />
      <ListadoPasientes
        pacientes={pacientes}
      />
      </div>
      
    </div>
  )
}

export default App;

