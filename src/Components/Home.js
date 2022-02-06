import React, { useEffect, useState } from 'react';
import '../App.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import agriicon from './agriicon.png'
import watericon from './watericon.png'
import kissanimg from './kissanimg.png'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import farmerhelp from './farmhelpinblue.png';
import farmicon from './Farmhandicon.png';
import livestockicon from './livestockicon.png'
import treeicon from './foresticon.png';
import whethericon from './Group_20.png';
import servicewhethaericon from './wheathericon.png'
import trackter from './trackter.jpeg';
import greenback from './greenback.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 150,
  lineHeight: '60px',
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export const Home = () =>{
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [city, setcity] =useState('Islamabad');
  const [search, setsearch] = useState('Islamabad');
  useEffect(()=>{
    const fetchapi = async() => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=baa5f59cb8e9200af5a54f6e0ed07bb0`;
      const response = await fetch(url);
      const rejson = await response.json();
      //console.log(rejson);
      setcity(rejson.main);
    }

    fetchapi();
  },[search]);

  const [cityfor5, setcityfor5] =useState('Islamabad');
  const [cityfor1, setcityfor1] =useState('Islamabad');
  const [cityfor2, setcityfor2] =useState('Islamabad');
  const [cityfor3, setcityfor3] =useState('Islamabad');
  const [cityfor4, setcityfor4] =useState('Islamabad');
  const [datefor1, setdatefor1] =useState('00-00-00');
  const [datefor2, setdatefor2] =useState('00-00-00');
  const [datefor3, setdatefor3] =useState('00-00-00');
  const [datefor4, setdatefor4] =useState('00-00-00');
  const [datefor5, setdatefor5] =useState('00-00-00');
  const [searchfor5, setsearchfor5] = useState('Islamabad');
  useEffect(()=>{
    
     const fetchapifor5 = async() => {
      const url =  `http://api.openweathermap.org/data/2.5/forecast?q=${searchfor5}&units=metric&appid=baa5f59cb8e9200af5a54f6e0ed07bb0`;
      const response = await fetch(url);
      const rejson = await response.json();
      setcityfor5(rejson.list[0].main);
      setcityfor1(rejson.list[1].main);
      setcityfor2(rejson.list[2].main);
      setcityfor3(rejson.list[3].main);
      setcityfor4(rejson.list[4].main);
      setdatefor1(rejson.list[0].dt_txt.slice(0,10));
      setdatefor2(rejson.list[1].dt_txt.slice(0,10));
      setdatefor3(rejson.list[2].dt_txt.slice(0,10));
      setdatefor4(rejson.list[3].dt_txt.slice(0,10));
      setdatefor5(rejson.list[4].dt_txt.slice(0,10));
      
      /*.then(response => response.json())
      .then(data => {

    //Getting the min and max values for each day
    for(var i = 0; i<5; i++){
      Element.getById("day" + (i+1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - 273.15).toFixed(1)+ "°";
        //Number(1.3450001).toFixed(2); // 1.35
    }

    for(i = 0; i<5; i++){
        Element.getById("day" + (i+1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(2) + "°";
    }
    //------------------------------------------------------------

    //Getting Weather Icons
     for(i = 0; i<5; i++){
      Element.getById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
        data.list[i].weather[0].icon
        +".png";
    }
    console.log(data);
    })
    .then(response => response.json())*/

  }
  fetchapifor5();
    
  },[searchfor5]);

    return(
        <div>

        <section class="home" id="home">

<h1> " Lets revolutionized your farm into <br /> smart farm "</h1>

<button className="btn">Learn more</button>

</section>
<section id="Services">
<div className='services'>
<br />
<br />
<br />
<br />
<br />
<br />
<div data-aos="fade-right" style ={{
    padding: '18px 6px'
}}><h1 className='servicestitle'> Major <br />Services</h1><br /><br /><br />
    <div style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'center'}}>
        <button className="btn" >Learn more</button></div></div>
    
    <br />
    <br />
    <br />
    <br />
    <br />
    <div style={{    padding: '10px 0px',paddingLeft: '50px'}} data-aos="fade-down">
      <h2 >Smells racy free announcing than durable zesty  smart exotic far feel. Screamin' affordable secret way absolut <br /> Farmers are at the core of our business. BKK takes a holistic approach to enable  </h2>
      <br /><br /><br /><br />
      <div  className='servicesportionservices'>
    <div>
          <img src={agriicon} alt="agriicon"  className='servicesimage'/><br /><br />
          <h4 className="cardtitle">Crop <br />Consultation </h4></div>
          
      <div>
          <img src={watericon} alt="watericon"  className='servicesimage'/><br /><br />
          <h3 className="cardtitle">Water <br />Sustainability</h3></div>
          
      <div>
          <img src={farmicon} alt="Farmicon"  className='servicesimage'/><br /><br />
          <h3 className="cardtitle">Farm<br />Mechanism</h3></div>
          <div>
          <img src={servicewhethaericon} alt="whethericon"  className='servicesimage'/><br /><br />
          <h3 className="cardtitle">Wheather <br /> Forecasting</h3></div>
          
      <div>
          <img src={treeicon} alt="treeicon"  className='servicesimage'/><br /><br />
          <h3 className="cardtitle">Disaster <br />Managment</h3></div>
          
      <div>
          <img src={livestockicon} alt="watericon"  className='servicesimage'/><br /><br />
          <h3 className="cardtitle">Livestock <br />Advisory</h3></div></div></div>
          
    
        <br /><br />
        
        <br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
