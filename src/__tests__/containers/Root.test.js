import React from 'react';
import { shallow } from 'enzyme';
import {
  RootContainer,
  mapStateToProps,
  mapDispatchToProps,
} from '../../containers/Root';
import { userInitialState } from '../../reducers/user';

const mockState = {
  name: userInitialState.name,
  greeting: userInitialState.greeting,
};
const mockDispatchers = {
  setName: jest.fn(),
  setGreeting: jest.fn(),
};
const mockProps = {
  ...mockState,
  ...mockDispatchers,
};

describe('Root Container', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<RootContainer {...mockProps} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('outputs the expected state when passed a mock store', () => {
      expect(mapStateToProps({ user: userInitialState })).toEqual(mockState);
    });
  });

  describe('mapDispatchToProps', () => {
    expect(Object.keys(mapDispatchToProps)).toEqual(
      Object.keys(mockDispatchers)
    );
  });
});
