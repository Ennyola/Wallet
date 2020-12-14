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
const Modal = styled.div`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 120%;
    z-index: +3;
    >div{
        background-color:#fff;
        border-radius:10px;
        padding:80px 20px;
        position:absolute;
        left:40%;
        top:20%;
        width:300px;
        text-align:center;
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

const Checkout = styled.div`
    width:77%;
    display:flex;
    justify-content:flex-end;
    button{
        background-color:#A1168A;
        color: #fff;
        border-radius:15px;
        padding:0px 20px;
        border:1px solid transparent;
    }

`

export default ()=>{
    document.title = "Cart"
    const [items, setItems] =useState([])
    const [total, setTotal] = React.useState();
    const getItemforStorage = async ()=>{
        let cart = new Array
        cart = await JSON.parse(localStorage.getItem("ennet_cart"))
        setItems(cart)
        setTotal(()=> 
            cart.reduce((acc, item)=> acc + Number(item?.price*item?.quantity),0)
        )
    
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
    return(
        <>
            <Modal onClick = {closeModal} className = "checkout-modal close">
                <div>
                    <i onClick = {toggleModal} class="fas fa-times"></i>
                    <p>Your Current Balance :2000000</p>
                    <div>Amount to be paid : {total}</div>
                    <button>Pay</button> 
                </div> 
            </Modal>
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
                            {items?.map(({id, urls,alt_description, price, quantity, downloads})=>(
                                <tr key = {id}>
                                    <td className = "item-cell">
                                        <img src={urls.small} alt={alt_description}/>
                                        <div id = "desc">
                                            {alt_description} <br/>
                                            <span>{downloads} bought this item</span>
                                            <Delete onClick = {()=>{deleteItem(id)}} ><i class="far fa-trash-alt"></i>Delete</Delete>
                                        </div>
                                    </td>
                                    <td>{quantity}</td>
                                    <td>{price}</td>
                                    <td>{quantity * price}</td>
                                </tr>
                            ))}
                        
                        
                        </tbody>
                        
                    </Table>
                    <Checkout>
                        <p>{total}</p>
                        <button onClick={toggleModal}>Checkout</button>
                    </Checkout>
                    
                </div>
                
            </Wrapper>
        </>
    )           

}