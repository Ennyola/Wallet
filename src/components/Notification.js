import React from 'react';

import Header from './Header'
import Sidebar from './Sidebar'

const Notfications = ()=>{
    return(
        <div className = "notifications">
            <Header/>
            <Sidebar/>
            <div className = "body">
                <h4 className = "text-center">Notifications</h4>

            </div>

        </div>
    )
}

export default Notfications