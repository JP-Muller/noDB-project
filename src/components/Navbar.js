import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (

        <nav className='navbar navBackground'>
            <header>
            <h1>
                <Link to='/'>
                <i className='icon far fa-check-square checkIcon' />Better Yourself Everyday
                </Link>
        </h1>
        </header>
            <div id='navChild'>
                <Link to='/'>
                    <p id='home'>Home</p>
                </Link>
                <Link to='/entries'>
                    <p id='entries'>Entries</p>
                </Link>
                <Link to='/about'>
                    <p id='about'>About</p>
                </Link>


            </div>
        </nav>

    )
}


export default Navbar
