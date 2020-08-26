import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import Error from './Error';
import shortid from 'shortid';


const Formulario = ({guardarGastos, guardarCrearGasto}) => {

    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);

    const [error, guardarError] = useState(false);


    // Cuando el usuario agrega un gasto

    const agregarGasto = e => {
        e.preventDefault();

        // Validar

        
        if(cantidad < 1 || isNaN( cantidad ) || nombre==='' ) {
            guardarError(true);
            return;
        }

        // En caso de que pase la validacion

        guardarError(false);

        // Construir el gasto

        const gasto ={
            nombre,
            cantidad,
            id: shortid.generate()
        } 
        console.log(gasto);


        // pasar el gasto al componente principal

        guardarGastos(gasto);
        guardarCrearGasto(true);
        
            // resetearvel form

        guardarNombre('');
        guardarCantidad(0);
    }

    return (  
        <Fragment>
            <form
                onSubmit={agregarGasto}
            >
                <h2>Agrega tu gastos aqui</h2>

                {error ? <Error mensaje="Ambos campos son obligatorios o Presupuesto
                Incorrecto"/> : null }

                <div className="campo">
                    <label>Nombre de Gasto</label>
                    <input
                        type="text"
                        className="u-full-width"
                        placeholder="Ej. Transporte"
                        value={nombre}
                        onChange={e => guardarNombre(e.target.value)} // De esta forma lo que ecribamos se guarda en el State
                        
                    ></input>
                </div>
                <div className="campo">
                    <label>Cantidad de Gasto</label>
                    <input
                        type="number"
                        className="u-full-width"
                        placeholder="Ej. 300"
                        value={cantidad}
                        onChange={e => guardarCantidad(parseInt(e.target.value, 10))}

                    ></input>
                    
                    <input
                        type="submit"
                        className="button-primary u-full-width"
                        value="Agregar Gasto"
                    ></input>
                </div>
            </form>
        </Fragment>

    );
}


Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}
 
export default Formulario;