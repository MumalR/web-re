import React,{ useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click,setClick] = useState(false);
    const [button, setButton] = useState(true);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else{
            setButton(true);
        }
    };

useEffect(
    () => {
        showButton();
    },[]
);

    window.addEventListener('resize',showButton);
    return(
        <>
            <nav className = 'navbar'>
                <div className = 'navbar-container'>
                    <Link to = '/' className = 'navbar-logo' onClick={closeMobileMenu}>
                    WEBRE <i className = "fab fa-pagelines"/>
                    </Link>
                    <div className = 'menu-icon' onClick = {handleClick}>
                        <i className ={ click ? "fas fa-times" : "fas fa-bars"}/>
                    </div>
                    <ul className={click ? 'nav-menu active': 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/literature' className='nav-links' onClick={closeMobileMenu}>
                                Gallery of Words
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/fashion-culture' className='nav-links' onClick={closeMobileMenu}>
                                Cult Haven
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <
                        Button buttonStyle='btn--outline' 
                        buttonSize ='btn--medium'>SIGN UP</Button>}

                </div>
            </nav>
        </>
    )
}

export default Navbar;