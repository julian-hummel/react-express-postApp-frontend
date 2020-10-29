import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { register } from '../../UserFunctions';
import { useDispatch } from 'react-redux'
import { addFlashMessage } from '../../features/flashMesssage/flashMessageSlice'
  
export default function Register(props) {
    const [firstName, setFirstName ] = useState('')
    const [lastName, setLastName ] = useState('')
    const [email, setEmail ] = useState('')
    const [password, setPassword ] = useState('')
    const [repeatPassword, setRepeatPassword ] = useState('')
    const [errors, setErrors ] = useState({ })
    const [isLoading, setIsLoading ] = useState(false)
    const dispatch = useDispatch()

    function onSubmit(e) {
        e.preventDefault()

        setErrors({ })
        setIsLoading(true)

        const newUser = { firstName, lastName, email, password, repeatPassword }
        
        register(newUser).then(res => {
            if (!res.errors) {
                dispatch(addFlashMessage({ 
                    text: "Die Registrierung war erfolgreich",
                    type: "success"
                }))
                props.history.push(`/login`)
            }else {
                dispatch(addFlashMessage({ 
                    text: "Die Registrierung war nicht erfolgreich",
                    type: "error"
                }))
                setErrors(res.errors)
            }
        }).catch((error) => {
            console.error(error)
        }).finally(()=>{
            setIsLoading(false)
        }) 
    }
    
    return(    
        <div className="container" id="registerContainer">
            <h2 className="brand">JH Reactive</h2>
            <Form onSubmit={onSubmit} className="registerForm" autoComplete="off">
                {errors.user && <div className="alert alert-danger">{errors.user}</div>}
                {errors.repeatPassword && <div className="alert alert-danger">{errors.repeatPassword}</div>}
                <Form.Group className="nameRow">
                    <Form.Row>
                        <Col>
                            <Form.Control 
                                id="firstName" required
                                placeholder="Vorname" 
                                value={firstName}
                                onChange={e => setFirstName(e.target.value)} 
                            />
                        </Col>
                        <Col>
                            <Form.Control 
                                id="lastName" required
                                placeholder="Nachname" 
                                value={lastName}
                                onChange={e => setLastName(e.target.value)}  
                            />
                        </Col>
                    </Form.Row>
                </Form.Group>
                    
                <Form.Group className="emailField">
                    <Form.Control 
                        id="email" required
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
                
                <Form.Group className="passwordField">
                    <Form.Control 
                        id="repeatPassword" required
                        type="password" 
                        placeholder="Passwort wiederholen" 
                        value={repeatPassword}
                        onChange={e => setRepeatPassword(e.target.value)}     
                    />
                </Form.Group>

                <Button 
                    disabled={isLoading} 
                    type="submit" 
                    className="button" 
                    variant="primary" 
                    size="sm" block>
                        Registrieren
                </Button>
            </Form>
        </div>
    );
}

