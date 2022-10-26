import React, { useState,useEffect } from 'react'
import {Container,Row,Col,Breadcrumb, Button} from 'react-bootstrap'
import {PageBreadcrumb} from '../../components/breadcrumb/Breadcrumb.comp'
import {SearchForm} from '../../components/search-form/SearchForm.comp'
import { TicketTable } from '../../components/ticket-table/TicketTable.comp'
import tickets from '../../assests/data/dummy-tickets.json'

export const TicketLists = () => {

    const [str, setstr] = useState('');
    const [dispTickets, setdispTickets] = useState(tickets);

    useEffect(() => {} ,[str,dispTickets]);

    const handleOnChange = (e) =>{
        const {value} = e.target;
        setstr(value);

       // console.log(e.target)
        searchTicket(value);
    };

    const searchTicket = (sttr) =>{
        const displayTickets = tickets.filter(row=> row.Subjects.toLowerCase().includes(sttr.toLowerCase()));
        setdispTickets(displayTickets);
    
    };


  return (
   <Container>
    <Row>
        <Col>
        <PageBreadcrumb page="Ticket Lists" />
        </Col>
    </Row>
    <Row className='mt-4'>
        <Col>
        <Button variant='info'>Add New Ticket</Button>
        </Col>
        <Col className='text-right'>
            <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
    </Row>
    <hr />
    <Row>
        <Col>
        <TicketTable tickets={dispTickets}/>
        </Col>
    </Row>
   </Container>
  );
};
