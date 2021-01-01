import React,{useRef} from "react"
import styled from "styled-components"
import {Link} from "react-router-dom"
import bgImage from "../public/images/fabian-irsara-67l-QujB14w-unsplash.jpg"
const Wrapper = styled.div`
    overflow:hidden;
    background-color:#f4f7fa;
`
const Header = styled.header`
    position:fixed;
    width:100%;
    top:0;
    left:0;
    z-index:1;
    padding:40px 40px 20px 40px;
    transition:0.6s;
    nav{
        display:flex;
        justify-content:space-between;
        h1{
            color: #fff;
        }

        span{
            position:relative;
            top:10px;
            a{
                margin:20px 40px ;
                color: #fff;
                padding:5px;
                transition:0.6s;
                :hover{
                    text-decoration:none;
                    border-bottom:3px solid#A1168A;
                }
            }
            @media (max-width:870px){
                :nth-child(2n){
                    display:none;
                }
                
            }
        }
    }

    @media (max-width:500px){
       padding:20px 20px;
    
    }
                

    
`
const GetStarted = styled.div`
        background-color: #884d7e;
        height:90vh;
        width:100%;
        text-align:center;
        padding:200px 30px 0px 30px;
        border-radius: 50%/0 0 48px 48px;
        background-image: url(${bgImage});
        background-size: cover;
        background-attachment: fixed;
        background-blend-mode: soft-light;
        background-position: center;
        h2{
            color:  #fff;
            font-weight:600;
            margin-top:30px;
            letter-spacing:1.5px;
            line-height:1.2;
            font-size:40px;
        }
        a{
            border: 3px solid white;
            border-radius:90px;
            padding:13px 30px;
            position:relative;
            top:50px;
            color:white;
            font-weight:400;
            :hover{
                color: #b835a2;
                background-color:white;
                font-weight:900;
            }
        }
    

`

const Features = styled.section`
    display:block;
    margin:0 auto;
    margin-top:80px;
    padding: 0px 80px;
    
    h1{
        padding-top:100px;
        color: #884d7e;
        text-align:center;
        font-weight:400;
        letter-spacing:-0.7px;
            
    }
    .features{
        margin-top:80px;
        display:grid;
        grid-template-columns:repeat(3, 1fr);
        grid-column-gap:30px;

        .feature{
            color:#884d7e;
            background-color:white;
            border-radius:10px;
            padding:50px 35px;
            h5{
                font-weight:500;
                text-align:left;
                font-size:24px;
            }
            p{
                margin-top:40px;
                letter-spacing:1.4px;
                font-size:16px;
                font-weight:normal;
            }
        }
        @media (max-width:850px){
            grid-template-columns:repeat(1, 1fr);
            grid-row-gap: 30px;   
        }
        

    }
    @media (max-width:520px){
        padding:0px 30px;
    }

    


`

const About = styled.section`
    margin-top:100px;
    margin-bottom:190px;
    color: #884d7e;
    h1{
        
        text-align:center;
        font-weight:400;
        letter-spacing:-0.7px;
        padding-top:100px;
    }
    p{
        margin-top:40px;
        font-weight:normal;
        font-size:18px;
        letter-spacing:1.5px;
    }
    @media (max-width:600px){
        padding:30px;
    }
    
`

const Footer = styled.div`
    margin-top:40px;
    position:relative;
    top:50px;
    background-color:#884d7e;
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
const BurgerButton = styled.span`
    display:none;
    color:white;
    font-size:24px;  
    margin-top:-4px;
    @media (max-width:870px){
        display:block;        
    }
    

`
const SideBar = styled.div`
    position:fixed;
    width:100%;
    height:100%;
    div{
        margin-left:-200px;
        width:200px;
        background-color: #f4f7fa;
        height:100%;
        transition: 0.5s all !important; 
        a{
            padding:30px;
            display:block;
            text-align:center;
            border-bottom:3px solid #eee;
            color:#884d7e;
            font-weight:normal;
        }
        
    }
    @media (min-width:870px){
        display:none;
    }

