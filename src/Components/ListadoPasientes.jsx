import Paciente from "./Paciente";

function ListadoPasientes({pacientes}) {
  return (
    <div className="md:w-1/2 lg:2/5 md:h-screen overflow-y-scroll">
        <h3 className="font-black text-3xl text-center">Pacientes</h3>
        <p className="mt-3 text-center">
              <span className="text-indigo-600 font-bold">Administra</span> tus pacientes  y citas
        </p> 
        <div >
            {pacientes.map( (paciente) => (
                    <h1>desde map</h1>
                )
            )}
        <Paciente/>
        </div>
        
    </div>
  )
}

export default ListadoPasientes;