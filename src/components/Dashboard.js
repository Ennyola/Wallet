import React, {Component } from 'react'

import Header from './Header'
import SideBar from './Sidebar'

class Dashboard extends Component{
    render(){
        return(
            <div className = "dashboard">
                <Header/>
                <div className="row">
                    <div className="col-md-4">
                        <SideBar/>
                    </div>
                    <div className="col-md-8">
                        <div className = "shadow">
                            Money Spent
                        </div>
                    </div>
                </div>
                
             

            </div>
        )
    }
}
export default Dashboard