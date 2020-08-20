import React from 'react';

import Header from './Header'
import Sidebar from './Sidebar'

import photo from '../public/images/opened-laptop-on-table-1128240.jpg'
const Account = ()=>{

    return(
        <div className = "account">
            <Header/>
           
            <div className="body">
                <div className = "account-image">
                    <img src={photo} alt=""/>
                </div>
                <div>
                    Email
                </div>
                
            </div>

        </div>
    )
}

export default Account