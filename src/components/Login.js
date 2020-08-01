import '../public/css/auth.css'
import React from 'react'
import { MDBInput } from "mdbreact";
import {Link} from 'react-router-dom'



const login = () => {
    return(
        <div className = "login">
            <div className="row">
                <div className="col-md-6">
                <h1 className = "logo"> ENNET </h1>
                    <div className = "welcome-text">
                        <h1> Welcome to ENNET.</h1>
                     </div>
                </div>
                <div className="col-md-6">
                    <div>
                        <form className = "form">
                            <h5> Ready to Save? Login</h5>
                            <MDBInput  className = "form-control" type = "email" hint = "Email" />
                            <MDBInput  className = "form-control" type = "password" hint = "Password" />
                            <button className = "btn btn-primary"> Login</button>

                        </form>
                       <div> 
                            Don't have an account with us yet? Register <Link to = "/signup"> here </Link>
                       </div>
                    </div>
                </div>
            </div>

            
            
            
        </div>
    )
}

export default login