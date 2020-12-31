import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NumberFormat from 'react-number-format';
import {Wrapper} from "../components/styles"
import notify from "../utils/toast"


import SearchedItems from "../components/SearchedItems"


const Grid = styled.div`
    display:flex;
    justify-content:center;
    margin-top:30px;
    padding:10px;
    /* flex-wrap:wrap; */
    
    
    
    >div:nth-child(1){
            padding:0px 30px;
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
        display:block;
        #item-desc{
        text-transform:uppercase;
        font-weight: 400;
        font-size:18px;
        }
        button{
            display:block;
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
    @media(max-width:550px){
        flex-wrap:wrap;
        #item-desc{
        text-align:center;
        padding:10px 20px;
        }
        button{
            margin:0 auto;
        }
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
    @media(max-width:550px){
        text-align:center;
    }

`


const Input = styled.input`
    display:block;
    
    min-width:200px;
    margin-top:20px;
    margin-bottom:20px;
    padding:8px;
    @media(max-width:550px){
        margin:0 auto;
        margin-top:20px;
        margin-bottom:20px;

    }

`


const ItemPage = (props)=>{
    const [random] = useState(Math.floor(Math.random()*30+1))
    const [result, setResult] = useState({})
    const [quantity, setQuantity] = useState("")
    const [price] = useState(props.match.params.id.split("&")[1])
    const [id] = useState(props.match.params.id.split("&")[0])
    const [priceAfterPercentage] = useState(price-(price*(random/100)))
   
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
    document.title = "Item"
    const getValueAfterPercentage = (value)=>{
        return(
            <div>
                <NumberFormat value={Math.floor(priceAfterPercentage)} displayType={'text'} thousandSeparator={true} prefix={'₦'}  /> <br/> 
                <NumberFormat value={value} displayType={'text'} thousandSeparator={true} prefix={'₦'}  /> 
                <span>-{random}%</span>
            </div> 
        )
    }
    

   

    useEffect(()=>{
        const getItem = async ()=>{
            const data = await (await fetch(`https://api.unsplash.com/photos/${id}?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`)).json()
            setResult(data)
        }
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

export default ItemPage