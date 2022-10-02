import React, { useState,useEffect } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { AddTicketForm } from '../../components/add-ticket-form/AddTicketForm.comp';
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp';
import {shortText} from '../../util/validation'

const initialFrmDt = {
  subject: "",
  issueDate:"",
  detail:"",
};
const initialFrmError = {
  subject: false,
  issueDate:false,
  detail:false,
};

export const AddTicket = () => {

   const [frmData, setfrmData] = useState(initialFrmDt);
   const [frmDataErro, setfrmDataErro] = useState(initialFrmError);
   useEffect(() => {}, [frmData,frmDataErro]);

  const handleOnChange = e =>{
    const{name,value}= e.target;

 
  

    setfrmData({
      ...frmData,
      [name]:value,
    });
 };

const handleOnSubmit = async (e) =>{
  e.preventDefault();

  setfrmDataErro(initialFrmError)

  const isSubjectValid = await shortText(frmData.subject)
  
   setfrmDataErro({
    ...initialFrmError,
    subject: !isSubjectValid,
  }); 

};


  return (
    <Container>
      <Row>
        <Col>
        <PageBreadcrumb page="New Ticket"/>
        </Col>
      </Row>
      <Row>
        <Col> 
        <AddTicketForm 
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        frmDt={frmData}
        frmDataErro={frmDataErro}
        
        />
        </Col>
      </Row>
    </Container>
  );  
};
