//img from https://sunnyhealthfitness.com/pages/contact-us
import React from 'react'
import image from "../help.png"
import NavBar from './NavBar'



const ContactUs = () =>{
    return (
        <div className="container">
        <NavBar /><br></br>
        
            <h4 className="left ">Contact us</h4><br></br><br></br>
            <p className="left event">Need More Assistance?</p><br></br><br></br><br></br>
            <p>For more information, please contact us @613-556-5577</p>
            <p>You can also reach us through email: planityourslef@piy.ca</p><br></br><br></br>
            <img className="picture" src={image} alt="An Event"></img><br></br><br></br><br></br><br></br>

        </div>
    )
} 
export default ContactUs
