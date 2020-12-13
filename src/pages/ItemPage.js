import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import NumberFormat from 'react-number-format';


const Wrapper = styled.div`
    padding-top: 97px;
    padding-left: 180px;
    overflow: hidden;
`

const Grid = styled.div`
    padding:30px 60px;
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    img{
        width:200px;
        height:180px;
        object-fit:cover;
    }
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

`
const Price = styled.div`

`


export default (props)=>{

    const [price] = useState(props.match.params.id.split("&")[1])
    const [result, setResult] = useState({})
     
    const getItem = async ()=>{
        const id = props.match.params.id.split("&")[0]
        const data = await (await fetch(`https://api.unsplash.com/photos/${id}?client_id=oAZ8DyQ4FRcZKSz3083vOLdX7yCv3uEJhGTigrC5wi0`)).json()
        setResult(data)
    }
    useEffect(()=>{
        getItem()
       
    },[])

    const addToCart=()=>{
        const items = localStorage?.ennet_cart ? JSON.parse(localStorage?.ennet_cart) :[]
        console.log(items)
        const index = items.findIndex((item)=> item.id === result.id)
        index === -1 ? items.push({...result, price}): (items[index] = {...result, price})
        localStorage.setItem("ennet_cart", JSON.stringify(items))   
    }

    return(
        <Wrapper>
           <Grid>
               <img src={result?.urls?.small} alt={result?.alt_description}/>
               <div>
                    <p id = "item-desc">{result?.alt_description}</p>
                    <Price>
                    <NumberFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'₦'}  /> <br/>
                    <NumberFormat value={parseInt(price)+2000} displayType={'text'} thousandSeparator={true} prefix={'₦'}  />
                    </Price>
                    <button onClick = {addToCart}>ADD TO CART</button>
               </div>
               

           </Grid>
        </Wrapper>
    )


}