</div>
</section>
<section id="Aboutus">
<div className="kissanportion">
<div className="kissanportionimg">
<img data-aos="fade-right" src={kissanimg} alt="kissanimg" className='kissanimg'/>
</div>

<div  className="kissanportiondiv"data-aos="fade-left">
            <h1 style={{color:"green",fontSize: '45px'}}>Agfow .org</h1><br /><br />
            <h2>- Attractive design</h2>
                        <h2>- Showing products through json file </h2>
                        
                        <h2>- Showing Details of each Product</h2>
                        <h2>- Handle history in Url</h2>
                        <h2>- Adding your choice in cart</h2>
                        <h2>- Calculate price</h2>
                        <h2>- Storing order details in Database </h2>
                        <h2>- Showing order info from databse</h2>
                        <h2>- Attractive design</h2>
                        <h2>- Showing products through json file </h2>
                        
                        <h2>- Showing Details of each Product</h2>
                        <h2>- Handle history in Url</h2>
                        <h2>- Adding your choice in cart</h2>
                        <h2>- Calculate price</h2>
                        <h2>- Storing order details in Database </h2>
                        <h2>- Showing order info from databse</h2>
                        <br />
                        <br />
        <button class="btn" >Learn more</button></div>
</div>
</section>
<br />
<br />



<Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab label="Current Day" {...a11yProps(0)} />
          <Tab label=" 5 day" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <section id="forecasting">
      <TabPanel value={value} index={0}>
        
      <div className="whetherportion">
  <br /><br /><br />
