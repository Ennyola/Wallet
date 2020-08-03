import React, { useState} from 'react'
import {MDBInput,MDBBtn} from 'mdbreact'
import {Link} from 'react-router-dom'
import {gql, useMutation, useQuery} from '@apollo/client'

import wallet from  '../public/images/crop-man-getting-dollars-from-wallet-4386433.jpg'
import '../public/css/auth.css'
const Signup =()=>{
        let [firstName, SetFirstName] = useState(""),
            [lastName, SetLastName] = useState(""),
            [email, SetEmail] = useState(""),
            [password, SetPassword] = useState(""),
            [verifyPassword, SetVerifyPassword] = useState("")

 



        const [registerUser, {data, error, loading}] = useMutation(mutation)
        if(loading){
            console.log("it is loading")
            console.log(data)
        }
        if(data){
            console.log(data)
            const {token} = data.createUser.tokenAuth
            localStorage.setItem('token', token)
        }
        if(error){
            console.log(error)
        }  

        

        const onSubmit =(e)=>{
            e.preventDefault()
            registerUser({
                variables:{firstName, lastName, email,password}
            })
        }

    

            
        
        return(
            <div className = "signup">
                <div className="row">
                    <div className="col-md-5">
                    <h1 className = "logo"> ENNET </h1>
                        <form onSubmit = {onSubmit}>
                            <h4>Ready to save? <span id = "signup-text"> Signup </span></h4>

                            <MDBInput 
                            onChange =  {e => SetFirstName(e.target.value)}
                            value = {firstName}
                            type= "text"
                            label = "First Name" />

                            <MDBInput 
                            onChange =  {e => SetLastName(e.target.value)}
                            value = {lastName}
                            type = "text"
                            label = "Last Name" />


                            <MDBInput
                            onChange =  {e => SetEmail(e.target.value)}
                            value = {email} 
                            type = "email" 
                            label = "Email"/>

                            <MDBInput
                            onChange =  {e => SetPassword(e.target.value)}
                            value = {password}
                            type = "password"
                            label = "Password"/>

                            <MDBInput 
                            onChange =  {e => SetVerifyPassword(e.target.value)}
                            value = {verifyPassword}
                            type = "password" 
                            label = "Verify password"/>
                            <button className = " btn btn-outline-primary"  type = "submit"> Signup →</button>
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



const mutation = gql`
mutation RegisterUser($email:String!, $firstName: String!, $lastName:String!, $password:String!){
    createUser(email:$email, firstName:$firstName, lastName: $lastName, password:$password ){
      tokenAuth(username:$email, password:$password){
        token
      }
      user{
        id
        email
        firstName
        lastName
      }
    }
  }
  `

export default Signup