import React,{useState} from 'react';
import { MDBInput } from 'mdbreact';
import NumberFormat from 'react-number-format';
import FadeLoader from "react-spinners/FadeLoader"
import { css } from "@emotion/core";
// import notify from "../utils/toast"


const override = css`
        display:block;
        margin:0 auto;
        margin-top:50px;
        
    `;

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

                        {!props?.loading ?
                            <> 
                                <NumberFormat
                                        customInput={MDBInput}
                                        onChange={(e)=> setAmount(e.target.value)}
                                        value= {amount}
                                        thousandSeparator={true}
                                        prefix={"₦"}
                                    />
                                
                                <button 
                                    className="paystack-button"
                                    onClick={()=> {
                                        props?.fundWallet(amount.replace("₦","").split(",").join(''))
                                        setAmount("")
                                        }}
                                    >
                                        Fund
                                </button>
                            </>
                        : <FadeLoader size={10} css={override} margin={2} color={"#884d7e"} />

                        }
                    </div>
            </div>
           
    )

}