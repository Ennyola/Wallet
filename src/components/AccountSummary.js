import React from "react";
import NumberFormat from 'react-number-format';
import styled from "styled-components"


const Wrapper = styled.div`
    margin-top: 40px;
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(250px,1fr));
    grid-column-gap:30px;
    justify-items:center;
    padding:10px;

    .summary {
        padding: 20px;
        /* border-radius: 10px; */
        width: 250px;
        height: 150px;
        box-shadow: 0 .2rem .7rem rgba(0, 0, 0, .15);
        margin: 20px;
        font-weight: 400;
        border-radius: 10px;
        transition: .7s all ease;
        span{
            color:green;
        }
        :hover{
            background-color: #A1168A;
            margin-top: 40px;
            color: white;
            span{
                transition: .7s all ease;
                color: white !important;
            }
        }
    }


`



export const AccountSummary =(props)=>{
    return(
        <Wrapper>
            <div className= "summary">
                <p>Previous Balance</p>
                <NumberFormat value={props?.previousBalance?.toFixed(2)||0.00.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix ={"₦"}  />
            </div>
            <div className= "summary">
                <p>Money Funded</p>
                <NumberFormat value={props?.moneyAdded?.toFixed(2)||0.00.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix ={"₦"}  />
        
            </div>
            <div className= "summary"> 
                <p>Money Deducted</p>
                <NumberFormat className = "text-danger" value={props?.moneyRemoved?.toFixed(2)|| 0.00.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix ={"₦"}  />
        
            </div>
            <div className= "summary">
                <p>Total Money Added</p>
                <NumberFormat value={props?.getTotalMoneyAdded()} displayType={'text'} thousandSeparator={true} prefix ={"₦"}  />
            </div>         
        </Wrapper>
    )

}