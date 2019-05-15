import * as UserActions from '../../actions/user';
import types from '../../actions/types';

describe('User Actions', () => {
  describe('action creators', () => {
    it('returns expected action for setName', () => {
      const name = 'testName';
      const expectedAction = {
        type: types.SET_NAME,
        name,
      };
      expect(UserActions.setName(name)).toEqual(expectedAction);
    });

    it('returns expected action for setGreeting', () => {
      const greeting = 'testGreeting';
      const expectedAction = {
        type: types.SET_GREETING,
        greeting,
      };
      expect(UserActions.setGreeting(greeting)).toEqual(expectedAction);
    });
  });
});
