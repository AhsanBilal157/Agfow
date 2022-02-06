import React from 'react';
import whitelogo from './agfowwhitelogo.png'
import locationicon from './locationicon.png'
import Phoneicon from './phoneicon.png'
import emailicon from './emailicon.png'
import clockicon from './cloclicon.png'
import fbicon from './fbicon.png'
import yticon from './youtubeicon.png'
import linkdinicon from './linkdinicon.png'

export const Footer=()=>{
    return(
        <div className='footerbc'>
        <div className='footer' style={{padding: '57px 32px'}}>
            <div>
                <br /><br /><br />
            <img src={whitelogo} alt="agfowwhitelogo" className='footerimg' />
            <br />
            <br />
            <h2 className='footerheading'>Agriculture food and water <br />
sustainable  .org
</h2></div>< br/>< br/>< br/>
<div style={{display:'flex',justifyContent:'space-around'}}> 
<div className='links' style={{color:"white", padding:'0px 30px'}}>
    <h1> Useful Links</h1>
    <br />
        <a href="#home"><h2 style={{color:'white'}}>Home</h2></a>
        <a href="#Services"><h2 style={{color:'white'}}>Services</h2></a>
        <a href="#Aboutus"><h2 style={{color:'white'}}>About Us</h2></a>
        <a href="#forecasting"><h2 style={{color:'white'}}>Forecasting</h2></a>
        <a href="#news"><h2 style={{color:'white'}}>News</h2></a>
        <a href="#Contactus"><h2 style={{color:'white'}}>Contact us</h2></a>
    
</div>
<div className='linksheadings' style={{color:"white",padding:'0px 30px'}}>
    <h1> Contact info</h1>
    <br />
        <h2><img src={locationicon} alt='locationicon' height={13}/>           Location</h2>
        <h2><img src={Phoneicon} alt='Phoneicon' height={13}/>           Phone</h2>
        <h2><img src={emailicon} alt='Phoneicon' height={14}/>           Email</h2>
        <h2><img src={clockicon} alt='Phoneicon' height={18}/>           Clock</h2>
        
</div>
<div className='linksheadings' style={{color:"white",padding:'0px 30px'}}>
    <h1> Languages</h1>
    <br />
        <h2>English</h2>
        <h2>Urdu</h2>
        <h2>Punjabi</h2>
        <h2>Hindi</h2>
        
    
</div></div></div>
<hr /><br /><br />
<div style={{display:'flex'}}>
<h2 style={{color:'white',paddingLeft:'180px'}}>© AGfow | All rights Reserved</h2>

<div style={{paddingRight:'210px'}}><img src={fbicon} alt='fbicon' height={30} />
<img src={yticon} alt='fbicon' height={30} style={{paddingLeft:'10px'}}/>
<img src={linkdinicon} alt='linkdinicon' height={30} style={{paddingLeft:'10px'}}/></div></div>
<br /><br />
        </div>
    );
} 