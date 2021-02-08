import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';
import ProPTypes from 'prop-types';

const Formulario = ({setCategoria}) => {

    const OPCIONES = [
        {value: 'generales', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertainment', label: 'Entretenimiento'},
        {value: 'health', label: 'Salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'sports', label: 'Deportes'},
        {value: 'technology', label: 'Tecnología'}
    ]

    // custom hook
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);

    const handleBuscarNoticias = e => {
        e.preventDefault();

        setCategoria(categoria);
    }

    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={handleBuscarNoticias}
                >
                    <h2 className={styles.heading}>Encuentra Noticias por Categoria</h2>
                    <SelectNoticias />
                    <div className="input-field col s12">
                        <input 
                            type="submit"
                            className={`${styles['btn-block']} btn-large amber darken-2`}
                            value="buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}

Formulario.propTypes = {
    setCategoria: ProPTypes.func.isRequired
}
 
export default Formulario;