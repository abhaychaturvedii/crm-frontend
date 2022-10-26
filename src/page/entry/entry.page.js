import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Login } from '../../components/login/login.comp';


import "./entry.style.css";
 import { useState } from 'react';
import { ResetPassword } from '../../components/password-reset/PasswordReset.comp';

export const Entry = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [frmLoad, setFrmLoad] = useState("login");

  const handleOnChange = e =>{
    const  {name, value} =e.target;

    switch(name){
      case 'email':
        setEmail(value);
        break;
        case 'password':
          setPassword(value);
          break;
         default:
          break;
    }  
  };


  const handleOnSubmit = e => {
    e.preventDefault();

    if(!email || !password){
     return alert("Fill  up all the form!");
    }

//todo call api to submit the form
console.log(email,password);

  };

  const handleOnResetSubmit = e => {
    e.preventDefault();

    if(!email){
     return alert("Please enter the email");
    }

//todo call api to submit the form
console.log(email);

  };
  
  
   const formSwitcher = (frmType) => {
    setFrmLoad(frmType);
   }


  return (
    <div className="entry-page bg-info">
    
      <Jumbotron className="form-box bg-white">
        {frmLoad === 'login' && ( <Login 
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        formSwitcher={formSwitcher}
        email={email}
        pass={password}
        />) }
        {
          frmLoad === 'rest' && ( <ResetPassword 
          handleOnChange={handleOnChange}
          handleOnResetSubmit={handleOnResetSubmit}
          formSwitcher={formSwitcher}
          email={email}
      
          /> )
        }
        
      </Jumbotron>
      </div>
  )

}

