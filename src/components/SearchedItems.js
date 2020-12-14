import React, {useEffect, useState} from "react"
import styled from "styled-components"
import {Link, withRouter} from 'react-router-dom'

const SearchedItems = styled.div`
    margin-top:90px;
    padding:0px 20px;
    h4{
        color:black;
        text-align:left;
        font-weight:400;
    }
    div{
        display:flex;
        overflow:auto;
        
        img{
            width:250px ;
            height:150px;
            object-fit: cover;
        }
        span{
            cursor:pointer;
            margin:20px;
        }
        p, strong{
        color: black !important;
    }
    }

`

const Search  = (props)=>{
    const tags = props?.result?.tags
    console.log(props)
    const [results, setResults] = useState([])
    const getSearchesData = async ()=>{
        console.log(tags)
        if(tags){
            
            const random =  Math.floor(Math.random() * tags?.length)+0
            const itemToSearch = tags[random].title
            const data = await (await fetch(`https://api.unsplash.com/search/photos/?query=${itemToSearch}s&client_id=oAZ8DyQ4FRcZKSz3083vOLdX7yCv3uEJhGTigrC5wi0&page=${random}&per_page=10`)).json()
            setResults(data?.results)
        }
       
    }

    useEffect(()=>{
        getSearchesData()
    },[tags])

    const goToPage = (id,random)=>{
        props.history.push(`/store/${id}&${random}`)
        window.location.reload()
    }

    console.log(results)
    return(
        <SearchedItems>
            <h4>
                People Also Checked
            </h4>
            <div>
                {results?.map(({id, urls, alt_description})=>{
                    const random = Math.floor(Math.random() * 900000)+1000
                    return(
                        <span key={id} onClick={()=> goToPage(id,random)} to = {`/store/${id}&${random}`}>
                            <img  src={urls.thumb} alt={alt_description}/>
                            <p>{alt_description}</p>
                            <strong>₦{random}</strong>
                        </span>
                    )
                })}
            </div>
        </SearchedItems>
    )
    
}

export default withRouter(Search)