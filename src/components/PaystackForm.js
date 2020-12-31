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
                        publicKey = {process.env.REACT_APP_PAYSTACK_PUBLIC_KEY} 
                        text = {"Fund"}
                        onSuccess = {()=> {
                            const  paystackForm= document.querySelector(".fundwallet-form")
                            paystackForm.classList.add("close")
                            setAmount("")
                            props.fundWallet(amount)
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