<h1 style={{color:"white",fontSize: '30px',textAlign:'center',fontFamily: 'Sedan SC'}}>Wheather Forecasting</h1><br /><br /><br />
{/*<input type="search" defaultvalue="Islamabad" placeholder="Islamabad" onChange={(event)=> setsearch(event.target.value)}/>*/}
<div style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'center'}}><TextField id="standard-basic" label="Enter your City" variant="filled" color="success" placeholder="Islamabad" onChange={(event)=> setsearch(event.target.value)} style={{color:'white', width:'200px',fontize:'20px',backgroundColor:'white',borderRadius:'10px'}}/></div>     
{!city ? (
        <div>
        <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent:'space-evenly',
              '& > :not(style)': {
                m: 2,
                width: 240,
                height: 340,
                borderRadius:5,
                border:'solid #1A8324 2px',
                backgroundColor: 'white',
                overflow: 'hidden'
              },
            }}
          ><Paper style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'center'}}>
                <div>
                  <br />
                <br /><br />
                <h1 className="wheathercardtitle"> Sorry no data <br /><br /><br />found for this <br /><br /><br /> city </h1><br /><br /><br /><br /><br /><br /><br /><br /><div className="grenback">
                  <br /><br /></div>
                
          </div>
                </Paper></Box>
            
           
          </div>
 
):(<div>
  <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent:'space-evenly',
        '& > :not(style)': {
          m: 2,
          width: 240,
          height: 340,
          borderRadius:5,
          border:'solid #1A8324 2px',
          backgroundColor: 'white',
          overflow: 'hidden'
        },
      }}
    ><Paper style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'center'}}>
          <div>
            <br />
          <br /><img src={whethericon} alt="whethericon"  style={{align:'center',height:'120px',paddingBottom:'50px',paddingLeft:'100px'}}/><br />
          <h1 className="wheathercardtitle"> {search} </h1><br /><h3 style={{textAlign:'center',fontWeight:'lighter'}}>Date : {datefor1}</h3><br /><br /><br /><div className="grenback">
            <br /><br /><h2 className="wheathercardtitle" style={{color:'white'}}>{city.temp}˚C</h2><br /> <h3 style={{textAlign:'center',fontWeight:'lighter',color:'white'}}>min : {city.temp_min}˚C | max : {city.temp_max}˚C </h3></div>
          {/*<div className="wave -one"></div>
          <div className="wave -two"></div>
    <div className="wave -three"></div>*/}
    </div>
          </Paper></Box>
      
     {/* <Paper  style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'center'}}>
      <div>
          <img src={watericon} alt="watericon" height={120} style={{paddingLeft:'10px'}}/><br /><br />
          <h3 className="cardtitle">Water <br />Sustainability</h3></div>
          </Paper>
      <Paper style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'center'}}>
      <div>
          <img src={farmicon} alt="watericon" height={120} style={{paddingLeft:'10px'}}/><br /><br />
          <h3 className="cardtitle">Water <br />Sustainability</h3></div>
    </Paper>*/}
    </div>
)}
        
  

<br /><br />
        <div style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'center'}}>
        <button class="btn" >Learn more</button></div><br /><br /><br />
    
</div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className="whetherportion">
  <br /><br /><br />
