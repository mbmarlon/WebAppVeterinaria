import {useState,useEffect} from "react";
import Error from "./Error";

//es el estado del componente

//cómo se utiliza?
// const [cliente, setCliente] = useState([])

//reglas
//Siempre deben haber los mismos hooks

function Formulario({pacientes, setPacientes, paciente,setPaciente}) {

    //Creamos el estate del formulario
    const[mascota, setMascota] = useState('');
    const[propietario, setPropietario] = useState('');
    const[mail, setMail] = useState('');
    const[alta, setAlta] = useState('');
    const[sintomas, setSintomas] = useState('');

    //state del error
    const[error, setError] = useState(false);

    //para evitar actualizaciones innecesarias
    useEffect(() => {
        //para llenar el formulraio
        //comprobar si está vacío
        if(Object.keys(pacientes).length >0){
            //Añadir al formulario el valor del objeto
            setMascota(paciente.mascota);
            setPropietario(paciente.propietario);
            setMail(paciente.mail);
            setAlta(paciente.alta);
            setSintomas(paciente.sintomas);
        }
        
    }, [paciente])


    //función para crear el key único
    const generarId= () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);

        return random + fecha;
    }

    //función que permite al usuario enviar el formulario por eso trae ´e´
    const handleSubmit = (e)=> {
        //para que no llegue vacío
        e.preventDefault();

        //Validando a pie
        if([mascota, propietario,mail,alta,sintomas].includes('')){
            setError(true);
        }else{
            setError(false);
            //Se crea el objeto de los pacientes
            const objetoPaciente={
                mascota,
                propietario,
                mail,
                alta,
                sintomas,
                // no podemos tener el ID aquí id: generarId()
            }

            //Para que actualice los pacientes y no cree nuevos al editar los datos:
            //Si los pacientes ya existen, tienen un ID
            //El paciente tiene id?
            if(paciente.id){
                //Si, Se editan los pacientes
                console.log('Editado');
                //se asigna el mismo id al paciente del formulario
                objetoPaciente.id = paciente.id;
                //objeto con la iteración de pacientes
                const pacientesActualizados = pacientes.map( pacienteInState =>
                    //si tienen el mismo ID, agrega al mismo objeto y los anteriores
                    pacienteInState.id === paciente.id ? objetoPaciente : pacienteInState)
                //Actualiza los datos
                setPacientes(pacientesActualizados);
                //limpia el state
                setPaciente({});

            }else{
                //No, Se agregan los pacientes nuevos
                console.log('Nuevo registro');

                //ésta es la función para generar El ID, la key del map en paciente
                objetoPaciente.id = generarId();

                //'...' se usa para hacer una copia del arreglo
                setPacientes([...pacientes,objetoPaciente]);
            }
        }
            // se re inicia el formulario
            setMascota('');
            setPropietario('');
            setMail('');
            setAlta('');
            setSintomas('');
        


    }
  return (
      <div className="md:w-1/2 lg:2/5">
          <h2 className="font-black text-3xl text-center">Agregar pacientes</h2>

          <p className="mt-3 text-center">
              <span className="text-indigo-600 font-bold">Añade</span> tus pacientes 
          </p>
          <form 
            onSubmit={handleSubmit}
            className="my-5 mx-3 bg-white shadow-lg rounded-2xl py-10 px-10"
            >
                
              <div>
                <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                    mascota
                </label>
                <input
                    id="mascota"
                    className="my-2 border-2 px-3 py-2 rounded-lg placeholder-gray-400 w-full"
                    type="text"
                    placeholder="Nombre de la mascota"
                    value={mascota}
                    onChange={(e) => setMascota(e.target.value)}
                    />
              </div>
              <div className="my-3">
                <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
                    propietario
                </label>
                <input
                    id="propietario"
                    className="my-2 border-2 px-3 py-2 rounded-lg placeholder-gray-400 w-full"
                    type="text"
                    placeholder="Nombre del propietario"
                    value={propietario}
                    onChange={(e) => setPropietario(e.target.value)}
                    />
              </div>
              <div className="my-3">
                <label htmlFor="mail" className="block text-gray-700 uppercase font-bold">
                    mail
                </label>
                <input
                id="mail"
                className="my-2 border-2 px-3 py-2 rounded-lg placeholder-gray-400 w-full"
                type="email" 
                placeholder="Escribe tu email"
                value={mail}
                    onChange={(e) => setMail(e.target.value)}
                    />
              </div>
              <div className="my-3">
                <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
                    alta
                </label>
                <input
                id="alta"
                className="my-2 border-2 px-3 py-2 rounded-lg placeholder-gray-400 w-full"
                type="date"
                value={alta}
                onChange={(e) => setAlta(e.target.value)}
                />
              </div>
              <div className="my-3">
                <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                    síntomas
                </label>
                <textarea 
                cols="30" rows="4"
                className="my-2 border-2 px-3 py-2 rounded-lg placeholder-gray-400 w-full resize-none"
                id="sintomas"
                placeholder="Describe los sintomas"
                value={sintomas}
                onChange={(e) => setSintomas(e.target.value)}
                />
              </div>
              { error && <Error mensaje= 'Todos los campos son obligatorios'/>}

              <input type="submit" 
                     className="bg-indigo-600 w-full p-3 text-white uppercase font-bold
              hover:bg-indigo-300 hover:text-indigo-600 shadow-lg rounded-xl cursor-pointer transition-all"
                     value={paciente.id ? 'Guardar Cambios' : 'Agregar Paciente'}
                />
          </form>
      </div>
  )
}

export default Formulario;