import React from 'react';
import PropTypes from 'prop-types';

const NavButton = ({isOpen, setIsOpen, openIcon = "fa-times", closedIcon, extraClasses, ariaLabel}) => (
    <button 
        className={`btn ${extraClasses}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label={`Show ${ariaLabel}`}
    >
        <span className={`fa ${isOpen ? openIcon : closedIcon}`}></span>
    </button>
);

NavButton.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired,
    openIcon: PropTypes.string,
    closedIcon: PropTypes.string.isRequired,
    extraClasses: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string.isRequired,
};

export default NavButton;