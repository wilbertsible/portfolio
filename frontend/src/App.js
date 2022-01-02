import './App.css';
import React from 'react'
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Route, Routes } from "react-router-dom";

import Home from './pages/Home';

const theme = createTheme();

function App() {
  const [state, setState] = React.useState({
    mobileView:false
  })

  const {mobileView} = state;

  React.useEffect(() =>{
    const setResponsiveness = () => {
        return window.innerWidth < 900
        ? setState((prevState) => ({...prevState, mobileView: true}))
        : setState((prevState) => ({ ...prevState, mobileView: false}));
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
        <Route exact path="/" element={<Home mobileView={mobileView} />} />
      </Routes>
    </ThemeProvider>
    
  );
}

export default App;
