import { Typography } from '@mui/material';
import axios from 'axios';
import {useState,useEffect} from 'react';
import {CircularProgress} from '@mui/material';

export default function Projects(){
    let [loader,setLoader]=useState(true);
    let [Projects,setProjects]=useState(null);

    const getProjectsData = async ()=> axios.get('http://localhost:8000/Projects')
                        .then(res=>{
                            setProjects(res.data)
                            setLoader(false)
                        }).Catch(err => console.log(err))

            useEffect(()=>{
                getProjectsData();
            },[])
        console.log("Projects",Projects)

    return(
        <>
<Typography>1.Walsh and Wavelet Transform For Colour to Gray Image Compression</Typography>
<Typography>2.Accident Detection Using IOT</Typography>
        </>
        
    )
    }