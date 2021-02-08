import React from 'react';
import Noticia from './Noticia';
import ProPTypes from 'prop-types';


const ListadoNoticias = ({noticias}) => {
    return ( 
        <div className="row">
            {noticias.map(noticia => (
                <Noticia
                    key={noticia.url}
                    noticia={noticia}
                />                
            ))}
        </div>
     );
}
 
ListadoNoticias.propTypes = {
    noticias: ProPTypes.array.isRequired
}
export default ListadoNoticias;