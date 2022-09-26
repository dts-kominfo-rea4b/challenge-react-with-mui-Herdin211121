import './App.css';

import React, { useState } from 'react';

import Box from '@mui/material/Box';

import Header from './components/Header';
import ContactForm from './components/ContactForm';
import Contact from './components/Contact';
import contactsJSON from './data/contacts.json';

// Uncomment untuk memuat daftar kontak
// import contactsJSON from './data/contacts.json';
const App = () => {

  //console.log(contactsJSON);
  // contactsJSON
  const [data, setData] = useState(contactsJSON);
  // const [data, setData] = useState([]);
  // const x = JSON.parse(JSON.stringify(contactsJSON));
  const handleClick = (name, phone, email, url) => {
    setData(data => [...data,
    {
      name: name,
      phone: phone,
      email: email,
      photo: url
    }
    ]);

    // setData(Dataset => ({
    //   ...data,
    //   [ 'name' ]: name, [ 'phone' ]: phone, [ 'email' ]: email, [ 'photo' ]: url
    // }))

    // setData(Dataset => ({
    //   ...data,myObj1
    // }))

  };

  //console.log(data);

  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  return (
    <div className="App">
      <Header />
      <Box sx={{ display: 'flex', mt: 10 }}>
        <ContactForm handleClick={handleClick} />
        <Contact data={data}/>
      </Box>

    </div>
  );
};

export default App;
