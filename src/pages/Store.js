import React, {useEffect, useState} from 'react'
import styled from "styled-components"

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

`
const ImageWrapper  = styled.div`
    padding:30px;
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(250px,1fr));
    grid-row-gap:40px;
    img{
        width:250px ;
        height:150px;
        
    }
`


export default () => {
    const [photos, setPhotos] = useState([])
    const fetchPhotos = async ()=>{
        const data = await (await fetch("https://api.unsplash.com/photos/?client_id=oAZ8DyQ4FRcZKSz3083vOLdX7yCv3uEJhGTigrC5wi0")).json()
        setPhotos(data)
    }

    const displayData = ()=>{
        return(
            <ImageWrapper>
            {photos.map(({id, urls, alt_description})=>(
                <div key={id}>
                    <img  src={urls.small} alt={alt_description}/>
                    <p>{alt_description}</p>
                    <p>N3000</p>
                </div>
                
            ))
            }
            </ImageWrapper>
        )
        
      
        
    }

    useEffect(()=>{
        fetchPhotos()
       
    },[])

    console.log(photos[0])

    return(
        <Wrapper>
            <h4>Store</h4>
            {displayData()}
        </Wrapper>
    )
}