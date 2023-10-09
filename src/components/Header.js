import React from 'react';
import  './Header.css';

const Header = () => {
    return (
        <>
         <header>
            <div>
                <div className="logo">Timeboxing</div>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
         </header>
        </>
    )
}

export default Header;
