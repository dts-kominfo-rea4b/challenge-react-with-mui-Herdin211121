// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    let newData;
    if (Array.isArray(data)) {
        return (
            <List sx={{ width: '100%', maxWidth: 650, bgcolor: '#DBF6F0', marginLeft: 12 }}>
                { data.map((todo, index) => {
                    return (
                        <ListItem key={index} divider>
                            <ListItemAvatar>
                                <Avatar src={todo.photo}>
                                    <ImageIcon />
                                    {/* <img /> */}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={todo.name} secondary={
                              <div>
                                <div>{todo.phone}</div>
                                <div>{todo.email}</div>
                              </div>
                            } />
                        </ListItem>
                    );
                })}
            </List>
        );
    } else {
        return (
            <List sx={{ width: '100%', maxWidth: 650, bgcolor: '#DBF6F0', marginLeft: 12 }}>
                <ListItem key={'0'} divider>
                    <ListItemAvatar>
                        <Avatar src={data.photo}>
                            <ImageIcon />
                            {/* <img /> */}
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={data.name} secondary={
                        <div>
                        <div>{data.phone}</div>
                        <div>{data.email}</div>
                        </div>
                    } />
                </ListItem>
            </List>
        );
        
    }

    
    //Contact berisi foto, nama, telepon, dan email
    
};

export default Contact;
