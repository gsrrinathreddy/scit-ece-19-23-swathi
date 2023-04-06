import { Typography } from '@mui/material';
import axios from 'axios';
import {useState,useEffect} from 'react';
import {CircularProgress,Box} from '@mui/material';


export default function About(){
    let[loader,setLoader]=useState(true);
    let[About,setAbout]=useState(null);
     
     const getAboutData = async()=> axios.get('http://localhost:8000/About')
                 .then(res=>{
                    setAbout(res.data)
                    setLoader(false)
                 }).catch(err=> console.log(err))


                 useEffect(()=>{
                    getAboutData();
                 },[])

                console.log("About",About)

    return(
        <>
        
<Typography>Name: Bopparaju Swathi</Typography>
<Typography>Father Name: B.Rajender</Typography>
<Typography>Mother Name: B.Suma</Typography>
<Typography>Email: way2swathi2002@gmail.com</Typography>
<Typography>Phone No.: 7995046011</Typography>
        </>
        
    )
    }