import React, {Component} from 'react'
import {MDBInput,MDBBtn} from 'mdbreact'
import {Link} from 'react-router-dom'

import wallet from  '../public/images/crop-man-getting-dollars-from-wallet-4386433.jpg'
import '../public/css/auth.css'
class Signup extends Component{
 color
    render(){
        
        return(
            <div className = "signup">
                <div className="row">
                    <div className="col-md-5">
                    <h1 className = "logo"> ENNET </h1>
                        <form >
                            <h4>Ready to save? <span id = "signup-text"> Signup </span></h4>
                            <MDBInput type= "text" label = "First Name" />
                            <MDBInput type = "text" label = "Last Name" />
                            <MDBInput type = "email" label = "Email"/>
                            <MDBInput type = "password" label = "Password"/>
                            <MDBInput type = "password" label = "Verify password"/>
                            <MDBBtn outline> Signup →</MDBBtn>
                        </form>
                        <div>
                            Already have an account with us, Login <Link to= "/login">here</Link> 
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className = "welcome-text">
                        
                           <h1> Welcome to ENNET.</h1>
                        </div>
                        
                    </div>
                
                    
                </div>
            </div>
        )
    }

}

export default Signup