// HomePage.js
import React, { useState, useEffect } from 'react';
import GifPlayer from 'react-gif-player';
import YesButton from './YesButton';
import NoButton from './NoButton';

const HomePage = () => {
    const [noClickCount, setNoClickCount] = useState(0);
    const [yesButtonText, setYesButtonText] = useState('Yes, I love you!');
    const [yesButtonSize, setYesButtonSize] = useState(18);


    const handleNoClick = () => {
        setNoClickCount((prevCount) => prevCount + 1);
        updateYesButtonText();
        increaseYesButtonSize();
    };

    const updateYesButtonText = () => {
        const newTexts = ['You are my world!', 'I can’t live without you!', 'You complete me!'];
        const newIndex = Math.floor(Math.random() * newTexts.length);
        setYesButtonText(newTexts[newIndex]);
    };

    const increaseYesButtonSize = () => {
        setYesButtonSize((prevSize) => prevSize * 1.5);
    };

    return (
        <div className="home-page">
            <h1 className="page-title">Will you be my valentine?</h1>
            <GifPlayer gif={require('../assets/gifs/milk.gif')} autoplay={true} id="valentine-gif" />
            {noClickCount < 3 ? (
                <>
                    <YesButton buttonText={yesButtonText} buttonSize={yesButtonSize} />
                    <NoButton onClick={handleNoClick} />
                </>
            ) : (
                <YesButton buttonText={"Hehe You have to say yes now =)"} buttonSize={yesButtonSize} />
            )}
        </div>
    );
};

export default HomePage;
