import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

export default function Plants() {
  return (
    <Grid
      xs={9}
      sx={{
        position: 'absolute',
        height: '82%',
        left: '18%',
        top: '13%',
        width: '52%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderColor: '#fff',
        color: '#fff',
      }}
    ></Grid>
  );
}
