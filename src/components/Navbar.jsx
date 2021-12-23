import React from 'react';
import "../styles/Navbar.css";

export function Navbar(){


    return(

        <div className='nav-container'>
            <div id='logo'>
                <h1>iCode2</h1>
            </div>

            <div id='items'>
                <h2 id='games'>Games</h2>
                <h2 id='courses'>Courses</h2>
                <h2>About</h2>
            </div>

        </div>

    );


}
