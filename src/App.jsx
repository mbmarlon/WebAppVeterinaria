import {useState, useEffect} from 'react';
import { useLayoutEffect } from 'react/cjs/react.development';

import Formulario from "./Components/Formulario";
import Header from "./Components/Header";
import ListadoPasientes from "./Components/ListadoPasientes";

function App() {
  //Buen lugar para hacer funciones :D

  //Arreglo para el llenado del formulario
  const [pacientes, setPacientes] = useState([]);

  //objeto para la edición de los pacientes
  const [paciente, setPaciente] = useState({});
  
  //EVITA QUE SE BORRE EL LOCAL STORAGE
  useEffect(()=>{
      const pacientesGuardados = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesGuardados);
  },[])

  //Para almacenar en el local
  useEffect(()=>{
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  },[pacientes])

  //eliminar paciente
  const eliminarPaciente = (id)  =>{
   const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);

   setPacientes(pacientesActualizados);
  }

  return (
    
    <div className="container mx-auto my-5"> 
      <Header/>
      <div className="mt-12 md:flex ">
        <Formulario
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}
        />
      <ListadoPasientes
        pacientes={pacientes}
        setPaciente = {setPaciente}
        eliminarPaciente={eliminarPaciente}
      />
      </div>
      
    </div>
  )
}

export default App;

