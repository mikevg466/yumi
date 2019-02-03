import { createStore } from 'redux';
import userReducer, { initialState } from '../../reducers/user';
import types from '../../actions/types';

const getExpectedState = newState => Object.assign({}, initialState, newState);

describe('User Reducer', () => {
  describe('initial state', () => {
    let store;
    beforeEach(() => {
      store = createStore(userReducer);
    });

    it('has the correct initial state', () => {
      expect(store.getState()).toEqual(initialState);
    });
  });

  describe('reducers', () => {
    let store;
    beforeEach(() => {
      store = createStore(userReducer);
    });

    it('SET_NAME processes correctly', () => {
      const testName = 'testName';
      const action = {
        type: types.SET_NAME,
        name: testName,
      };

      store.dispatch(action);
      expect(store.getState()).toEqual(getExpectedState({ name: testName }));
    });

    it('SET_GREETING processes correctly', () => {
      const testGreeting = 'testGreeting';
      const action = {
        type: types.SET_GREETING,
        greeting: testGreeting,
      };

      store.dispatch(action);
      expect(store.getState()).toEqual(
        getExpectedState({ greeting: testGreeting })
      );
    });
  });
});
