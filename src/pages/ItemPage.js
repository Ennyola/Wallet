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
    position:relative;
    left:10%;
    margin-top:30px;
    display:grid;
    grid-template-columns: repeat(2, minmax(300px,150px));
    grid-template-rows:repeat(1, 1fr);
    >div:nth-child(1){
            img{
            width:200px;
            height:200px;
            object-fit:cover;
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
    
    

`
const Price = styled.div`
    p:first-child{
        font-weight:bold;
        font-size:24px;
    }
    p:last-child span:first-child{
        color:rgba(0,0,0,0.5);
        text-decoration:line-through;
        font-size:18px;

    }
    p:last-child span:last-child{
        margin:0px 10px;
        color:#f68b1e;
        background-color:#fcefe9;
        font-weight:400;
        padding:3px;
        border-radius:3px;
        
    }
`
const SearchedItems = styled.div`
    margin-top:90px;
    

`

const Input = styled.input`
    min-width:200px;
    margin:20px 0px;
    padding:8px;

`


export default (props)=>{

    const [price] = useState(props.match.params.id.split("&")[1])
    const [result, setResult] = useState({})
    const [searchesData, setSearchesData] = useState({})
    const [quantity, setQuantity] = useState("")
     
    const getItem = async ()=>{
        const id = props.match.params.id.split("&")[0]
        const data = await (await fetch(`https://api.unsplash.com/photos/${id}?client_id=oAZ8DyQ4FRcZKSz3083vOLdX7yCv3uEJhGTigrC5wi0`)).json()
        setResult(data)
    }

     const getSearchesData = async ()=>{
       const random =  Math.floor(Math.random() * 20)+1
       const data = await (await fetch(`https://api.unsplash.com/search/photos/?query=shoes&client_id=oAZ8DyQ4FRcZKSz3083vOLdX7yCv3uEJhGTigrC5wi0&page=${random}&per_page=10`)).json()
       setSearchesData(data?.results)
        
    }
    useEffect(()=>{
        getItem()
        
    },[])
    useEffect(()=>{
        getSearchesData()
        
    },[])

    // console.log(result)
    console.log(searchesData)

    const addToCart=()=>{
        const items = localStorage?.ennet_cart ? JSON.parse(localStorage?.ennet_cart) :[]
        console.log(items)
        const index = items.findIndex((item)=> item.id === result.id)
        index === -1 ? items.push({...result, price,quantity}): (items[index] = {...result, price, quantity})
        localStorage.setItem("ennet_cart", JSON.stringify(items))   
    }

    const getValueAfterPercentage = (value)=>{
        const random = Math.floor(Math.random()*30+1)
        const priceMinusPercentage = value-(value*(random/100))
    return([<p><NumberFormat value={Math.floor(priceMinusPercentage)} displayType={'text'} thousandSeparator={true} prefix={'₦'}  /> </p>,
            <p><NumberFormat value={value} displayType={'text'} thousandSeparator={true} prefix={'₦'}  /> <span>-{random}%</span></p> ]
        )
    }
    

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
                    <Input placeholder= {"Select Quantity"} type={"Number"} value = {quantity} onChange={(e)=> setQuantity(Number(e.target.value))}/>
                    <button onClick = {addToCart}>ADD TO CART</button>
                </div>
            </Grid>
            <SearchedItems>
                    <h4>People Also Searched For</h4>
                    <div>
                        {}
                    </div>
            </SearchedItems>
        </Wrapper>
    )


}