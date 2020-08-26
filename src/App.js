import React,{Fragment, useState, useEffect} from 'react';
import Preguntas from './componentes/Preguntas';
import Formulario from './componentes/Formulario';
import Listado from './componentes/Listado';
import ControlPresupuesto from './componentes/ControlPresupuesto';

function App() {

  // Definir el state

  const [presupuesto , guardarPresupuesto] = useState(0);
  const [restante , guardarRestante] = useState(0);
  const [mostrarPreg, actualizarPreg] = useState(true);
  const [gastos, guardarGasto] = useState([]);
  const [gasto , guardarGastos] = useState({});
  const [crearGasto , guardarCrearGasto] = useState(false);
  

  // UseEffect que actualiza el restante

  useEffect(()=> {
      if(crearGasto){

      // Agrega nuevo presupuesto  
        guardarGasto([
          ...gastos, gasto
        ]);

      // resta el presupuesto actual

      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);


        // Resetear a false

        guardarCrearGasto(false);
      }
  }, [gasto, crearGasto, gastos, restante]); 

  // se agregan crearGasto, gastos, restante para que no de error en la consola 
  // este error se da porque los  tenemos que declarar en el useEffect
  // como dependencia para que cuando cambien la aplicacion vuelve cargar!!!

  

  return (
      <Fragment>
        <div className="container">
          <header>
            <h1>Gastos Semanales</h1>

            <div className="contenido-principal contenido">
             {mostrarPreg ? ( 
             
                <Preguntas 
                    guardarPresupuesto={guardarPresupuesto}
                    guardarRestante={guardarRestante}
                    actualizarPreg={actualizarPreg}
                  />
              
              ) : 
              (
                  <div className="row">
                      <div className="one-half column">
                          <Formulario 
                            guardarGastos={guardarGastos}
                            guardarCrearGasto={guardarCrearGasto}
                          />
                      </div>
                      <div className="one-half column">
                          <Listado
                            gastos={gastos}
                          /> 

                          <ControlPresupuesto 
                              presupuesto={presupuesto}
                              restante={restante}
                          />
                      </div>
                  </div>
              )} 
                
              
              
            </div>
           
          </header>
        </div>
      </Fragment>
  );
}

export default App;
