import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/auth/authSlice'
import { Form, Button } from 'react-bootstrap'
import { updateUser } from './../../UserFunctions'
import { useState } from 'react';

export default function Profile(props) {
    const user = useSelector(selectUser)
    const [willNotBeNotificated, setWillNotBeNotificated] = useState('')

    useEffect(() => {
      if(!localStorage.getItem('usertoken')) {
        props.history.push('/login')
      }
    })

    function onSubmit() {
      var user = {
        email: user.email,
        notification: setWillNotBeNotificated !== 'on'
      }
      updateUser(user)
    }
    
    return(        
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFIL</h1>
            <p>Vorname: {user.firstName}</p>
            <p>Nachname: {user.lastName}</p>
            <p>Email: {user.email}</p>
            <p>id: {user._id}</p>
            <Form onSubmit={onSubmit}>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check onChange={e => setWillNotBeNotificated(e.target.value)} type="checkbox" label="Ich will keine Mitteilungen erhalten" />
              </Form.Group>
              <Button size="sm" variant="primary" type="submit">Speichern</Button>
            </Form>
          </div>
        </div>
      </div>    
    );  
}