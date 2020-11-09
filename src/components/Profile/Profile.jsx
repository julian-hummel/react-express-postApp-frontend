import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/auth/authSlice'
import { Form, Button, Modal } from 'react-bootstrap'
import { updateUser, updateUserName } from './../../UserFunctions'
import { useState } from 'react';

export default function Profile(props) {
    const userApp = useSelector(selectUser)
    const [ willBeNotificated, setWillBeNotificated ] = useState(false)
    const [ isLoading, setisLoading ] = useState(false)
    const [ showChangeName, setShowChangeName ] = useState(false)
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')

    const handleShowChangeName = () => setShowChangeName(true)
    const handleCloseChangeName = () => setShowChangeName(false)

    useEffect(() => {
      if(!localStorage.getItem('usertoken')) {
        props.history.push('/login')
      }
    })

    function onSubmit() {
      setisLoading(true)
      var user = {}
      user.email = userApp.email
      user.notification = willBeNotificated

      updateUser(user)
      .finally(setisLoading(false))
    }

    function submitNewName() {
      var user = { firstName, lastName, email: userApp.email }
      updateUserName(user)
      handleCloseChangeName()
      setTimeout(function(){
        window.location.reload()
      }, 1000);    }
    
    return(        
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFIL</h1>
            <p>Vorname: {userApp.firstName}</p>
            <p>Nachname: {userApp.lastName}</p>
            <Button onClick={handleShowChangeName} variant="primary" size="sm"> Namen ändern</Button>
            <Modal show={showChangeName} onHide={handleCloseChangeName}>
                <Modal.Header closeButton> 
                <Modal.Title>Namen ändern</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                      <Form.Group>
                        <Form.Label>Vorname</Form.Label>
                        <Form.Control 
                          placeholder="Neuer Vorname" 
                          value={firstName}
                          onChange={e => setFirstName(e.target.value)}
                        />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Nachname</Form.Label>
                        <Form.Control 
                          placeholder="Neuer Nachname" 
                          value={lastName}
                          onChange={e => setLastName(e.target.value)}
                        />
                      </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseChangeName}>
                    Schließen
                </Button>
                <Button variant="primary" onClick={submitNewName}>
                    Speichern
                </Button>
                </Modal.Footer>
            </Modal>
            <p>Email: {userApp.email}</p>
            <Form onSubmit={onSubmit}>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check disabled={isLoading} onClick={ e => setWillBeNotificated(!willBeNotificated) } type="checkbox" label="Ich will Mitteilungen erhalten" />
              </Form.Group>
              <Button size="sm" variant="primary" type="submit">Speichern</Button>
            </Form>
          </div>
        </div>
      </div>    
    );  
}