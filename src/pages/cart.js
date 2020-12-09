import React, {useState, useEffect} from "react"
import styled from "styled-components"

const Wrapper = styled.div`
 padding-top: 97px;
    padding-left: 180px;
    overflow: hidden;
    .cart-body{
        padding:10px 50px;
    }
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
    left:4
    0px;
    .item-cell{
        display:flex;
        img{
            object-fit:cover;
            height:60px;
            width:70px;
        }
        #desc{
            padding:20px;
            word-wrap:break-word;
            font-weight:600;
            width:100%;
        }
    }
    tbody{
        tr{
            background-color:#eee;
            border-bottom:20px solid white;
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
const SearchedItems = styled.div`
    h4{
        font-weight:400;
    }

`

export default ()=>{
    const [items, setItems] =useState([])
    const getItemforStorage = async ()=>{
        setItems(await JSON.parse(localStorage.getItem("ennet_cart")))
        
    }
    const getSearchesData = async ()=>{
       const random =  Math.floor(Math.random() * 20)+1
       await (await fetch(`https://api.unsplash.com/search/photos/?query=shoes&client_id=oAZ8DyQ4FRcZKSz3083vOLdX7yCv3uEJhGTigrC5wi0&page=${random}&per_page=10`)).json()
        
    }
    useEffect(()=>{
        getItemforStorage()
    }, [])

    document.title = "Cart"

    const deleteItem = (id)=>{
        const index = items.findIndex(element=> element.id === id);
        items.splice(index, 1)
        localStorage.setItem('ennet_cart', JSON.stringify(items))
        window.location.reload()
     }
     console.log(items)
    return(
        <Wrapper>

            <TopText>
                Cart
            </TopText>
            <div className = "cart-body">
                <Table>
                    <thead>
                        <tr>
                            <th> <span id = "item-header">Item</span> </th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Subtotal</th>
                        </tr>
					</thead>
                    <tbody>
                        {items?.map(({id, urls,alt_description, price, qty, downloads})=>(
                            <tr key = {id}>
                                <td className = "item-cell">
                                    <img src={urls.small} alt={alt_description}/>
                                    <div id = "desc">
                                        {alt_description} <br/>
                                        <span>{downloads} bought this item</span>
                                        <Delete onClick = {()=>{deleteItem(id)}} ><i class="far fa-trash-alt"></i>Delete</Delete>
                                    </div>
                                </td>
                                <td>{qty}</td>
                                <td>{price}</td>
                                <td>{qty * price}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <SearchedItems>
                    <h4>People Also Searched For</h4>
                    <div>
                        {}
                    </div>
                </SearchedItems>
            </div>
            
        </Wrapper>
    )           

}