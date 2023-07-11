import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

import { useEffect, useState } from 'react';

import Header from './Header';
import Game from './Game';
import Footer from './Footer';
export default function App() {
  const [gameHeight, setGameHeight] = useState(0);
  const [plantSpaces, setPlantSpaces] = useState([]);
  const [money, setMoney] = useState(500);
  const [chosenPlant, setChosenPlant] = useState(null);

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
      <Header
        gameHeight={gameHeight}
        money={money}
        chosenPlant={chosenPlant}
        setChosenPlant={setChosenPlant}
      />
      <Game
        setGameHeight={setGameHeight}
        plantSpaces={plantSpaces}
        setPlantSpaces={setPlantSpaces}
        money={money}
        setMoney={setMoney}
        chosenPlant={chosenPlant}
      />
      <Footer gameHeight={gameHeight} />
    </Grid>
  );
}
