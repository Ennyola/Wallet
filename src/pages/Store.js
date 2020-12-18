import React, {useEffect, useState} from 'react'
import styled from "styled-components"
import ReactPaginate from 'react-paginate';
import {Link} from 'react-router-dom'
import {Wrapper} from "../components/styles"
import NumberFormat from 'react-number-format';

const ImageWrapper  = styled.div`
    padding:30px;
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(200px,1fr));
    grid-row-gap:40px;
    grid-column-gap:80px;
    place-items:center;
    
    p, strong{
        color: black !important;
    }
    
    img{
        width:250px;
        height:150px;
        object-fit: cover;  
        border-radius: 5px;   
    }
`


export default () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const fetchPhotos = async ()=>{
        const data = await (await fetch(`https://api.unsplash.com/search/photos/?query=shoes&client_id=oAZ8DyQ4FRcZKSz3083vOLdX7yCv3uEJhGTigrC5wi0&page=${page}&per_page=20`)).json()
        setData(data)
    }

    const displayData = ()=>{
        
        return(
            <ImageWrapper>
            {data?.results?.map(({id, urls, alt_description})=>{
                const random = Math.floor(Math.random() * 900000)+1000
                return(
                    <Link key={id} to = {`/store/${id}&${random}`}>
                        <img  src={urls.small} alt={alt_description}/>
                        <p>{alt_description.length>31 ? `(${alt_description.substring(0,32)})....`: alt_description}</p>
                        <strong><NumberFormat value={random} displayType={'text'} thousandSeparator={true} prefix ={"₦"}  /></strong>
                    </Link>
                )
                
                
            })
            }
            </ImageWrapper>
        )  
        
    }

    useEffect(()=>{
        fetchPhotos()
       
    },[page])

    const handlePageClick = (data) => {
        setPage(data.selected+1)
      };
    return(
        <Wrapper>
            <h4>Store</h4>
            {displayData()}
            <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            pageClassName={"current-page"}
            activeClassName={"active"}
            previousClassName={"previous-page"}
            nextLinkClassName={"next-link"}
            breakLinkClassName={"break-link"}
            previousLinkClassName={"previous-link"}
            pageCount={data.total_pages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            />
        </Wrapper>
    )
}