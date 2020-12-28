import React from "react"
import styled from "styled-components"
import {Link} from "react-router-dom"

const Wrapper = styled.div`
    overflow:hidden;
    background-color:#f4f7fa;
`
const Header = styled.header`
    background-color: pink;
    border-radius: 50%/0 0 48px 48px;
    height:80vh;
    /* background-image:url("../images/20-banknote-on-black-leather-bag-3943732.jpg"); */
    nav{
        padding:40px;
        display:flex;
        justify-content:space-between;

        span{
            position:relative;
            top:8px;
            right:10px;
            a{
                margin:20px 40px ;
            }
        }
    }
    div{
        margin-top:60px;
        text-align:center;
        a{
            border: 1px solid white;
            border-radius:90px;
            padding:13px 30px;
            position:relative;
            top:70px;
        }
    }
`

const Features = styled.section`
    margin-top:80px;
    padding-top: 30px;
    padding-bottom: 40px;
    text-align:center;
    h2{
        
    }
    .row{
        margin-top:60px;
        .col-md-4{
            background-color:#fff;
            
        }
    }


`

const About = styled.section`
    margin-top:80px;
    margin-bottom:90px;
    text-align:center;
`

const Footer = styled.div`
    margin-top:40px;
    position:relative;
    top:50px;
    background-color:#b835a2;
    padding:60px;
    text-align:center;
    color: #fff;
    div{
        margin-bottom:20px;
        a{
        margin:20px;
        color:white;
        }
    }
    
`

export default ()=>{
    return(
        <Wrapper>
            <Header>
                <nav>
                    <Link> <h1 className = "logo"> ENNET </h1></Link> 
                    <span>
                        <Link>FEATURES</Link>
                        <Link>ABOUT </Link>
                        <Link to="/login">SiGN-IN</Link>
                    </span>    
                </nav>

                <div className = "container">
                    <h2>AUTOMATE YOUR SAVING PROCESS AND HAVE FUN WHILE DOING SO</h2>
                    <Link to="/signup" className="get-started">GET STARTED</Link>
                </div>
            </Header>
            <Features className ="container">
                <h2>Features</h2>
                <div className="row">
                    <div className="col-md-4">
                        <h5>Save Money</h5>
                        <p>
                            One major feature of any Wallet its capability to save Money. 
                            Ennet is not any different as you can do so With Ease. Please take Note, no real Money is being saved. 
                            This application just automates the process and ease of saving
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h5>Keep Record Of All Money Saved</h5>
                        <p>
                            You Really do not have to keep Calculating how much you've saved in total since opening your account as this is being done for you. Just Relax and let's make life easy For you
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h5> Spend Money </h5> 
                        <p>
                            What good does it do to have money but cannot spend them? Well, Ponder no more. An in-house Store is there to spend as much money as you can Spend. But beware, Things are very expensive 👀
                        </p>
                    </div>
                </div>
                
                
            </Features>
            <About className="container">
                <h2>About</h2>
                Ever Felt Broke? Well, that was the same reason i built this. Ennet is an E-wallet Application that Automates the saving process. You can save up to Any Amount and the money's all yours(Or so i use to console myself)
                It stores no real money nor is any real money being spent.
                An In-house Mini store is provided to facilitate and Ensure you can spend the money Saved up.
                Wanna Know how you can save, why don't you Sign-in to Find out 😉
            </About>

            <Footer>
                  <p>Contact The Developer</p> 
                 <div>
                    <a href="https://medunoyeeni@gmail.com" target="_blank"> <i class="far fa-envelope"></i> </a>
                    <a href="https://twitter.com/la_yhemy" target="_blank"> <i class="fab fa-twitter"></i> </a>
                    <a href="https://www.linkedin.com/in/eniola-medunoye/" target="_blank"> <i class="fab fa-linkedin"></i> </a>
                    <a href="https://github.com/Ennyola" target="_blank"> <i class="fab fa-github"></i> </a>
                 </div>
                 <p>©ENNET ALL RIGHTS RESERVED. </p>
            </Footer>

        </Wrapper>
    )
}