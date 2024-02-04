// YesButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const YesButton = ({ buttonText, buttonSize }) => {
    const navigate = useNavigate();

    const handleYesClick = () => {
        // Perform any other actions before redirecting
        navigate('/celebration');
    };

    const buttonStyle = {
        margin: '10px',
        padding: '15px 32px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        backgroundColor: '#4caf50',
        color: '#fff',
        fontSize: `${buttonSize}px`,
        borderRadius: '12px',
    };

    return (
        <button className="yes-button" style={buttonStyle} onClick={handleYesClick}>
            {buttonText}
        </button>
    );
};

export default YesButton;
