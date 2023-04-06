import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import axios from 'axios';
import {useState,useEffect} from 'react';
import {CircularProgress,Box} from '@mui/material';


export default function Hobbies() {
  let [loader,setLoader]=useState(true);
  let [Hobbies,setHobbies]=useState(null);

  const getHobbiesData= async () => axios.get('http://localhost:8000/Hobbies')
                     .then(res=>{
                      setHobbies(res.data)
                      setLoader(false)
                     }).catch(err => console.log(err))


            useEffect(()=>{
              getHobbiesData();

            },[])
            console.log("Hobbies",Hobbies)
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://files.selecthealth.cloud/api/public/content/253693-Headphones_blog_lg.jpg',
    title: 'Listening Music',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://i.pinimg.com/originals/76/4a/99/764a99294c8db644bc1281a0e4cc3007.jpg',
    title: 'craft works',
    
  },
  {
    img:'https://thumbs.dreamstime.com/z/happy-cute-kids-boy-girl-dance-together-166431082.jpg',
    title: 'Dancing',
    
  },
  {
    img: 'https://pbi.uii.ac.id/wp-content/uploads/2022/03/Five-Reasons-Why-Watching-Movies-Is-Beneficial-to-Our-Personal-Development.jpg',
    title: 'watching Movies',
    
    cols: 2,
  },
];