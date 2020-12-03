import React, { useState } from 'react'
import './Navbar.css'
import { FaBars, FaTimes, FaAdobe, FaAudible } from 'react-icons/fa'
import { IoIosSearch } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    return (
            <nav>
                <div className='navbar-container'>
                    <Link className='navbar-logo' onClick={closeMobileMenu}>
                        LAVISH
                    </Link>


                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <Link
                   
                            className='nav-links'
                            to='/services'
                            onClick={closeMobileMenu}
                        >
                            Services
                             </Link>
                        <Link className='nav-links' onClick={closeMobileMenu}>
                            Info
                            </Link>

                        <Link className='nav-links' onClick={closeMobileMenu}>
                            Contact
                            </Link>

                        <Link className='NavLinks2' onClick={closeMobileMenu} >
                            Say Hi!
                        </Link>
                    </ul>

                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>

                </div>
            </nav>
    )
}

export default Navbar

