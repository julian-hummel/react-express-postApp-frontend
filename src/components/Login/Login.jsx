import React, { useState, useEffect } from 'react';
import { Form, Button, Spinner, Container, Row, Col, Badge } from 'react-bootstrap';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { login } from '../../UserFunctions';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../features/auth/authSlice'
import { addFlashMessage } from '../../features/flashMesssage/flashMessageSlice'
  
export default function Login(props) {
    const [ email, setEmail ] = useState('')
    const [ matches, setMatches ] = useState(window.matchMedia("(max-width: 600px)").matches)
    const [ password, setPassword ] = useState('')
    const [ errors, setErrors ] = useState({ })
    const [ isLoading, setIsLoading ] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        const handler = e => setMatches(e.matches)
        window.matchMedia("(max-width: 600px)").addEventListener('change', handler);
    });

    function onSubmit(e) {
        e.preventDefault()
        setIsLoading(true)
        setErrors({ })
        const user = { email, password }

        login(user).then(res => {
          if (!res.errors) {
            dispatch(setCurrentUser({ email }))
            dispatch(addFlashMessage({ 
                text: "Der Login war erfolgreich",
                type: "success"
            }))
            props.history.push(`/`)
            setTimeout(function(){
                window.location.reload()
            }, 1000);
          }else {
            setErrors(res.errors)
            setIsLoading(false)
          }
        })
    }

    return(       
        <div> 
            {!matches &&
            <Container fluid id="loginContainer">
                <Row className="justify-content-md-center">
                    <h2 className="brand">Post App</h2>
                </Row>
                <Row className="justify-content-md-center">
                    <Form onSubmit={onSubmit} className="loginForm" autoComplete="off" id="form">
                        {errors.login && <div className="alert alert-danger">{errors.login}</div>}
                        <Form.Group className="emailField">
                            <Form.Control 
                                id = "email" required
                                type="email" 
                                placeholder="E-Mail-Adresse"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            </Form.Group>

                        <Form.Group className="passwordField">
                            <Form.Control 
                                id="password" required
                                type="password" 
                                placeholder="Passwort" 
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Button size="sm" type="submit" disabled={isLoading} className="button" variant="primary" block>Einloggen</Button>
                    </Form>
                </Row>
                <Row className="justify-content-md-center">
                    {isLoading &&
                    <Col>
                        <Spinner id="loadingSpinner" animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </Col>    
                    }
                </Row>
            </Container>
            }
            {matches &&
            <Container fluid id="loginContainerMobile">
                <Row className="justify-content-md-center">
                    <h2 className="brandMobile">Post App</h2>
                </Row>
                <Row className="justify-content-md-center">
                    <Form onSubmit={onSubmit} className="loginFormMobile" autoComplete="off" id="formMobile">
                        {errors.login && <div className="alert alert-danger">{errors.login}</div>}
                        <Form.Group className="emailFieldMobile">
                            <Form.Control 
                                id = "email" required
                                type="email" 
                                placeholder="E-Mail-Adresse"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            </Form.Group>

                        <Form.Group className="passwordField">
                            <Form.Control 
                                id="password" required
                                type="password" 
                                placeholder="Passwort" 
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Button size="sm" type="submit" disabled={isLoading} className="button" variant="primary" block>Einloggen</Button>
                    </Form>
                </Row>
                <Row className="justify-content-md-center">
                    {isLoading &&
                    <Col>
                        <Spinner id="loadingSpinner" animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </Col>    
                    }
                </Row>
            </Container>
            }
        </div>
    );
}