<h1 style={{color:"white",fontSize: '30px',textAlign:'center',fontFamily: 'Sedan SC'}}>Wheather Forecasting</h1><br /><br /><br />
<div style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'center'}}><TextField id="standard-basic" label="Enter your City" variant="filled" color="success" placeholder="Islamabad" onChange={(event)=> setsearchfor5(event.target.value)} style={{color:'white', width:'200px',fontize:'20px',backgroundColor:'white',borderRadius:'10px'}}/>
</div>{/*<input type="search" defaultvalue="Islamabad" placeholder="Islamabad" onChange={(event)=> setsearchfor5(event.target.value)}/>
*/}
      {!cityfor1 && cityfor2 && cityfor3 && cityfor4 && cityfor5 ? (
  <p style={{textAlign:'center'}}> Sorry no Data Found for this country </p>
):(<div className='tab2wheather'/*style={{display:'flex',justifyContent:'space-evenly'}}*/>
  <div>
  <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent:'space-evenly',
        '& > :not(style)': {
          m: 2,
          width: 240,
          height: 340,
          borderRadius:5,
          border:'solid #1A8324 2px',
          backgroundColor: 'white',
          overflow: 'hidden'
        },
      }}
    ><Paper style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'center'}}>
          <div>
            <br />
          <br /><img src={whethericon} alt="whethericon"  style={{align:'center',height:'120px',paddingBottom:'50px',paddingLeft:'100px'}}/><br />
          <h1 className="wheathercardtitle"> {searchfor5} </h1><br /><h3 style={{textAlign:'center',fontWeight:'lighter'}}>Date : {datefor1}</h3><br /><br /><br /><div className="grenback">
            <br /><br /><h2 className="wheathercardtitle" style={{color:'white'}}>{cityfor5.temp}˚C</h2><br /> <h3 style={{textAlign:'center',fontWeight:'lighter',color:'white'}}>min : {cityfor5.temp_min}˚C | max : {cityfor5.temp_max}˚C </h3></div>
          {/*<div className="wave -one"></div>
          <div className="wave -two"></div>
    <div className="wave -three"></div>*/}
    </div>
          </Paper></Box></div><br />
         <div> <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent:'space-evenly',
        '& > :not(style)': {
          m: 2,
          width: 240,
          height: 340,
          borderRadius:5,
          border:'solid #1A8324 2px',
          backgroundColor: 'white',
          overflow: 'hidden'
        },
      }}
    ><Paper style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'center'}}>
          <div>
            <br />
          <br /><img src={whethericon} alt="whethericon"  style={{align:'center',height:'120px',paddingBottom:'50px',paddingLeft:'100px'}}/><br />
          <h1 className="wheathercardtitle"> {searchfor5} </h1><br /><h3 style={{textAlign:'center',fontWeight:'lighter'}}>Date : {datefor2}</h3><br /><br /><br /><div className="grenback">
            <br /><br /><h2 className="wheathercardtitle" style={{color:'white'}}>{cityfor1.temp}˚C</h2><br /> <h3 style={{textAlign:'center',fontWeight:'lighter',color:'white'}}>min : {cityfor1.temp_min}˚C | max : {cityfor1.temp_max}˚C </h3></div>
          {/*<div className="wave -one"></div>
          <div className="wave -two"></div>
    <div className="wave -three"></div>*/}
    </div>
          </Paper></Box></div><div>
          <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent:'space-evenly',
        '& > :not(style)': {
          m: 2,
          width: 240,
          height: 340,
          borderRadius:5,
          border:'solid #1A8324 2px',
          backgroundColor: 'white',
          overflow: 'hidden'
        },
      }}
    ><Paper style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'center'}}>
          <div>
            <br />
          <br /><img src={whethericon} alt="whethericon"  style={{align:'center',height:'120px',paddingBottom:'50px',paddingLeft:'100px'}}/><br />
          <h1 className="wheathercardtitle"> {searchfor5} </h1><br /><h3 style={{textAlign:'center',fontWeight:'lighter'}}>Date : {datefor3}</h3><br /><br /><br /><div className="grenback">
            <br /><br /><h2 className="wheathercardtitle" style={{color:'white'}}>{cityfor2.temp}˚C</h2><br /> <h3 style={{textAlign:'center',fontWeight:'lighter',color:'white'}}>min : {cityfor2.temp_min}˚C | max : {cityfor2.temp_max}˚C </h3></div>
          {/*<div className="wave -one"></div>
          <div className="wave -two"></div>
    <div className="wave -three"></div>*/}
    </div>
          </Paper></Box></div>
         <div> <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent:'space-evenly',
        '& > :not(style)': {
          m: 2,
          width: 240,
          height: 340,
          borderRadius:5,
          border:'solid #1A8324 2px',
          backgroundColor: 'white',
          overflow: 'hidden'
        },
      }}
    ><Paper style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'center'}}>
          <div>
            <br />
          <br /><img src={whethericon} alt="whethericon"  style={{align:'center',height:'120px',paddingBottom:'50px',paddingLeft:'100px'}}/><br />
          <h1 className="wheathercardtitle"> {searchfor5} </h1><br /><h3 style={{textAlign:'center',fontWeight:'lighter'}}>Date : {datefor4}</h3><br /><br /><br /><div className="grenback">
            <br /><br /><h2 className="wheathercardtitle" style={{color:'white'}}>{cityfor3.temp}˚C</h2><br /> <h3 style={{textAlign:'center',fontWeight:'lighter',color:'white'}}>min : {cityfor3.temp_min}˚C | max : {cityfor3.temp_max}˚C </h3></div>
          {/*<div className="wave -one"></div>
          <div className="wave -two"></div>
    <div className="wave -three"></div>*/}
    </div>
          </Paper></Box></div>
         {/* <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent:'space-evenly',
        '& > :not(style)': {
          m: 2,
          width: 240,
          height: 340,
          borderRadius:5,
          border:'solid #1A8324 2px',
          backgroundColor: 'white',
          overflow: 'hidden'
        },
      }}
    ><Paper style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'center'}}>
          <div>
            <br />
          <br /><img src={whethericon} alt="whethericon"  style={{align:'center',height:'120px',paddingBottom:'50px',paddingLeft:'100px'}}/><br />
          <h1 className="wheathercardtitle"> {searchfor5} </h1><br /><h3 style={{textAlign:'center',fontWeight:'lighter'}}>Date : {datefor5}</h3><br /><br /><br /><div className="grenback">
            <br /><br /><h2 className="wheathercardtitle" style={{color:'white'}}>{cityfor4.temp}˚C</h2><br /> <h3 style={{textAlign:'center',fontWeight:'lighter',color:'white'}}>min : {cityfor4.temp_min}˚C | max : {cityfor4.temp_max}˚C </h3></div>
          
    </div>
          </Paper></Box>*/}
     {/* <Paper  style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'center'}}>
      <div>
          <img src={watericon} alt="watericon" height={120} style={{paddingLeft:'10px'}}/><br /><br />
          <h3 className="cardtitle">Water <br />Sustainability</h3></div>
          </Paper>
      <Paper style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'center'}}>
      <div>
          <img src={farmicon} alt="watericon" height={120} style={{paddingLeft:'10px'}}/><br /><br />
          <h3 className="cardtitle">Water <br />Sustainability</h3></div>
    </Paper>*/}
    </div>
)}
        
  

