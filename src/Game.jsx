import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { useEffect, useRef } from 'react';
import Plants from './Plants';

export default function Game({ setGameHeight }) {
  const gameRef = useRef(null);

  useEffect(() => {
    console.log('calculating');
    console.log(gameRef.current);
    setGameHeight(gameRef.current.clientHeight);
  }, [setGameHeight]);

  return (
    <Grid
      ref={gameRef}
      container
      xs={12}
      sx={{
        position: 'relative',
        aspectRatio: '14 / 6',
        backgroundImage: 'url(./src/day.png)',
        backgroundSize: 'cover',
      }}
    >
      <Plants />
    </Grid>
  );
}
