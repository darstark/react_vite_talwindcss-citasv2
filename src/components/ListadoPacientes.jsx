import React from "react";
import Paciente from "./Paciente";
const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
  
  return (
    // esa linea de overflow y h-screen crear un scroll pero solo a la derecha para no perder el form
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        
       <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-lg mt-5 mb-10 text-center">
              Administra tus {""}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>

      {/* usar el indice de un arreglo es una mala practica no recomendada por eso no usamos el key del objeto paciente*/}
      
      { pacientes.map((paciente) => {
        return (
        <Paciente 
        key={paciente.id} 
        paciente={paciente} 
        setPaciente = {setPaciente}  
        eliminarPaciente = { eliminarPaciente }
        /> );
        
      })}
        </>
        ) : (
          <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-lg mt-5 mb-10 text-center">
              Agrega tus pacientes {""}
        <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
      </p>

          </>
        )}
      
    </div>
  );
};

export default ListadoPacientes;
