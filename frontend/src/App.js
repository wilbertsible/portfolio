import './App.css';
import React, {useEffect, useState} from 'react'

import axios from 'axios';

import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Route, Routes } from "react-router-dom";

import Home from './pages/Home';

const theme = createTheme();

function App() {
  const [mobileView, setMobileView] = useState(false);
  const [socials, setSocials] = useState([]);

  const url = "http://127.0.0.1:5000"
    
  useEffect(() => {
    fetchSocials();
  }, [])

  async  function fetchSocials(){
    await axios.get(url + "/social")
    .then((socialsResponse) =>{
      const socials = JSON.parse(socialsResponse.data);
      setSocials(socials);
    })
  }

  useEffect(() =>{
    const setResponsiveness = () => {
        return window.innerWidth < 900
        ? setMobileView(true)
        : setMobileView(false);
    };
    setResponsiveness();
    window.addEventListener('resize', () => setResponsiveness());
    return () => {
        window.removeEventListener('resize', () => setResponsiveness());
    }
  }, []);

  return (
    <ThemeProvider theme = {theme}>
      <CssBaseline />
      <Routes>
        <Route exact path="/" 
        element={
          <Home 
          mobileView={mobileView}
          socials={socials}
          />} />
      </Routes>
    </ThemeProvider>
    
  );
}

export default App;
