import React,{createRef} from 'react';
import {MDBPopover} from 'mdbreact'

import Header from './Header'
import Sidebar from './Sidebar'

import photo from '../public/images/opened-laptop-on-table-1128240.jpg'
const Account = ()=>{

    const overlayRef = createRef()

    const onMouseEnter=(e)=>{
        overlayRef.current.style.display = "inline"
        
        
    }
    const onMouseLeave = (e)=>{
        overlayRef.current.style.display = "none"
    }

    const onClick = (e)=>{

    }

    return(
        <div className = "account">
            <Header/>
           
            <div className="body">
                <div onMouseEnter= {onMouseEnter} onMouseLeave = {onMouseLeave} className = "account-image">
                    <img src={photo} alt=""/> 
                    <div ref= {overlayRef} onClick = {onClick} className = "img-overlay">
                        <span>
                            Click here to 
                            <br/>
                            change Profile photo
                        </span>
                    </div>
                </div>
                
                
            </div>

        </div>
    )
}

export default Account