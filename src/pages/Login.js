import '../public/css/auth.css'
import React, {useState, useContext} from 'react'
import { MDBInput } from "mdbreact";
import {Link} from 'react-router-dom'
import { css } from "@emotion/core";
import HashLoader from "react-spinners/HashLoader";

import {AuthContext} from "../context/Auth"
import { useMutation, gql} from '@apollo/client'


const Login = (props) => {
    document.title = "Login"
    const {user,refetch} = useContext(AuthContext)

    let [email, SetEmail] = useState(""),
        [password, SetPassword] = useState(""),
        [errors, setErrors] = useState([])

    if(user){
        props.history.push('/dashboard')
        // const token = localStorage.token
        // const link = `http://localhost:3000/verify/${token}`
        // console.log(link)
    }
    const [loginUser, {data:mutationData, loading}] = useMutation(mutation)

    if(mutationData){
        const {token} = mutationData.tokenAuth
        localStorage.setItem('token', token)
        refetch()
    }
    
    
    
    const onSubmit =(e)=>{
        e.preventDefault()
        loginUser({
            variables:{email,password},  
        }).catch((e)=>{
            setErrors([e.message])
        })
    
    } 

    const override = css`
        position:absolute;
        top: 40%;
        left:40%;

        
    `;

    return(
        <div className = "login">
            {
                loading &&
                <div className = "overlay">
                    <HashLoader
                        css = {override}
                        size={80}
                        color={"#884d7e"}
                    />
                </div>
            }
            

            <div className="row">
                <div className="col-md-6">
                    <h1> <Link to ="/" className = "logo">ENNET</Link> </h1>
                    <h1  className = "animate__animated animate__fadeInDownBig welcome-text"> Welcome to ENNET.</h1>
                </div>
                <div className="col-md-6">
                <h1 ><Link to ="/" className = "logo"> ENNET </Link></h1>
                    <div>
                        <form onSubmit= {onSubmit} className = "form">
                            <h4> Ready to Save? <span> Login </span> </h4> 
                                
                            <MDBInput 
                            onChange = {e=>{SetEmail(e.target.value)}}
                            value = {email}
                            className = "form-control"
                            type = "email" 
                            label = "Email" />

                            <MDBInput  
                            onChange = {e=>{SetPassword(e.target.value)}}
                            value = {password}
                            className = "form-control" 
                            type = "password" 
                            label = "Password" />

                            <div className = "auth-error">
                                { errors?.map((error)=>{
                                return <div key = {error}> {error} </div> 
                                }) }
                            </div>
                            <span className = "submit-span">
                                <button className = "login-btn"> Login</button>
                            </span>
                        </form>
                        
                       <div className = "to-signup"> 
                            Don't have an account with us yet? Register <Link to = "/signup" className="here"> here </Link>
                       </div>
                    </div>
                </div>
            </div>       
        </div>
    )
}

const mutation = gql`
mutation LogUser($email : String!, $password: String! ){
    tokenAuth(username:$email, password:$password){
      token
    }
  }
  
`

export default Login