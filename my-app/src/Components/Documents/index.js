//This function  is currently only returning holding text,
//but will be completed to show bootcamper Documents, when the section has been finalised.
import './documents.css';
import React from 'react';
import  { GiHourglass } from 'react-icons/gi';


const Documents = () => {
    return (
        <><div className='Navbar'>Your Documents</div>
        <div className='holdingText'>
            <p>Coming Soon  <GiHourglass className='icon'/></p>
        </div></>
    )
}
export default Documents;