import Paciente from "./Paciente";

function ListadoPasientes({ pacientes, setPaciente,eliminarPaciente }) {

  return (
    <div className="md:w-1/2 lg:2/5 md:h-screen overflow-y-scroll">

      {/* Condicional para saber si el arreglo de paciente está lleno o vacío*/}
      {pacientes && pacientes.length ? (
        <>
          <h3 className="font-black text-3xl text-center">Pacientes</h3>
          <p className="mt-3 text-center">
            <span className="text-indigo-600 font-bold">Administra</span> tus pacientes  y citas
          </p>
          <div >
            {/*no se usara el indice para hacer la key del map puesto que es mala prá ctica*/}
            {pacientes.map((paciente, i) => (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente ={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            )
            )}
          </div>
        </>
      ) : (
        <>
          <h3 className="font-black text-3xl text-center">No hay pacientes</h3>
          <p className="mt-3 text-center">
            <span className="text-indigo-600 font-bold">Agrega pacientes llenando el formulario</span>
          </p>
        </>
      )}




    </div>
  )
}

export default ListadoPasientes;