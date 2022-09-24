// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar,Divider } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (<>
        <List sx={{ width: '100%', maxWidth: 650, bgcolor: '#DBF6F0', marginLeft:12 }}>
            <ListItem divider>
                <ListItemAvatar>
                    <Avatar>
                        <ImageIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Nama" secondary={
                    <div>
                        <div>Telepon</div>
                        <div>Email</div>
                    </div>
                } />
               
            </ListItem>
        </List>
    </>);
};

export default Contact;
