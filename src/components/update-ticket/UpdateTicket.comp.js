import React from 'react';
import PropTypes from 'prop-types';
import {Form , Button} from 'react-bootstrap';
import { MessageHistory } from '../message-history/MessageHistory.comp';

export const UpdateTicket = ({msg,handleOnChange,handleOnSubmit}) => {
  return (
    <Form onSubmit={handleOnSubmit}> 
        <Form.Label>Reply</Form.Label>
        <Form.Text>Please reply your message here</Form.Text>
       <Form.Control 
       name=""
       value={msg}
       onChange={handleOnChange}
       as="text-area" row="5" name="detail" />
        <div className='text-right mt-3 mb-3'>
        <Button variant="info" type="submit">Reply</Button>
        </div>
    </Form>
  );
};

MessageHistory.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    msg: PropTypes.string.isRequired,
   };