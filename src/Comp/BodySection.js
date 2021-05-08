import React from 'react';
import { Button } from './Button';
import './BodySection.css';

function BodySection() {
    return(
        <>
        <div className = 'hero-container'>
            {/* <video src = '../../public/Videos/video-1.mp4' autoPlay loop muted/> */}
			<div className = 'hero-wrapper'>
            <h1>MIDDLe</h1>
            <h1>oF</h1>
            <h1>ADVeNTURE</h1>
            <p>IS SUCH A PERFECT PLACE TO START.</p>
            <div className = 'hero-btns'>
                <Button className='btns'
                 buttonStyle='btn--outline'
                 buttonSize = 'btn--large'>
                    GET STARTED
                </Button>
                <Button className='btns'
                 buttonStyle='btn--primary'
                 buttonSize = 'btn--large'>
                    WATCH TRAILER <i className = 'far fa-play-circle'/>
                </Button>
                </div>
            </div>
        </div>
        </>
    );
};

export default BodySection;
