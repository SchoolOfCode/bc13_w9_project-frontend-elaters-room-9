import React from 'react';
import './greeting.css';



const Greeting = (props) =>{
    return(
        <div className='greeting'>Hello {props.name}
        </div> 
    )
}
export default Greeting;