import React,{Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Preguntas = ({guardarPresupuesto,guardarRestante,actualizarPreg}) => {

    // Definirel state
    

    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

      // Función que lee el presupuesto
      const definirPresupuesto = e => {
        guardarCantidad( parseInt(e.target.value, 10) )
    }
    

    // Submit para definir el presupuesto
     const agregarPresupuesto = e => {
        e.preventDefault();

            // Validar

            // isNan es una funcion para preguntar si no es un numero lo que se esta colocando va  dar error

                if(cantidad < 1 || isNaN( cantidad ) ) {
                    guardarError(true);
                    return;
                }
            

            
            

                //si se pasa la validacion

                guardarError(false);

                guardarPresupuesto(cantidad);
                guardarRestante(cantidad);
                actualizarPreg(false);

    }
 
    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            {error ? <Error /> : null}

            <form
                 onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                ></input>

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                 ></input>
            </form>
        </Fragment>
        
     );
}

Preguntas.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
}
 
export default Preguntas;