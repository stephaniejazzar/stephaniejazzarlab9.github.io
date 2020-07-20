//inspirer de https://react-bootstrap.github.io/components/modal/
import {Modal, Button, Footer, Title, Body} from 'react-bootstrap'
import React, { Component }  from 'react';


function Example(props) {
    const [show, setShow] = React.useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showT, setShowT] = React.useState(false);
     const handleOK = () => {
         setShowT(false);
        setShow(false);}
    const handleShowT = () => setShowT(true);

  
    return (
      <>
      <Button variant="secondary" size="lg" block onClick={handleShow}>
    Book Event
  </Button>
       
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to book this event?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleShowT}>
              Submit
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>


  
       
        <Modal show={showT} onHide={handleOK} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Thank you!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Your booking has been confirmed!</Modal.Body>
          <Modal.Footer>
          
          </Modal.Footer>
        </Modal>
      
      </>

    );
  }
  
  

  export default Example
