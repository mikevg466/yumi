import types from '../actions/types';

export const initialState = {
  name: 'Teriyaki Pulled Pork',
  typeTags: ['Pork', 'Asian'],
  cookMethodTags: ['Slow Cooker'],
  image:
    'https://www.seriouseats.com/recipes/images/2016/06/20160701-sous-vide-pulled-pork-16-1500x1125.jpg',
  ingredients: [
    { type: 'pork', amount: '1 lb' },
    { type: 'teriyaki sauce', amount: '1 cup' },
    { type: 'water', amount: '1/2 cup' },
    { type: 'dry rub', amount: '1 cup' },
    { type: 'water', amount: '1/2 cup' },
  ],
  steps: [
    'pour teriyaki sauce and water into crock pot',
    'place pork in the crock pot',
    'dry rub the top of the pork',
    'cook on medium for 4 hours',
    'shred pork',
    'add pork back in crock pot on warm setting for 1 hour',
  ],
};

/**
 * The main user reducer function to be exported
 * @param  {Object} [state=initialState]
 *    The current user store to be manipulated.
 *    If null, then the default initial state.
 * @param  {Object} action
 *    The reducer action, containing the action type and data to be processed.
 * @return {Object} The updated user state.
 */
export default function recipeReducer(state = initialState, action) {
  switch (action.type) {
    case types.SELECT_RECIPE:
      return action.recipe || initialState;
    default:
      return state;
  }
}
