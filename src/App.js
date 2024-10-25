import React from 'react';
import { ChakraProvider, Box, Grid, theme } from '@chakra-ui/react';
import Navbar from './pages/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Settings from './pages/Settings';
import Rooms from './pages/Rooms';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Navbar} />
          <Route exact path="/:rooms" Component={Rooms} />
          <Route exact path="/settings" Component={Settings} />
        </Routes>
      </BrowserRouter>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}></Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
