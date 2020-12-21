import React, {useState, useEffect, useContext} from "react"
import styled from "styled-components"
import NumberFormat from 'react-number-format';
import {useMutation} from "@apollo/client"

import {PAY_AMOUNT} from "../mutations/MakeTransaction"
import {FundsContext} from "../context/funds"
import notify from "../utils/toast"
import {Wrapper} from "../components/styles"

const CartBody = styled.div`
        padding:10px 50px;   
`

const TopText = styled.div`
	color:  #A1168A;
	font-size: 2.6rem;
	text-align:center;
	padding:20px;
	font-style:italic;
`;
const Table = styled.table`
    position: relative;
    left:40px;
    overflow:auto;
    .item-cell{
        display:flex;
        img{
            object-fit:cover;
            height:60px;
            width:70px;
        }
        div{

        }
        #desc{
            padding:0px 22px;
            margin-top:9px;
            width:100%;
            p{ 
                font-weight:400;
                font-size:16px;
                text-transform:capitalize;
            }
        }
    }
    tbody{
        tr{
            background-color:#eee;
            border-bottom:20px solid white;
        }
        tr:last-child{
            background-color:#fff;
            border-bottom:0px solid white;
        }
        td{
            border:3px solid white;
            padding:40px;
        }
    }
`
const Delete = styled.div`
    color:red;
    font-weight:normal;
    display:flex;
    justify-content:flex-end;
    position:relative;
    top:20px;
    cursor:pointer;
    i{
        padding:2px 5px;
    }
`
const Modal = styled.div`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 120%;
    z-index: +3;
    >div{
        background-color:#fff;
        border-radius:10px;
        padding:100px 10px;
        position:absolute;
        left:40%;
        top:20%;
        width:350px;
        text-align:center;
        div:nth-of-type(1){
            font-weight:400;

            span{
                color:green;
            }
            
        }
        div:nth-of-type(2){
            margin-top:20px;
            font-weight:400;

            span{
                color:red;
            }
            
        }
        
        i{
            color:red;
            cursor:pointer;
            padding:0px 10px;
            position:absolute;
            top:20px;
            right:20px;
        }
        

        button{
            margin-top:30px;
            border:2px solid #A1168A;
            background-color:#fff;
            border-radius:20px;
            padding:2px 40px;

        }
    }
`

const Checkout = styled.td`
    position:relative;
    left:20px;
    padding:0px 10px !important;
    p{
        font-weight:bold;
        color:green;
    }
    button{
        background-color:#fff;
        color: #A1168A;
        border-radius:15px;
        padding:5px 20px;
        border:2px solid #A1168A;
        outline:none;
        position:relative;
        right:5px;
    }

`

const NoItem = styled.div`
    text-align:center;
    margin-top:30px;
    font-weight:400;
    font-size:20px;

`

export default (props)=>{
    document.title = "Cart"
    const {currentBalance} = useContext(FundsContext)
    const [items, setItems] =useState([])
    const [total, setTotal] = React.useState();
    const getItemforStorage = async ()=>{
        let cart = new Array
        cart = await JSON.parse(localStorage.getItem("ennet_cart"))
        setItems(cart)
        setTotal(()=> 
            cart?.reduce((acc, item)=> acc + Number(item?.price*item?.quantity),0)
        )
    
    }

    const [pay, {data}] = useMutation(PAY_AMOUNT)

    if(data){
        localStorage.removeItem("ennet_cart");
        props.history.push("/dashboard") 
    }
   
    useEffect(()=>{
        getItemforStorage()

    }, [])

   

    const deleteItem = (id)=>{
        const index = items.findIndex(element=> element.id === id);
        items.splice(index, 1)
        localStorage.setItem('ennet_cart', JSON.stringify(items))
        window.location.reload()
     }
     const toggleModal = ()=>{
         const modal = document.querySelector(".checkout-modal")
         modal.classList.toggle('close')
     }
     const closeModal = (e)=>{
        const modal = document.querySelector(".checkout-modal")
        if(e.target.classList.contains("checkout-modal")){
            modal.classList.toggle('close')
        }
     }

     const getDate=() =>{
        const dateObj = new Date()
        const date = dateObj.toLocaleDateString()
        const time = dateObj.toTimeString()
        const dateAndTime = `${date},${time}`
        console.log(dateAndTime)
        return dateAndTime
    }
    return(
        <>
            <Modal onClick = {closeModal} className = "checkout-modal close">
                <div>
                    <i onClick = {toggleModal} className="fas fa-times"></i>
                    <div>Current Balance : <NumberFormat value={currentBalance} displayType={'text'} thousandSeparator={true} prefix ={"₦"}  /></div>
                    <div>Amount to be paid : <NumberFormat value={total} displayType={'text'} thousandSeparator={true} prefix ={"₦"}  /></div>
                    <button
                    onClick ={()=>{
                        if(total>currentBalance){
                            const modal = document.querySelector(".checkout-modal")
                            notify("Insufficent Funds. Please Fund Wallet or Delete Items From Cart","error")
                            modal.classList.toggle('close')
                            return

                        }
                        pay({
                        variables:{amount:total, timeOfTransaction:getDate()}
                         })
                    }}
                    >Pay</button> 
                </div> 
            </Modal>

            <Wrapper>
                <TopText>
                    Cart
                </TopText>
                {items && items?.length!==0 ? (
                    <CartBody> 
                        <Table>
                            <thead>
                                <tr>
                                    <th> <span id = "item-header">Item</span> </th>
                                    <th className ="text-center">Quantity</th>
                                    <th className ="text-center">Price</th>
                                    <th className ="text-center">Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items?.map(({id, urls,alt_description, price, quantity})=>(
                                    <tr key = {id}>
                                        <td className = "item-cell">
                                            <img src={urls.small} alt={alt_description}/>
                                            <div id = "desc">
                                                <p>{alt_description} </p>
                                                <Delete onClick = {()=>{deleteItem(id)}} ><i className="far fa-trash-alt"></i>Delete</Delete>
                                            </div>
                                        </td>
                                        
                                        <td><NumberFormat value={quantity} displayType={'text'} thousandSeparator={true}  /></td>
                                        <td><NumberFormat value={price} displayType={'text'} thousandSeparator={true} prefix ={"₦"} /></td>
                                        <td><NumberFormat value={Number(quantity) * price} displayType={'text'} thousandSeparator={true} prefix ={"₦"}  /></td>
                                    </tr>
                                ))}
                            
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <Checkout>
                                        <p><NumberFormat value={total} displayType={'text'} thousandSeparator={true} prefix ={"₦"}  /></p>
                                        <button onClick={toggleModal}>Checkout</button>
                                    </Checkout>
                                   
                                </tr>
                            </tbody>     
                        </Table>
                        
                        
                    </CartBody>
                    ):(
                        <NoItem>
                            No items to Display
                        </NoItem>
                    ) 
                    }
                
                
            </Wrapper>
        </>
    )           

}