//Image from : https://www.ogscapital.com/article/event-planning-business-plan/
import React from 'react'
import Picture from '../picture.png'
import { NavLink} from 'react-router-dom'
import NavBarFrench from './NavBarFrench'




const AboutUsFrench = () =>{
    return (
       
        <div className="container aboutus">
        <NavBarFrench/><br></br>
        <NavLink  className="right" to="/AboutUs">English</NavLink>
        
            <h4 className="left">À propos de nous</h4><br></br><br></br>
            <p className="left event">Bienvenue à Plan It Yourself! C'est ici que votre rêve peut devenir une réalité.</p><br></br><br></br><br></br>
            <p>Plan It Yourself est un site Web de planification d'événements, où vous pouvez parcourir nos magnifiques thèmes et lieux pour planifier l'événement parfait pour vous. </p>
             <img className="picture" src={Picture} alt="An Event"></img>
            

        </div>
    )
} 
export default AboutUsFrench
