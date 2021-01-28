import {
  LOAD_POKEMON,
  LOAD_POKEMON_FORMES,
  LOAD_ALL_POKEMON,
  POKEMON_NOT_FOUND,
  CLEAR_POKEMON,
  UPDATE_POKEMON,
  UPDATE_POKEMON_FAILED,
} from "./types";

export default function (state, action) {
  const { type, payload } = action;

  switch (type) {
    case CLEAR_POKEMON:
      return {
        ...state,
        pokemon: null,
        formes: [],
      };
    case LOAD_POKEMON:
      return {
        ...state,
        pokemon: payload,
        // evolutionIds: payload.evolutionIds,
        // eggIds: payload.eggIds,
        loading: false,
      };
    case LOAD_POKEMON_FORMES:
      return {
        ...state,
        formes: payload,
        loading: false,
      };
    case LOAD_ALL_POKEMON:
      return {
        ...state,
        pokedex: payload,
        lastId: payload.length,
        loading: false,
      };
    case POKEMON_NOT_FOUND:
      return {
        ...state,
        pokemon: null,
        // evolutionIds: [],
        // eggIds: [],
        formes: [],
        loading: false,
      };
    case UPDATE_POKEMON:
      return {
        ...state,
        pokemon: payload,
        loading: false,
      };
    case UPDATE_POKEMON_FAILED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
