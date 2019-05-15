import React from 'react';
import { shallow } from 'enzyme';
import { bindActionCreators } from 'redux';
import RootComponent from '../../components/Root';
import { UserActions } from '../../actions';

const mockDispatchers = bindActionCreators(UserActions, jest.fn());

describe('Root Component', () => {
  it('renders', () => {
    const wrapper = shallow(
      <RootComponent
        actions={mockDispatchers}
        greeting='testGreeting'
        name='testName'
      />
    );
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
