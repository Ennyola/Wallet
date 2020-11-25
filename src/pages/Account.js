import React,{createRef, useState} from 'react';
import {MDBPopover} from 'mdbreact'
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';


import photo from '../public/images/opened-laptop-on-table-1128240.jpg'
const Account = ()=>{

    const overlayRef = createRef()
    const [hovered, setHover] = useState(false)
    const [clicked, setClicked] = useState(false)

    //setHover checks if the image div was hovered on. 
    //If set to false, the overlay div would not show, 
    //but set to true, will make it show
    const hoverOverImage=(e)=>{   
            setHover(true)
            
    }
    const leaveImage = (e)=>{
        if(!clicked){
            setHover(false) 
        }
    }

    const setClick = (e)=>{
        setClicked(true)
    }

    const clickBody = (e)=>{
       if (clicked){
           setClicked(true)
           setHover(false)
       }
  
    }

   

    const imageisClicked = ()=>{
        if (hovered){
                return(
                    <MDBPopover
                    placement = "right"
                    popover
                    clickable
                    domElement
                    id="popper1"
                    >
                        <div ref= {overlayRef} onClick = {setClick}  className = "img-overlay">
                            <span>
                                Click here to 
                                <br/>
                                change Profile photo
                                
                            </span>
                        </div>
                        <div>
                            <a href="">View Photo</a>
                            <a href="">Take Photo</a>
                            <a href="">Upload Photo</a>
                            <a href="">Remove Photo</a>
                        </div>
                    </MDBPopover>
                )
            }
    }

    

    return(
        <div className = "account" onClick = {clickBody}>
           
            <div className="body">
                <div onMouseEnter = {hoverOverImage} onMouseLeave = {leaveImage} className = "account-image">
                    <img src={photo} alt=""/> 
                    {imageisClicked()}
                </div>

                {/* <Image cloudName="awploder" publicId="sample" width="300" crop="scale" />

                 */}
                
                
                
            </div>

        </div>
    )
}

export default Account