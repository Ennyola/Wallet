import '../public/css/auth.css'
import React from 'react'

import logo from '../public/images/ENNET.png'
import { MDBInput } from "mdbreact";


const login = () => {
    return(
        <div className = "login">
            <img src={logo} alt="logo"/>

            <div>
                <form className = "form">
                    <h3> Login</h3>
                    <MDBInput  className = "form-control" type = "email" hint = "username" />
                    <MDBInput  className = "form-control" type = "password" hint = "password" />
                    <button className = "btn btn-primary"> Login</button>

                </form>
            </div>
            
            
        </div>
    )
}

export default login