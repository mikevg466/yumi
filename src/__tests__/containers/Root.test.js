import React from 'react';
import render from 'react-test-renderer';
import { bindActionCreators } from 'redux';
import {
  RootContainer,
  mapStateToProps,
  mapDispatchToProps,
} from '../../containers/Root/Root';
import { UserActions } from '../../actions';
import mockStore from '../../__mocks__/initialStore';

const mockDispatchers = bindActionCreators(UserActions, jest.fn());

describe('Root Container', () => {
  it('renders correctly', () => {
    const tree = render.create(<RootContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('outputs the expected state when passed a mock store', () => {
      expect(mapStateToProps(mockStore)).toEqual({
        name: mockStore.user.name,
        greeting: mockStore.user.greeting,
      });
    });
  });

  describe('mapDispatchToProps', () => {
    const dispatchers = mapDispatchToProps(jest.fn());
    Object.keys(mockDispatchers).forEach(key => {
      expect(dispatchers.actions[key]).toEqual(expect.any(Function));
    });
  });
});
