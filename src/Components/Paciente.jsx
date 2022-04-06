function paciente({paciente, setPaciente, eliminarPaciente}) {

    const handleElinimar = () =>{
        const respuesta = confirm('Seguro quieres eliminar el paciente?');

        if(respuesta){
            eliminarPaciente(id)
        }
    }
    const {mascota, propietario, mail, alta, sintomas,id} = paciente;
  return (
    <div className="my-5 mx-3 bg-white shadow-lg rounded-2xl py-10 px-10">
        <p className=" text-gray-700 uppercase font-bold">Nombre:
            <span className=" text-gray-700 uppercase font-normal"> {mascota}</span>
        </p>

        <p className=" text-gray-700 uppercase font-bold">propietario:
            <span className=" text-gray-700 uppercase font-normal"> {propietario}</span>
        </p>

        <p className=" text-gray-700 uppercase font-bold">mail:
            <span className=" text-gray-700 uppercase font-normal"> {mail} </span>
        </p>

        <p className=" text-gray-700 uppercase font-bold">fecha de alta:
            <span className=" text-gray-700 uppercase font-normal">{alta}</span>
        </p>

        <p className=" text-gray-700 uppercase font-bold">síntomas:
            <span className=" text-gray-700 uppercase font-normal"> {sintomas}</span>
        </p>

        <div className="flex justify-between">
        <button type="button"
                className="text-indigo-600 font-bold border-2 border-indigo-600 rounded-lg px-6 py-1 my-3 mx-0 hover:shadow-lg hover:bg-indigo-600 hover:text-white"
                onClick={() => setPaciente(paciente)}
        >Editar</button>
        <button type="button"
                className="text-red-600 font-bold px-5 my-3 mx-0 border-2 border-red-600 rounded-lg py-1 hover:shadow-lg hover:bg-red-600 hover:text-white"
                onClick={handleElinimar}
        >Eliminar</button>
        </div>
</div>
  )
}

export default paciente