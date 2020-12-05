import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap'
import './style.css';

export default function Christmas() {
    return(
        <React.Fragment>
            <h1>#24</h1>
            <div id="letterContainer">
                <Card id="letterCard" style={{ width: '30rem' }}>
                    <Card.Body>
                        <Card.Title>Brief an Lilly</Card.Title>
                        <Card.Text>
                            Erstmal frohe Weihnachten Lilly!<br/> Du hast dich ja jetzt fleißig durch alle Türchen 
                            durchgearbeitet und hast es bis zum Ende ausgehalten. <br/><br/>
                            Natürlich ist es jetzt Zeit für dein Geschenk. <br/><br/>
                            Das bekommst du dann am zweiten Weihnachtsfeiertag von mir persönlich überreicht.
                            Bis dahin und ich liebe dich, <br/>
                            dein Juli
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            
        </React.Fragment>
    )
}