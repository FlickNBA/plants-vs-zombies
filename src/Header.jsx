import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Typography } from '@mui/material';
import { plantData } from './Plants';
import { Box } from '@mui/material';
import { firstUpper } from './utilities';

export default function Header({
  gameHeight,
  money,
  chosenPlant,
  setChosenPlant,
}) {
  function choosePlant(e) {
    setChosenPlant(e.target.parentNode.dataset.plant);
  }

  function createMenu() {
    let menu = [];
    plantData.forEach((plant, i) => {
      //   console.log(plant);
      menu.push(
        <Grid
          onClick={(e) => choosePlant(e)}
          xs={1}
          key={i}
          data-plant={plant.name}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
        >
          <Box
            component='img'
            sx={{
              objectFit: 'contain',
              textAlign: 'center',
              width: '50%',
              height: '50%',
            }}
            src={`../src/${plant.image}`}
          ></Box>
          <Typography
            variant='h6'
            color='#111'
            sx={{
              textAlign: 'center',
              fontWeight: 500,
            }}
          >
            {plant.name} ({plant.type})
            <br />
            Cost: {plant.cost}
            <br />
            Life: {plant.life}
            <br />
            {Object.keys(plant).length != 5
              ? `${firstUpper(Object.keys(plant)[5])}: ${
                  plant[Object.keys(plant)[5]]
                }`
              : ''}
          </Typography>
        </Grid>
      );
    });
    return menu;
  }

  return (
    <Grid
      container
      columns={12}
      sx={{
        height: `calc((100vh - ${gameHeight}px) / 2)`,
        width: '100%',
        backgroundColor: '#cba',
        borderColor: '#fff',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid
        container
        xs={4}
        columns={plantData.length}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {createMenu()}
      </Grid>
      <Grid xs={8}>
        <Typography
          variant='h3'
          color='#111'
          sx={{
            textAlign: 'center',
            fontWeight: 500,
          }}
        >
          PvZ by FNBA Money: {money}
          <br />
          Chosen plant: {chosenPlant}
        </Typography>
      </Grid>
    </Grid>
  );
}
