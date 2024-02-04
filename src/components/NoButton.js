// NoButton.js
import React from 'react';

const NoButton = ({ onClick }) => {
    return (
        <button className="no-button" onClick={onClick}>
            No
        </button>
    );
};

export default NoButton;
