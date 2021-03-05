import React, { useState } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { login } from '../../UserFunctions';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../features/auth/authSlice'
import { addFlashMessage } from '../../features/flashMesssage/flashMessageSlice'
  
export default function Login(props) {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ errors, setErrors ] = useState({ })
    const [ isLoading, setIsLoading ] = useState(false)
    const dispatch = useDispatch()

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
            dispatch(addFlashMessage({ 
                text: "Der Login war nicht erfolgreich",
                type: "error"
            }))
          }
        })
    }

    return(        
        <div className="container" id="loginContainer">
            <h2 className="brand">JH Reactive</h2>
            <Form onSubmit={onSubmit} className="loginForm" autoComplete="off">
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
                    
                <Button disabled={isLoading} type="submit" className="button" variant="primary" size="sm" block>Einloggen</Button>
                
                {isLoading && <Spinner id="loadingSpinner" animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>}
            </Form>
        </div>
    );
}
