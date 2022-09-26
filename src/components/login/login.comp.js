import React from "react";
import PropTypes from 'prop-types';

import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const Login = ({handleOnChange,handleOnSubmit,formSwitcher ,email,pass }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-centre">Client Login</h1>
         <h1>Client Login</h1>
          <hr />

          <Form autoComplete="off" onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="Enter Email"
               required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={handleOnChange}
                value={pass}
                placeholder="password"
                required
              />
            </Form.Group>
            <br/>
            <Button type="submit">Login</Button>
            <hr/>
          </Form>
        </Col>
      </Row>

        <Row>
          <Col>
          
          <a href="#!" onClick={() => formSwitcher("rest")}>Forget Password</a>
          <br/>
          <br/>
          </Col>
        </Row>

    </Container>
  );
};


Login.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
   pass: PropTypes.string.isRequired,
};