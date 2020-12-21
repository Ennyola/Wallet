import React,{useState} from 'react';
import { PaystackButton } from 'react-paystack'
import { MDBInput } from 'mdbreact';

export const PaystackForm = (props)=>{
    let  [amount, setAmount] = useState("")
    const exitForm = (e)=>{
        const  paystackForm= document.querySelector(".fundwallet-form")
        paystackForm.classList.add("close")
        setAmount("")
    }
    const closeOnClick = (e)=>{
        const  paystackForm= document.querySelector(".fundwallet-form")
        if (e.target.classList.contains("fundwallet-form")){
            paystackForm.classList.add("close")  
        }
    }
    return(
            <div className = "fundwallet-form overlay close" onClick = {closeOnClick}>
                <div className = "form">
                        <i className="fas fa-times" onClick = {exitForm}></i>
                        <MDBInput 
                        onChange = {e=>{setAmount(e.target.value)}}
                        value = {amount}
                        hint = {"Amount"}
                        type = "number"/>

                        <PaystackButton
                        className = "paystack-button"
                        email = {"medunoyeeni@gmail.com"} 
                        amount = {amount*100}
                        publicKey = {"pk_test_78d9cf26ee96f7b50fddb3f5353344f4e44f9226"} 
                        text = {"Fund"}
                        onSuccess = {()=> {
                            const  paystackForm= document.querySelector(".fundwallet-form")
                            paystackForm.classList.add("close")
                            setAmount("")
                            props.fundWallet(amount)
                            alert("Transaction Succesful")
                        }}
                        onClose = {()=>{
                            const  paystackForm= document.querySelector(".fundwallet-form")
                            paystackForm.classList.add("close")
                            setAmount("")
                            alert("Don't Go")}}
                        />
                    </div>
            </div>
           
    )

}