import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

import { useEffect, useState } from 'react';

import Header from './Header';
import Game from './Game';
import Footer from './Footer';
export default function App() {
  const [gameHeight, setGameHeight] = useState(0);

  return (
    <Grid
      container
      sx={{
        height: '100vh',
        backgroundColor: '#111',
        justifyContent: 'center',
        alignItems: 'center',
        overflowY: 'hidden',
      }}
    >
      <Header gameHeight={gameHeight} />
      <Game setGameHeight={setGameHeight} />
      <Footer gameHeight={gameHeight} />
    </Grid>
  );
}
