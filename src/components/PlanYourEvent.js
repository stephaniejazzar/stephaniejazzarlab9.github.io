import React, {Component} from 'react'
import {Accordion, Button, Card, Tooltip } from 'react-bootstrap'
import Calendar from './Picker.js'
import { Radio, RadioGroup} from 'react-radio-group'
import Example from './Example.js'
import Themes from "./Themes"
import Venues from "./Venues"
import MyForm from "./Budget"
import Validation from './Validation'
import './Accordion.css'
import NavBar from './NavBar'






function PlanYourEvent() {
    
    return (
        <div>
        <div className="container">
        <NavBar /><br></br>
        <div> <h4 className="left">Plan Your Event</h4><br></br><br></br></div>
        
  <Accordion defaultActiveKey="0">
  <Card className='accordion'>
    <Accordion.Toggle  as={Card.Header} eventKey="0">
      Step 1: Establish a budget
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <MyForm></MyForm>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  </Accordion>
  </div>
  
  <div className="container">
  <Accordion>
  <Card className='accordion'>
    <Accordion.Toggle as={Card.Header} eventKey="1">
    Step 2: Chose a date
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
      <Calendar></Calendar>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  </Accordion>
 </div>
    <div className="container">
    <Accordion>
  <Card className='accordion'>
    <Accordion.Toggle as={Card.Header} eventKey="2">
      Step 3: Chose a venue
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
      <Card.Body>
      <Venues></Venues>
     
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  </Accordion>
  </div>
  <div className="container">
  <Accordion>
  <Card className='accordion'>
    <Accordion.Toggle as={Card.Header} eventKey="3">
    Step 4: Chose a theme
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="3">
      <Card.Body>
    <Themes></Themes>

      </Card.Body>
    </Accordion.Collapse>
  </Card>
  </Accordion>
 
  </div>
  <div className="container">
  <Accordion>
  <Card className='accordion'>
    <Accordion.Toggle as={Card.Header} eventKey="4">
    Step 5: Payment
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="4">
      <Card.Body>
     <Validation></Validation>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
</div>


<Example></Example>


 <br></br>
 <br></br>

</div> 

   

        
    )
}


export default PlanYourEvent
