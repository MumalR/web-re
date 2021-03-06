import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import makeup from './Images/makeup.jpg';
import music from './Images/music.jpg';
import musice from './Images/music-e.jpg';
import musich from './Images/music-h.jpg';
import runaway from './Images/runaway-2.jpg';

function Cards() {
    return (
        <div className = 'cards'>
            <h1>Treat for your eyes only!</h1>
            <div className = 'cards__container'>
                <div className = 'cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src = {makeup}
                        text =  "Explore the brand new high-end looks."
                        label = 'Chehra'
                        path = '/makeup'
                        />
                        <CardItem 
                        src = {music}
                        text =  "Be brought back by classic Melodies."
                        label = 'Afsaane'
                        path = '/music'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                        src = {musice}
                        text =  "English Playlist."
                        label = 'Melody'
                        path = '/music'
                        />
                        <CardItem 
                        src = {runaway}
                        text =  "What's in Vogue."
                        label = 'Runaway'
                        path = '/makeup'
                        />
                         <CardItem 
                        src = {musich}
                        text =  "Hindi Playlist."
                        label = 'Nagme'
                        path = '/music'
                        />
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Cards;