`

window.addEventListener("scroll",(e)=>{
    const header = document.querySelector(".landing-header")
    const features = document.querySelector(".features-wrapper")
    header?.classList?.toggle("switch", window.scrollY>8)
    if(window.scrollY>100){
        features?.classList?.add("animate__fadeInRight")
    } 
})


const Landing = ()=>{
    document.title = "ENNET"
    const featuresRef = useRef(null)
    const aboutRef = useRef(null)
    const executeScroll = (ref) => ref.current.scrollIntoView()
   
    const openSidebar=()=>{
        const sidebar = document.querySelector(".landing-sidebar");
        const sidebarChild = document.querySelector(".sidebar-div");
        sidebar.classList.remove("close")
        sidebarChild.classList.add("show")

    }
    const closeSidebar=(e)=>{
        const sidebar = document.querySelector(".landing-sidebar");
        const sidebarChild = document.querySelector(".sidebar-div");
        if(e.target.classList.contains("landing-sidebar")){
            sidebar.classList.add("close")
            sidebarChild.classList.remove("show")
        }
    }
    

    return(
        <Wrapper>
        
            <SideBar className = "landing-sidebar overlay close" onClick={closeSidebar}>
                <div className="sidebar-div">
                    <Link to="/login">SiGN-IN</Link>
                    <Link to="/signup">SIGN-UP</Link>
                    <Link to ="" onClick ={()=> executeScroll(featuresRef)} >FEATURES </Link>
                    <Link to ="" onClick ={()=> executeScroll(aboutRef)}>ABOUT </Link>
                </div>
            </SideBar>

            <Header className ="landing-header">
                <nav>
                    <Link to="/dashboard"> <h1 className = "logo"> ENNET </h1></Link> 
                    <span>
                        <Link to ="" onClick ={()=> executeScroll(featuresRef)} >FEATURES </Link>
                        <Link to ="" onClick ={()=> executeScroll(aboutRef)}>ABOUT </Link>
                        <Link to="/login">SiGN-IN</Link>
                    </span> 
                    <BurgerButton onClick={openSidebar}> 
                        <i className="fas fa-bars"></i>
                    </BurgerButton>
                </nav>
            </Header>
            <GetStarted className="">
                    <h2 className="animate__animated animate__slideInDown">AUTOMATE YOUR SAVING PROCESS.</h2>
                    <Link to="/signup" className="get-started">GET STARTED</Link>
            </GetStarted>
            <Features ref ={featuresRef} className="animate__animated features-wrapper" >
                <h1>Features</h1>
                <div className="features">
                    <div className="feature">
                        <h5>Save Money</h5>
                        <p>
                            One major feature of any Wallet its capability to save Money. 
                            Ennet is not any different as you can do so With Ease. Please take Note, no real Money is being saved. 
                            This application just automates the process and ease of saving
                        </p>
                    </div>
                    <div className="feature">
                        <h5> Spend Money </h5> 
                        <p>
                            What good does it do to have money but cannot spend them? Well, Ponder no more. An in-house Store is there to spend as much money as you can Spend. But beware, Things are very expensive 👀
                        </p>
                    </div>
                    <div className="feature">
                        <h5>Keep Track Of Expenses</h5>
                        <p>
                            You Really do not have to keep Calculating how much you've saved in total since opening your account as this is being done for you. Just Relax and let's make life easy For you
                        </p>
                    </div>
                    
                </div>         
            </Features>
            <About ref = {aboutRef} className="about-wrapper container">
                <h1>About</h1>
                <p> Ever Felt Broke? Well, that was the same reason Ennet was built. Ennet is an E-wallet Application that Automates the saving process. 
                You can save up to Any Amount and the money's all yours(Just imagine having Trillions at your Disposal).
                Though It stores no real money nor is any real money being spent, you can still get the thrill of being richer than Jeff Bezos.
                An In-house Mini store is provided to facilitate and Ensure you can spend the money Saved up.
                Wanna Know how you can save, why don't you <Link to="/signup">Sign-up</Link>  to Find out 😉
                </p>
            </About>

            <Footer>
                  <p>Contact The Developer</p> 
                 <div>
                    <a href="https://medunoyeeni@gmail.com" target="_blank" rel="noreferrer"> <i className="far fa-envelope"></i> </a>
                    <a href="https://twitter.com/la_yhemy" target="_blank" rel="noreferrer"> <i className="fab fa-twitter"></i> </a>
                    <a href="https://www.linkedin.com/in/eniola-medunoye/" target="_blank" rel="noreferrer"> <i className="fab fa-linkedin"></i> </a>
                    <a href="https://github.com/Ennyola" target="_blank" rel="noreferrer"> <i className="fab fa-github"></i> </a>
                 </div>
                 <p>©ENNET ALL RIGHTS RESERVED. </p>
            </Footer>

        </Wrapper>
    )
}

export default Landing