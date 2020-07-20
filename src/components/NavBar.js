import React from 'react'
import {Link, NavLink, withRouter} from 'react-router-dom'

const NavBar = () => {
   
    return (
        <nav className="nav-wrapper pink darken-1">
            <div className="container">
                <ul className="left">
                    <li><NavLink to="/AboutUs">About us</NavLink></li>
                    <li><NavLink to="/PlanYourEvent">Plan your event</NavLink></li>
                    <li><NavLink to="/Inspirations">Inspirations</NavLink></li>
                    <li><NavLink to="/ContactUs">Contact us</NavLink></li>
                </ul>
            </div>
        </nav>
    )
} 
export default withRouter(NavBar)
