import React, { useEffect,useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp'
import tickets from '../../assests/data/dummy-tickets.json'
import { MessageHistory } from '../../components/message-history/MessageHistory.comp'
import { propTypes } from 'react-bootstrap/esm/Image'
import { UpdateTicket } from '../../components/update-ticket/UpdateTicket.comp'

const ticket = tickets[0]
export const Ticket = () => {

    const [message,setMessage] = useState("");

    useEffect(()=>{}, [message] );

    const handleOnChange = e =>{
        setMessage(e.target.value);
    };

    const handleOnSubmit=()=>{
        alert('Form submitted!');
    }

  return (
   <Container>
    <Row>
        <Col>
        <PageBreadcrumb page="Ticket" /> 
        </Col>
    </Row>
    <Row>
        <Col className='text-weight-bolder text-secondary'>
        <div className='Subject'>Subject: {ticket.Subjects}</div>
        <div className='date'>Ticket Opened: {ticket.addedAt}</div>
        <div className='status'>Status: {ticket.status}</div>
        </Col>
        <Col className='text-right'> 
        <Button variant='outline-info'>Close Ticket</Button>
        </Col>
    </Row>
    <Row className='mt-4'>
        <Col>
         <MessageHistory msg={ticket.history} />
        </Col>
    </Row>
    <hr />

    <Row className='mt-4'>
        <Col>
         <UpdateTicket msg={message} 
         handleOnChange={handleOnChange}
         handleOnSubmit={handleOnSubmit}
         
         />
        </Col>
    </Row>

   </Container>
  );
};

