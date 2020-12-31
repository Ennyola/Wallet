import React, {useEffect, useState} from "react"
import styled from "styled-components"
import {Link, withRouter} from 'react-router-dom'
import NumberFormat from 'react-number-format';

const SearchedItems = styled.div`
    margin-top:90px;
    padding:0px 40px;
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
            border-radius: 9px;   
        }
        span{
            cursor:pointer;
            margin:20px;
        }
        p, strong{
        font-weight:normal
        }
        .price{
            color: #884d7e;
            font-weight:900;
            position:relative;
            right:20px;

        }
        
    }

`

const Search  = (props)=>{
    const [results, setResults] = useState([])
    const getSearchesData = async ()=>{
        if( props.tags &&  props.tags.length !== 0){
            const random =  Math.floor(Math.random() * props?.tags?.length)+0
            const itemToSearch = props?.tags[random].title
            const data = await (await fetch(`https://api.unsplash.com/search/photos/?query=${itemToSearch}s&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}&page=${random}&per_page=10`)).json()
            setResults(data?.results)
        }
       
    }

    useEffect(()=>{
        getSearchesData()
    },[props?.tags])

    const goToPage = (id,random)=>{
        props.history.push(`/store/${id}&${random}`)
        window.location.reload()
    }
    return(
        <SearchedItems>
        {
            props.tags &&  props.tags.length !== 0 &&
                <> 
                    <h4>
                        People Also Checked
                    </h4>
                    <div>
                        {results?.map(({id, urls, alt_description})=>{
                            const random = Math.floor(Math.random() * 900000)+1000
                            return(
                                <span key={id} onClick={()=> goToPage(id,random)} to = {`/store/${id}&${random}`}>
                                    <img  src={urls.thumb} alt={alt_description}/>
                                    <p className="description">{alt_description?.length>31 ? `${alt_description?.substring(0,30)}....`: alt_description}</p>
                                    <strong className ="price"><NumberFormat value={random} displayType={'text'} thousandSeparator={true} prefix ={"₦"}  /></strong>
                                </span>
                            )
                        })}
                    </div>
                </>

        }
            
        </SearchedItems>
    )
    
}

export default withRouter(Search)