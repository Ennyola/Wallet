import React, {useEffect, useState} from 'react'
import styled from "styled-components"
import ReactPaginate from 'react-paginate';
import {Link} from 'react-router-dom'

const Wrapper = styled.div`
    padding-top: 97px;
    padding-left: 180px;
    overflow: hidden;

    h4{
        text-align: center;
        margin-right: 100px;
        color: #A1168A;
        font-weight: bold;
        margin-top: 6px;  
    }
    .pagination {
    display: flex;
    justify-content: flex-end;
    position:relative;
    right:30px;

    .current-page,
    .break,
    .next,
    .previous {
        border: 1px solid  #A1168A;
        border-radius: 5px;
        margin-left: 20px;
        cursor: pointer;
        text-align: center;
        
        outline:none
        }
    .current-page-link,
    .next-link,
    .previous-link,
    .break-link {
        width: 100%;
        display: block;
        /* padding:10px; */
        }
    .active {
      background-color: #A1168A;
      color: #fff;
    }

    }

`
const ImageWrapper  = styled.div`
    padding:30px;
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(250px,1fr));
    grid-row-gap:40px;
    
    p, strong{
        color: black !important;
    }
    
    img{
        width:250px ;
        height:150px;
        object-fit: cover;
        
    }
`


export default () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const fetchPhotos = async ()=>{
        const data = await (await fetch(`https://api.unsplash.com/search/photos/?query=cars&client_id=oAZ8DyQ4FRcZKSz3083vOLdX7yCv3uEJhGTigrC5wi0&page=${page}&per_page=20`)).json()
        setData(data)
    }

    const displayData = ()=>{
        
        return(
            <ImageWrapper>
            {data?.results?.map(({id, urls, alt_description})=>(
                <Link key={id} to = {`/store/${id}`}>
                    <img  src={urls.small} alt={alt_description}/>
                    <p>{alt_description}</p>
                    <strong>₦{Math.floor(Math.random() * 900000)+1000}</strong>
                </Link>
                
            ))
            }
            </ImageWrapper>
        )
        
      
        
    }

    useEffect(()=>{
        fetchPhotos()
       
    },[page])

    const handlePageClick = (data) => {
        console.log(data.selected)
        // let offset = Math.ceil(selected * this.props.perPage);
        setPage(data.selected+1)
        // this.setState({ offset: offset }, () => {
        //   this.loadCommentsFromServer();
        // });
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
            previousClassName={"previous page"}
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