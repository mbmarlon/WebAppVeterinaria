import {useState} from "react";
import Error from "./Error";

//es el estado del componente

//cómo se utiliza?
// const [cliente, setCliente] = useState([])

//reglas
//Siempre deben haber los mismos hooks

function Formulario({pacientes, setPacientes}) {

    //Creamos el estate del formulario
    const[mascota, setMascota] = useState('');
    const[propietario, setPropietario] = useState('');
    const[mail, setMail] = useState('');
    const[alta, setAlta] = useState('');
    const[sintomas, setSintomas] = useState('');

    //state del error
    const[error, setError] = useState(false);

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
                sintomas
            }

            //... se usa para hacer una copia del arreglo
            setPacientes([...pacientes,objetoPaciente]);
            setMascota('');
            setPropietario('');
            setMail('');
            setAlta('');
            setSintomas('');
        }


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
                type="mail" 
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
              <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold
              hover:bg-indigo-300 hover:text-indigo-600 shadow-lg rounded-xl cursor-pointer transition-all" />
          </form>
      </div>
  )
}

export default Formulario;