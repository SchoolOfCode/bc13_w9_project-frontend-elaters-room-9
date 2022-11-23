import React from 'react';
import './greeting.css'

const Greeting = (props) =>{
    return(
        <header id='greeting'>
        <p>Hello {props.name}</p>
        </header> 
    )
}
export default Greeting;