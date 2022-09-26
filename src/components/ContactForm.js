// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import { Card, CardActions, Button, CardContent, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';


const ContactForm = ({ handleClick }) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [url, setUrl] = useState('');

    return (
        <>
            <Card sx={{ width: 640, backgroundColor: '#F3F1EB', marginLeft: 10 }}>
                <CardContent>
                    <TextField
                        fullWidth
                        sx={{ mb: 1 }}
                        required
                        id="name"
                        label="Name"
                        variant="filled"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    <TextField
                        fullWidth
                        sx={{ mb: 1 }}
                        required
                        id="phone"
                        label="Phone"
                        variant="filled"
                        value={phone}
                        onChange={(e) => {
                            setPhone(e.target.value);
                        }}
                    />
                    <TextField
                        fullWidth
                        sx={{ mb: 1 }}
                        required
                        id="email"
                        label="Email"
                        variant="filled"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />

                    <TextField
                        fullWidth
                        sx={{ mb: 1 }}
                        required
                        id="pathurl"
                        label="Photo URL"
                        variant="filled"
                        value={url}
                        onChange={(e) => {
                            setUrl(e.target.value);
                        }}
                    />
                </CardContent>
                <CardActions>
                    <Button
                        color="success"
                        onClick={() => {
                            handleClick(name, phone, email, url);
                            setName('');
                            setPhone('');
                            setEmail('');
                            setUrl('');
                        }}>
                        Add New
                    </Button>
                </CardActions>
            </Card>
        </>
    );
}

export default ContactForm;