import '../public/css/auth.css'
import React, {useState} from 'react'
import { MDBInput } from "mdbreact";
import {Link} from 'react-router-dom'

import { useMutation, useQuery, gql} from '@apollo/client'
import getUserQuery from '../queries/getUser'


const Login = (props) => {


    let [email, SetEmail] = useState(""),
        [password, SetPassword] = useState("")


    const {data, error, refetch} = useQuery(getUserQuery)
    if(data){
        const{user} = data
        if(user){
            props.history.push('/dashboard')
        }
    }
    if (error){

    }
    const [loginUser, {data:mutationData, loading :mutationLoading, error:mutationError}] = useMutation(mutation)

    if(mutationLoading){
        return( <div>Loading...</div> )
    }
    if(mutationData){
        const {token} = mutationData.tokenAuth
        localStorage.setItem('token', token)
        refetch()
    }
    
    
    
    const onSubmit =(e)=>{
        e.preventDefault()
        loginUser({
            variables:{email,password},
           
        })
    } 



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
                        <form onSubmit= {onSubmit} className = "form">
                            <h5> Ready to Save? Login</h5>

                            <MDBInput 
                            onChange = {e=>{SetEmail(e.target.value)}}
                            value = {email}
                            className = "form-control"
                            type = "email" 
                            hint = "Email" />

                            <MDBInput  
                            onChange = {e=>{SetPassword(e.target.value)}}
                            value = {password}
                            className = "form-control" 
                            type = "password" 
                            hint = "Password" />
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

const mutation = gql`
mutation LogUser($email : String!, $password: String! ){
    tokenAuth(username:$email, password:$password){
      token
    }
  }
  
`

export default Login