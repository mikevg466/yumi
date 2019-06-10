import React from 'react';
import { shallow } from 'enzyme';
import RootComponent from '../../components/Root';
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

describe('Root Component', () => {
  it('renders', () => {
    const wrapper = shallow(<RootComponent {...mockProps} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
