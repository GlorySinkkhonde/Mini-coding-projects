import React from 'react';
import Flashcards from './Flashcards';
import Sidebarc from './Sidebarc';
import './Main-container.css'

const MainContainer = () => {
    return (
        <div>

            <div className="main__container">
                

                <Sidebarc />

                <Flashcards />


            </div>

        </div>
    );
}

export default MainContainer;
