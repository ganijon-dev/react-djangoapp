import React from 'react'
import {NavLink, Link} from 'react-router-dom'

import Logo from '../commonFiles/Logo/Logo'
import classes from './Navbar.module.scss'
import Container from '../commonFiles/Container/Container'
const Navbar = () => {
    return (
        <div className={classes['nav-wrapper']}>
            <Container>
                <nav className={classes['nav']}>
                <Link to ='/' className = {classes['brand-logo left']}><Logo/> </Link>

                    <ul className={classes['right']}>
                        <li className={classes['nav-item']}>
                            <NavLink to='/sites' className={classes['nav']} activeClassName={classes['active-btn']}>
                                <span>My Websites</span>
                            </NavLink>
                            </li>
                        <li className={classes['nav-item']}>
                            <NavLink to='/tools' className={classes['nav']} >  
                                <span>Tools</span>
                            </NavLink>
                            
                        </li>
                        <li className={classes['nav-item']}>
                            <a href='/superuser/' className={classes['nav']} >  
                                <span>Admin</span>
                            </a>
                            
                        </li>
                    
                    
                    </ul>
                
                </nav>
                   
            </Container>
        </div>  
    )
}

export default Navbar
