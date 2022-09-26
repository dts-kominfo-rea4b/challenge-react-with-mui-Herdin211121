// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (
        <List sx={{ width: '100%', maxWidth: 650, bgcolor: '#DBF6F0', marginLeft: 12 }}>
            {data.map((todo, index) => {
                return (
                    <ListItem key={index} divider>
                        <ListItemAvatar>
                            <Avatar >
                                {/* <ImageIcon /> */}
                                <img src={todo.photo}/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={todo.name} secondary={ todo.phone + "\n" + todo.email} />
                    </ListItem>
                );
            })}
        </List>
    );
};

export default Contact;
