import React, { useEffect, useState } from "react";
import {Navbar, Nav, Button} from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux'
import { selectAuth, logoutCurrentUser, selectAdmin } from '../../features/auth/authSlice'
import { addFlashMessage } from '../../features/flashMesssage/flashMessageSlice'
import './style.css';
import setAuthTokenAsHeader from '../../setAuthTokenAsHeader'
import jwt_decode from 'jwt-decode'

export default function NavigationBar(props) {
    const isAuthenticated = useSelector(selectAuth)
    const isAdmin = useSelector(selectAdmin)
    const dispatch = useDispatch()
    const [sessionTime, setSessionTime] = useState(0)

    useEffect(() => {
        setSessionTime(computeCounter())
    }, []);
   
    const loginBtn = (
        <Nav.Item><Button className="loginButton" href="#login" variant="primary" size="sm">Login</Button>{' '}</Nav.Item>
    );
    const logoutBtn = (     
        <Nav.Item><Button onClick={handleLogout} className="logoutButton" variant="primary" size="sm">Logout</Button>{' '}</Nav.Item>
    );

    const sessionCounter = (
        <Nav.Item><Button id="sessionCounter" variant="outline-primary" size="sm">Sitzung endet in: {sessionTime} min</Button>{' '}</Nav.Item>
    );

    function handleLogout() {
        dispatch(logoutCurrentUser())
        dispatch(addFlashMessage({
            text: "Sie wurden erfolgreich ausgeloggt.",
            type: "success"
        }))
        setAuthTokenAsHeader(false)
        window.location.reload()
    }

    function computeCounter() {
        const token = localStorage.getItem('usertoken')
        if(token) {
            const { exp } = jwt_decode(token)
            if (!(Date.now() >= exp * 1000)) {
                var diff = exp*1000 - Date.now()
                return Math.round(((diff % 86400000) % 3600000) / 60000)
            }else {
                return 0
            }
        }
    }

    return (
        <Navbar id="navbar" bg="light" expand="lg">
            <Navbar.Brand id="logo" href="#">Socializor</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Item><Nav.Link id="posts" href="#posts">Sprüche</Nav.Link></Nav.Item>
                    {isAuthenticated && <Nav.Item><Nav.Link id="posts" href="#messenger ">Messenger</Nav.Link></Nav.Item>}
                    {!isAuthenticated && <Nav.Item><Button className="registerButton" href="#register" variant="primary" size="sm">Registrieren</Button>{' '}</Nav.Item>}
                    {isAuthenticated && <Nav.Item><Button href="#profile" className="profileButton" variant="primary" size="sm">Profil</Button>{' '}</Nav.Item>}
                </Nav>
                <Nav className="ml-auto">
                    {isAuthenticated && sessionCounter}
                    {isAdmin && <Nav.Item><Button id="adminBtn" size="sm" variant="outline-danger">Admin</Button>{''}</Nav.Item>}
                    {isAuthenticated? logoutBtn : loginBtn}
                </Nav>
            </Navbar.Collapse>
        </Navbar> 
    )  
}