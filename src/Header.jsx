import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

export default function Header({ gameHeight }) {
  return (
    <Grid
      xs={12}
      sx={{
        height: `calc((100vh - ${gameHeight}px) / 2)`,
        backgroundColor: '#cba',
        borderColor: '#fff',
        color: '#fff',
      }}
    >
      HEADER
    </Grid>
  );
}
