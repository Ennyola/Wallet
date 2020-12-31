import React, { useState, useContext} from 'react'
import {MDBInput} from 'mdbreact'
import {Link} from 'react-router-dom'
import {gql, useMutation} from '@apollo/client'

import * as EmailValidator from 'email-validator';
import { css } from "@emotion/core";
import PropagateLoader from "react-spinners/PropagateLoader";

import {AuthContext} from "../context/Auth"
import '../public/css/auth.css'



const Signup =(props)=>{
        document.title = "SIGN-UP"
        const {user,refetch} = useContext(AuthContext)

        let [alias, SetAlias] = useState(""),
            [email, SetEmail] = useState(""),
            [password, SetPassword] = useState(""),
            [verifyPassword, SetVerifyPassword] = useState(""),
            [errors, setErrors] = useState([])

            if(user){
                props.history.push('/dashboard')
            }
        
        const [registerUser, {data, loading}] = useMutation(mutation)
        if(data){
            const {token} = data.createUser.tokenAuth
            localStorage.setItem('token', token)
            refetch()     
        }
        
            
       

        const onSubmit =(e)=>{
            e.preventDefault()
            if(password !== verifyPassword){
                setErrors(["Passwords Do Not Match"])
                return
            }
            if(!EmailValidator.validate(email)){
                setErrors(["Please Use a Valid Email Address"])
                return
            }
            registerUser({
                variables:{alias,email,password},
               
            }).catch((error)=>{
                setErrors([error.message])
            })
        } 
        
        const override = css`
            position:absolute;
            top: 40%;
            left:40%;  
        `;
        
        return(
            <div className = "signup">
                {
                loading &&
                    <div className = "overlay">
                        <PropagateLoader
                            css = {override}
                            className = "overlay"
                            size={20}
                            color={"#884d7e"}
                        />
                    </div>
                }

                <div className="row">
                    <div className="col-md-5">
                     <h1 > <Link to ="/" className = "logo"> ENNET </Link> </h1>
                        <form onSubmit = {onSubmit}>
                            <h4>Ready to save? <span id = "signup-text"> Signup </span></h4>

                            <MDBInput 
                            onChange =  {e => SetAlias(e.target.value)}
                            value = {alias}
                            type= "text"
                            label = "Alias" />


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

                            <div className = "auth-error">
                                { errors?.map((error)=>{
                                return <div key = {error}> {error} </div> 
                                }) }
                            </div>

                            <span className = "submit-span">
                                <button className = " btn btn-outline-primary"  type = "submit"> Signup →</button>
                            </span>                        
                        </form>
                        

                        <div>
                            Already have an account with us, Login <Link to= "/login" className="here">here</Link> 
                        </div>

                    </div>
                    <div className="col-md-7">
                        <div className = "animate__animated animate__fadeInTopRight welcome-text">
                        
                           <h1> Welcome to ENNET.</h1>
                        </div>
                        
                    </div>
                
                    
                </div>
            </div>
        )
    }



const mutation = gql`
mutation RegisterUser($email:String!, $alias:String!, $password:String!){
    createUser(email:$email, alias:$alias, password:$password ){
      tokenAuth(username:$email, password:$password){
        token
      }
      user{
        id
        email
        username
      }
    }
  }
  `

export default Signup