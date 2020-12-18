import React from "react";
import NumberFormat from 'react-number-format';


export const AccountSummary =(props)=>{
    return(
        <div className = "account-summary">
            <div className= "summary">
                <p>Previous Balance</p>
                <NumberFormat value={props?.previousBalance?.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix ={"₦"}  />
            </div>
            <div className= "summary">
                <p>Money Funded</p>
                <NumberFormat value={props?.moneyAdded?.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix ={"₦"}  />
        
            </div>
            <div className= "summary"> 
                <p>Money Deducted</p>
                <NumberFormat className = "text-danger" value={props?.moneyRemoved?.toFixed(2)} displayType={'text'} thousandSeparator={true} prefix ={"₦"}  />
        
            </div>
            <div className= "summary">
                <p>Total Money Added</p>
                <NumberFormat value={props?.getTotalMoneyAdded()} displayType={'text'} thousandSeparator={true} prefix ={"₦"}  />
            </div>         
        </div>
    )

}