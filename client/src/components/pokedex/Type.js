import React, { Fragment, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { any } from "prop-types";
import { PokemonContext } from "../../context";
import Spinner from "../layout/Spinner";
import { SearchFilter } from "../common";

export const Type = ({ match }) => {
  const { getAllPokemon, pokedex, loading } = useContext(PokemonContext);

  const [filteredPokedex, setFilteredPokedex] = useState([]);
  const [type, setType] = useState([]);
  const [showFormes, setShowFormes] = useState(false);
  const [shinySprites, setShinySprites] = useState(false);

  useEffect(() => {
    getAllPokemon();
  }, []);

  useEffect(() => {
    setType(
      pokedex.filter((pokemon) => pokemon.types.includes(match.params.type))
    );
  }, [pokedex]);

  const toggleShowForms = (e) => {
    e.preventDefault();
    setShowFormes(!showFormes);
  };

  const toggleShinySprites = (e) => {
    e.preventDefault();
    setShinySprites(!shinySprites);
  };

  return (
    <Fragment>
      {pokedex === null || loading ? (
        <Fragment>
          <Spinner />
        </Fragment>
      ) : (
        <Fragment>
          <Link to="/types" className="btn btn-dark">
            To Types
          </Link>
          <br />
          <br />
          <h1 className="large text-primary">{match.params.type} Types</h1>
          <Fragment>
            <SearchFilter
              pokedex={type}
              setFilteredPokedex={(filtered) => setFilteredPokedex(filtered)}
              showBothTypes={false}
            />
            <hr style={{ marginTop: "1em" }} />
            <br />
            {!showFormes ? (
              <button
                className="btn btn-primary"
                onClick={(e) => toggleShowForms(e)}
              >
                Show Formes: Off
              </button>
            ) : (
              <button
                className="btn btn-primary"
                onClick={(e) => toggleShowForms(e)}
              >
                Show Formes: On
              </button>
            )}
            {!shinySprites ? (
              <button
                className="btn btn-primary"
                onClick={(e) => toggleShinySprites(e)}
              >
                Shiny Sprites: Off
              </button>
            ) : (
              <button
                className="btn btn-primary"
                onClick={(e) => toggleShinySprites(e)}
              >
                Shiny Sprites: On
              </button>
            )}
            <hr style={{ marginTop: "1em" }} />
            {filteredPokedex.map((
              pokemon // for each pokemon in the pokedex
            ) =>
              !showFormes ? (
                Math.floor(pokemon.id) === pokemon.id ? (
                  <Link key={pokemon.name} to={`/pokedex/${pokemon.id}`}>
                    {/* Create a link leading to the pokemon's page */}
                    <div className="pokedex-item">
                      {!shinySprites ? (
                        <img
                          src={pokemon.sprite}
                          className="sprite pokedex-sprite"
                          alt={pokemon.name}
                        />
                      ) : (
                        <img
                          src={pokemon.shinySprite}
                          className="sprite pokedex-sprite"
                          alt={pokemon.name}
                        />
                      )}
                      {/* Pokemon's sprite */}
                      <span className="caption">
                        [
                        {pokemon.name
                          .split(" ")[0]
                          .substring(pokemon.name.split(" ")[0].length - 1) ===
                          "." || // this covers for pokemon like Mr. Mime
                        pokemon.name
                          .split(" ")[0]
                          .substring(pokemon.name.split(" ")[0].length - 1) ===
                          ":" // this covers for pokemon like Type: Null
                          ? pokemon.name.split(" ")[0] +
                            " " +
                            pokemon.name.split(" ")[1]
                          : pokemon.name.split(" ")[0] === "Arceus-Normal" // cover for Arceus
                          ? "Arceus"
                          : pokemon.name
                              .split(" ")[0]
                              .substring(
                                0,
                                pokemon.name.split(" ")[0].length - 1
                              ) === "Indeedee"
                          ? "Indeedee" // cover for Indeedee
                          : pokemon.name
                              .split(" ")[0]
                              .substring(
                                0,
                                pokemon.name.split(" ")[0].length - 1
                              ) === "Meowstic"
                          ? "Meowstic" // cover for Meowstic
                          : pokemon.name.split(" ")[0] === "Tapu"
                          ? pokemon.name //cover for Tapus
                          : pokemon.name === "Mime Jr."
                          ? pokemon.name //cover for Mime Jr.
                          : pokemon.name.split(" ")[0]}
                        ]
                      </span>
                      {/* Pokemon's name */}
                    </div>
                  </Link>
                ) : (
                  ""
                )
              ) : (
                <Link key={pokemon.name} to={`/pokedex/${pokemon.id}`}>
                  {/* Create a link leading to the pokemon's page */}
                  <div className="pokedex-item">
                    {!shinySprites ? (
                      <img
                        src={pokemon.sprite}
                        className="sprite pokedex-sprite"
                        alt={pokemon.name}
                      />
                    ) : (
                      <img
                        src={pokemon.shinySprite}
                        className="sprite pokedex-sprite"
                        alt={pokemon.name}
                      />
                    )}
                    {/* Pokemon's sprite */}
                    <span className="caption">[{pokemon.name}]</span>
                    {/* Pokemon's name */}
                  </div>
                </Link>
              )
            )}
          </Fragment>
        </Fragment>
      )}
    </Fragment>
  );
};

Type.propTypes = {
  match: any.isRequired,
};
