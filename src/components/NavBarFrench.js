import React from 'react'
import {Link, NavLink, withRouter} from 'react-router-dom'

const NavBarFrench = () => {
   
    return (
        <nav className="nav-wrapper pink darken-1">
            <div className="container">
                <ul className="left">
                    <li><NavLink to="/AboutUsFrench">À propos de nous</NavLink></li>
                    <li><NavLink to="/PlanYourEvent">Planifiez votre événement</NavLink></li>
                    <li><NavLink to="/Inspirations">Inspirations</NavLink></li>
                    <li><NavLink to="/ContactUs">Contactez-nous</NavLink></li>
                </ul>
            </div>
        </nav>
    )
} 
export default withRouter(NavBarFrench)
