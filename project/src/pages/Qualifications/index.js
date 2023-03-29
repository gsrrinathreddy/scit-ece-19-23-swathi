import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Qualifications() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 3}}>
      <h1 className='mode'>Qualifications</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sree Chaitanya" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVLq3bWGKgwuPOhgXP1I6F7v8-W4Ts3PAeZFmAVXBXlQ&s" />
        </ListItemAvatar>
        <ListItemText
          primary="Sree Chaitanya Institute of Technological Sciences"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                76% CGPA
                </Typography>
              {" — B.Tech, Electronics and Communication Engineering"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Kakatiya" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.facebook.com%2F1074681672598818%2Fphotos%2Fa.1074683715931947%2F1074683769265275%2F&psig=AOvVaw0jNyRjR7dbIa_P0nCwrcnC&ust=1680104470092000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIiMjoD7_v0CFQAAAAAdAAAAABAY" />
        </ListItemAvatar>
        <ListItemText
          primary="Kakatiya Junior College"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                91% CGPA
              </Typography>
              {" — Intermediate studies with Maths,Physics&Chemistry"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Government" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftelanganatoday.com%2Fgovt-school-teachers-across-telangana-to-get-20000-tablet-pcs&psig=AOvVaw2EHsIfig4aWibzVQ51I97s&ust=1680104806566000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJChqKD8_v0CFQAAAAAdAAAAABAE" />
        </ListItemAvatar>
        <ListItemText
          primary="Government High School"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                88% CGPA
              </Typography>
              {' — Higher Secondory Education with Computer Classes'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}