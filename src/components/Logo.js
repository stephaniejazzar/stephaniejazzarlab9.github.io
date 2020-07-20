import React from 'react'
import PIY from '../picture.png'
import {Jumbotron, Container} from 'react-bootstrap'
import './Accordion.css'
import  logoImg from '../logoPic.png'

var sectionStyle = {
    backgroundImage: `url(${logoImg})`
    
 }
const Logo = () => {
    
    return(
        <Jumbotron fluid  style={sectionStyle}>
  <div className="container" style={{backgroundColor:"white"}} >
    <h1 className="text-center" style={{color:"palevioletred"}}>Plan It Yourself</h1>
    
  </div>
</Jumbotron>

    
    )
}
export default Logo
