// components/CelebrationPage.js
import React from 'react';
import GifPlayer from 'react-gif-player';

const CelebrationPage = () => {
    return (
        <div className="celebration-page">
            <h1 className="celebration-title">YAYYY! Congratulations!</h1>
            <GifPlayer gif={require('../assets/gifs/celebration.gif')} autoplay={true} />
        </div>
    );
};

export default CelebrationPage;
