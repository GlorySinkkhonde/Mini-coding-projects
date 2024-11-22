import React from 'react';
import Flashcards from './Flashcards';
import Sidebarc from './Sidebarc';
import './Main-container.css'

const MainContainer = () => {
    return (
        <div>

            <div className="main__container">
                
                <div className="sidebar_container">
                    <Sidebarc />
                </div>

                <div className="flashcard__wrapper">
                    <Flashcards />
                </div>
                

                


            </div>

        </div>
    );
}

export default MainContainer;
