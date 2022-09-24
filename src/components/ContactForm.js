// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import { Card, CardActions, Button, CardContent, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';



const ContactForm = () => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada

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
                        defaultValue=""
                        variant="filled"
                    />
                    <TextField
                        fullWidth
                        sx={{ mb: 1 }}
                        required
                        id="phone"
                        label="Phone"
                        defaultValue=""
                        variant="filled"
                    />
                    <TextField
                        fullWidth
                        sx={{ mb: 1 }}
                        required
                        id="email"
                        label="Email"
                        defaultValue=""
                        variant="filled"
                    />

                    <TextField
                        fullWidth
                        sx={{ mb: 1 }}
                        required
                        id="pathurl"
                        label="Photo URL"
                        defaultValue=""
                        variant="filled"
                    />
                </CardContent>
                <CardActions>
                    <Button color="success">Add New</Button>
                </CardActions>
            </Card>
        </>
    );
}

export default ContactForm;