import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

export default function Footer({ gameHeight }) {
  return (
    <Grid
      xs={12}
      sx={{
        height: `calc((100vh - ${gameHeight}px) / 2)`,
        backgroundColor: '#abc',
        borderColor: '#fff',
        color: '#fff',
      }}
    >
      FOOTER
    </Grid>
  );
}
