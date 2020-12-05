import React, { useState, useEffect } from 'react'
import  { Button } from 'react-bootstrap'

export default function Messenger(props) {

    const chats = (
        <Button>
            Test
        </Button>
    )

    return(
        <React.Fragment>
           {chats}
        </React.Fragment>
    )

}