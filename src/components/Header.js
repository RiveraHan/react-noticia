import React from 'react';
import ProPTypes from 'prop-types';

const Header = ({titulo}) => {
    return ( 
        <nav className="nav-wrapper light-blue darken-3">
            <a href="#" className="brand-logo center">{titulo}</a>
        </nav>
     );
}

Header.propTypes = {
    titulo: ProPTypes.string.isRequired
}
 
export default Header;