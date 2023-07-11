import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Box } from '@mui/material';
import { randomColor } from './utilities';
import { useState, useEffect } from 'react';

class Plant {
  constructor(name, cost, life, image) {
    this.name = name;
    this.cost = cost;
    this.life = life;
    this.image = image;
  }
}

class MoneyMaker extends Plant {
  constructor(name, cost, life, image, earns) {
    super(name, cost, life, image);
    this.earns = earns;
  }
}

class Attacker extends Plant {
  constructor(name, cost, life, image, damage) {
    super(name, cost, life, image);
    this.damage = damage;
  }
}

class Tank extends Plant {
  constructor(name, cost, life, image) {
    super(name, cost, life, image);
  }
}

export const plantData = [
  {
    name: 'Sunflower',
    type: 'MoneyMaker',
    cost: 50,
    life: 100,
    image: 'Sunflower.webp',
    earns: 25, //every 24 seconds
  },
  {
    name: 'Peashooter',
    type: 'Attacker',
    cost: 175,
    life: 100,
    image: 'Peashooter.webp',
    damage: 25,
  },
  {
    name: 'Wallnut',
    type: 'Tank',
    cost: 50,
    life: 200,
    image: 'Wallnut.webp',
  },
];

const plantConstructors = {
  MoneyMaker,
  Attacker,
  Tank,
};

export default function Plants({
  plantSpaces,
  setPlantSpaces,
  money,
  setMoney,
  chosenPlant,
}) {
  useEffect(() => {
    console.log('useeffect only once');
    setPlantSpaces(preparePlantSpaces());
  }, [setPlantSpaces]);

  function placePlant(i, plantName) {
    const plant = plantSpaces[i]?.props?.plant;

    const selectedPlantData = plantData.find((data) => data.name === plantName);

    const { type, name, cost, life, image, ...extraProperties } =
      selectedPlantData;

    const PlantConstructor = plantConstructors[type];

    console.log(money);

    if (!plant && cost <= money) {
      const newPlant = new PlantConstructor(
        name,
        cost,
        life,
        image,
        ...Object.values(extraProperties)
      );

      setMoney(money - cost);

      setPlantSpaces((prevPlantSpaces) => {
        const newPlantSpaces = [...prevPlantSpaces];
        newPlantSpaces[i] = React.cloneElement(newPlantSpaces[i], {
          plant: newPlant,
        });
        return newPlantSpaces;
      });
    } else {
      console.log('Already planted!');
    }
  }

  function preparePlantSpaces() {
    console.log('plant spacing');
    let PS = [];
    for (let i = 0; i < 45; i++) {
      const plant = plantSpaces[i]?.props?.plant;
      const whatToDisplay = plant ? (
        <Box
          component='img'
          sx={{
            objectFit: 'contain',
            width: '100%',
            height: '100%',
          }}
          src={`../src/${plant.image}`}
        ></Box>
      ) : (
        ''
      );
      PS.push(
        <Grid
          key={i}
          plant={plant}
          onClick={() => placePlant(i, chosenPlant)}
          xs={1}
          sx={{
            cursor: 'pointer',
            height: '20%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // border: 1,
            // borderColor: '#fff',
          }}
        >
          {whatToDisplay}
        </Grid>
      );
    }
    return PS;
  }

  return (
    <Grid
      container
      columns={9}
      sx={{
        position: 'absolute',
        height: '82%',
        left: '18%',
        top: '13%',
        width: '52%',
        borderColor: '#fff',
        color: '#fff',
      }}
    >
      {preparePlantSpaces()}
    </Grid>
  );
}
