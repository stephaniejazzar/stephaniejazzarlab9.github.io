//Image from : https://www.ogscapital.com/article/event-planning-business-plan/
import React from 'react'
import Picture from '../picture.png'
import { NavLink} from 'react-router-dom'
import NavBar from './NavBar'






const AboutUs = () =>{
    return (
       
        <div className="container aboutus">
        <NavBar /><br></br>
        <NavLink  className="right" to="/AboutUsFrench">Français</NavLink>
       
            <h4 className="left">About us</h4><br></br><br></br>
            <p className="left event">Welcome to Plan It Yourself! This is where your dream can become a reality.</p><br></br><br></br><br></br>
            <p>Plan It Yourself is a event planning website, where you can browse through our beautiful themes and venues to plan the perfect event for you. </p>
             <img className="picture" src={Picture} alt="An Event"></img>
            

        </div>
    )
} 
export default AboutUs
