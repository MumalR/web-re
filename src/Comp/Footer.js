import React from 'react';
import './Footer.css';
import { Button } from '../Comp/Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                A memoir building up page by page!
                </p>
                <p className='footer-subscription-text'>
                    Not regular.
                </p>
                <div className='input-areas'>
                    <form>
                        <input type='text' 
                        name ='new leaf' 
                        placeholder = 'Your thoughts' 
                        className='footer-input'/>
                        <Button buttonStyle='btn--outline'>Submit</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Me</h2>
                        <Link  to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Contributers</Link>
                        <Link to='/'>Term of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Me</h2>
                        <Link  to='/sign-up'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>My playlist</Link>
                        <Link to='/'>My journal</Link>
                    </div>
                    </div>
                    <div className='footer-link-wrapper'>
                        <div className='footer-link-items'>
                            <h2>Videos</h2>
                            <Link  to='/sign-up'>Music</Link>
                            <Link to='/'>Recipe</Link>
                            <Link to='/'>Styling</Link>
                            <Link to='/'>Sketching</Link>
                        </div>
                        <div className='footer-link-items'>
                            <h2>Social Media</h2>
                            <Link  to='/sign-up'>Instagram</Link>
                            <Link to='/'>Facebook</Link>
                            <Link to='/'>Twitter</Link>
                            <Link to='/'>Youtube</Link>
                    </div>
                
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            WEBRE <i className = "fab fa-pagelines"/>
                        </Link>
                    </div>
                    <small className='website-rights'>WEBRE © 2020 </small>
                    <div className='social-icons'>
                        <Link 
                        className='social-icon-link intagram'
                        to='/'
                        target='_blank'
                        aria-label='Instagram'>
                            <i class='fab fa-instagram'/>
                        </Link>
                        <Link 
                        className='social-icon-link facebook'
                        to='/'
                        target='_blank'
                        aria-label='facebook'>
                            <i class='fab fa-facebook-f'/>
                        </Link>
                    </div>
    
                </div>
            </section>
        </div>
    )
}


export default Footer;