import React from 'react';
import ProPTypes from 'prop-types';

const Noticia = ({noticia}) => {
    
    const {urlToImage, url, title, description, source} = noticia;

    const imagen = (urlToImage) ?
        <div className="card-image">
            <img src={urlToImage} alt={noticia.title} />
            <span className="card-title">{source.name}</span>
        </div>
    : null;
    
    return ( 
        <div className="col s12 m6 l4">
            <div className="card">
                {imagen}
                <div className="card-content">
                    <h5 className="card-title"><strong>{title}</strong></h5>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light btn"
                    >Ver Noticia completa</a>
                </div>
            </div>
        </div>
     );
}

Noticia.propTypes = {
    noticia: ProPTypes.object.isRequired
}
 
export default Noticia;