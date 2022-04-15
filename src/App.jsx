import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
import { useState, useEffect } from 'react';
import Paciente from "./components/Paciente";


function App() {

  const [pacientes, setPacientes] = useState([]);
  // este state paciente es para la edicion
  const [paciente, setPaciente] = useState({});
  // eliminar paciente
  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados)
    
  }
  // cuando pasamos un [] vacio en useEffect solo se ejecuta una sola vez y el orden des los effects en importante
  useEffect(()=>{
    const obtenerLocalStorage = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
      setPacientes(pacientesLS)
    }
    obtenerLocalStorage()
  }, [])

  useEffect(() => {
    console.log('componente listo o cambio pacientes')
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes])

  return (
   <div className="container mx-auto mt-20">

    <Header />
    <div className="mt-12 md:flex">

      <Formulario 
        pacientes = { pacientes }
        setPacientes = { setPacientes }
        paciente = { paciente }
        setPaciente = { setPaciente }
      />
      <ListadoPacientes
        pacientes = { pacientes }
        setPaciente = {setPaciente}
        eliminarPaciente = { eliminarPaciente }
      />
    </div>
    
   </div>
  )
}

export default App
