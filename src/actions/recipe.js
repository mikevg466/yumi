import types from './types';

export const selectRecipe = recipe => ({
  type: types.SELECT_RECIPE,
  recipe,
});