<br /><br />
        <div style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'center'}}>
        <button class="btn" >Learn more</button></div><br /><br /><br />
    
</div>

      </TabPanel>
      </section>
    </Box>


<br />
<br />

<br />
<br />
<br />
<section id="news">


<div>
<h1 id='newstitle'>Latest News</h1>
<br />
<br />
<br />
<br />
<div className="Newsportion">
<div className="box" data-aos="zoom-in">
<img src={trackter} alt="trackter" height='180px' className='newsimg'/>
<div className="titlecardnews">
<h2 > Trackerter shortage in Pakistan</h2></div>
</div><br /><br />
<div className="mediumcardnews">
<div className="box" data-aos="zoom-up">
<img src={trackter} alt="trackter" height='180px' className='newsimg'/>
</div></div><br /><br />
<div className="box" data-aos="zoom-down">
<img src={trackter} alt="trackter" height='180px' className='newsimg'/>
</div></div>
      
    
    <br />
    <br />
    
    <div style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'center'}}>
        <button class="btn" >Learn more</button></div><br /><br /><br />
</div>



</section>
<br />
    <br />
    <section id="Contactus">
<div className="queryportion">
<div data-aos="fade-left" style={{    padding: '10px 115px'}}>
  <br />
  <h1 className="queryportionheading1">We are Here to Help ! </h1><br /><br />
  <img src={farmerhelp} alt="farmerhelp" className="queryportionimage1"/><br /><br /><br />
  <h2 className="queryportionheading2">please dont hesitate to ask any <br />
question you can contact us </h2><br /><br />
<div style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'center'}}>
        <button class="btn" >Contact us</button></div>
</div>
<div  data-aos="fade-right" className="queryportioninputs">
  <br />
<h1 style={{textAlign:'center', fontSize:'35px'}}>For Query </h1>
<br />
<br /><br />

  <TextField id="filled-basic" label="Name" variant="filled" style={{width:'300px'}}/><br/><br />
    <TextField id="filled-basic" label="Phone" variant="filled" style={{width:'300px'}}/><br/><br />
    <TextField
          id="filled-multiline-static"
          label="Comment"
          multiline
          rows={4}
          defaultValue="Write your comment here .."
          variant="filled"
          style={{width:'300px'}}
        /><br />
        <br />
        <br />
        <br />
        
    <div style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'center'}}>
        <button class="btn" >Contact us</button></div>
</div>

</div>
</section>

</div>
    )
}