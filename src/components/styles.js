import styled from "styled-components"

export const Wrapper = styled.div `
    padding-top: 97px;
    padding-left: 200px;
    padding-right:30px;
    h4{
        text-align: center;
        /* margin-right: 100px; */
        color: #A1168A;
        font-weight: bold;
        margin-top: 6px;  
    }
    .pagination {
    display: flex;
    justify-content: flex-end;
    position:relative;
    right:30px;

    li {
        border: 1px solid  #A1168A;
        border-radius: 5px;
        margin-left: 20px;
        cursor: pointer;
        text-align: center;
        outline:none;
    
        }
        li a{
            display:block;
            width:100%;
            padding:10px;
        }
    .active {
      background-color: #A1168A;
      color: #fff;
    }

    }
    @media (max-width:950px){
        padding-left: 0px;
        padding-right:10px;
    }
    @media (max-width:479px){
        .pagination {
        justify-content:center;
        right:0px;
        li{
            margin-left: 15px;
        }
        li a{
            display:block;
            width:100%;
            padding:5px;
        }
        }
        
    }

`