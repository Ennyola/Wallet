import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NumberFormat from 'react-number-format';
import {Wrapper} from "../components/styles"
import notify from "../utils/toast"


import SearchedItems from "../components/SearchedItems"


const Grid = styled.div`
    position:relative;
    left:18%;
    margin-top:30px;
    display:grid;
    padding:30px;
    grid-template-columns: repeat(2, minmax(300px,150px));
    grid-template-rows:repeat(1, 1fr);
    >div:nth-child(1){
            img{
            width:200px;
            height:200px;
            object-fit:cover;
            border-radius: 5px;   
        }
        p{
            margin-top:20px;
            font-weight:400;
        }
        i{
            font-weight:900;
            padding-right:5px;
        }
    }

    >div:nth-child(2){
        #item-desc{
        text-transform:uppercase;
        font-weight: 400;
        font-size:19px;
        }
        button{
            min-width:200px;
            height:40px;
            border-radius:20px;
            background-color: #A1168A;
            color:white;
            border:1px solid transparent;  
            transition:0.3s all ease-in;
        }
        button:hover{
            background-color: white;
            color: #A1168A;
            border:1px solid #A1168A;

        }
    }
    @media(max-width:780px){
        /* grid-template-columns: repeat(1, minmax(300px,150px));
        justify-items:center */
    }
    
    

`
const Price = styled.div`
    span:nth-child(1){
        font-weight:bold;
        font-size:24px;
    }
     span:nth-child(3){
        color:rgba(0,0,0,0.5);
        text-decoration:line-through;
        font-size:18px;

    }
    span:nth-child(4){
        margin:0px 10px;
        color:#f68b1e;
        background-color:#fcefe9;
        font-weight:400;
        padding:3px;
        border-radius:3px;
        
    }
`


const Input = styled.input`
    min-width:200px;
    margin:20px 0px;
    padding:8px;

`


export default (props)=>{
    const [random] = useState(Math.floor(Math.random()*30+1))
    const [result, setResult] = useState({})
    const [quantity, setQuantity] = useState("")
    const [price] = useState(props.match.params.id.split("&")[1])
    const [priceAfterPercentage] = useState(price-(price*(random/100)))
    const getItem = async ()=>{
        const id = props.match.params.id.split("&")[0]
        const data = await (await fetch(`https://api.unsplash.com/photos/${id}?client_id=oAZ8DyQ4FRcZKSz3083vOLdX7yCv3uEJhGTigrC5wi0`)).json()
        setResult(data)
    }
    const addToCart=()=>{
        if(!quantity){
            notify("Please select a Quantity", "error")
            return
        }
        const items = localStorage?.ennet_cart ? JSON.parse(localStorage?.ennet_cart) :[]
        console.log(items)
        const index = items.findIndex((item)=> item.id === result.id)
        index === -1 ? items.push({...result, price:priceAfterPercentage,quantity}): (items[index] = {...result, price:priceAfterPercentage, quantity})
        localStorage.setItem("ennet_cart", JSON.stringify(items))
        props.history.push("/cart")
        window.location.reload()
    }

    const getValueAfterPercentage = (value)=>{
        // console.log(props.match.params.id.split("&")[1])
        // const priceMinusPercentage = value-(value*(random/100))
        // console.log(priceAfterPercentage)
        return(
            <div>
                <NumberFormat value={Math.floor(priceAfterPercentage)} displayType={'text'} thousandSeparator={true} prefix={'₦'}  /> <br/> 
                <NumberFormat value={value} displayType={'text'} thousandSeparator={true} prefix={'₦'}  /> 
                <span>-{random}%</span>
            </div> 
        )
    }
    

   

    useEffect(()=>{
     getItem()
    },[])

    

    return(
        <Wrapper>
            <Grid>
                <div>
                    <img src={result?.urls?.small} alt={result?.alt_description}/>
                    <p><i><NumberFormat value={result?.downloads} displayType={'text'} thousandSeparator={true}  /></i> People bought this</p>
                </div>

                <div>
                    <p id = "item-desc">{result?.alt_description}</p>
                    <Price>
                        {getValueAfterPercentage(parseInt(price))}
                    </Price>

                    <Input placeholder= {"Select Quantity"} type={"Number"} value = {quantity} onChange={(e)=> setQuantity(e.target.value)}/>
                    <button onClick = {addToCart}>ADD TO CART</button>
                </div>
            </Grid>
            <SearchedItems tags = {result?.tags}/>
        </Wrapper>
    )


}