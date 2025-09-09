import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import Navbar from './Components/Navbar';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Notification from './pages/Notification';
import Zones from './pages/Zones';
import Visual from './pages/Visual';
import Layout from './pages/Layout';

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route path='/' element={<Dashboard></Dashboard>} />
          <Route path='/notification' element={<Notification></Notification>} />
          <Route path='/zones' element={<Zones></Zones>} />
          <Route path='/visual' element={<Visual></Visual>} />
        </Route>

      </Routes>
    </Box>

  );
}

export default App;
