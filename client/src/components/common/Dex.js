import React from "react";
import { array, func, number } from "prop-types";
import { Grid } from "@material-ui/core";
import { PokemonSprite } from "./PokemonSprite";

export const Dex = ({ dex, onClick, isVisible, perRow }) => {
  return (
    <Grid container spacing={3}>
      {dex.map((pokemon, index) => (
        <Grid item key={index} xs={12 / perRow}>
          <PokemonSprite
            sprite={pokemon.sprite}
            caption={pokemon.name}
            alt={pokemon.name}
            visible={isVisible(index)}
            onClick={() => onClick({ pokemon, index })}
          />
        </Grid>
      ))}
    </Grid>
  );
};

Dex.propTypes = {
  dex: array.isRequired,
  onClick: func,
  isVisible: func,
  perRow: number,
};

Dex.defaultProps = {
  onClick: () => {},
  isVisible: () => {
    return true;
  },
  perRow: 6,
};
