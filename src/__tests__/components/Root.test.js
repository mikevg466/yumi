import React from 'react';
import render from 'react-test-renderer';
import { bindActionCreators } from 'redux';
import { RootComponent } from '../../components/Root';
import { UserActions } from '../../actions';

const mockDispatchers = bindActionCreators(UserActions, jest.fn());

describe('Root Component', () => {
  it('redners', () => {
    const tree = render
      .create(
        <RootComponent
          actions={mockDispatchers}
          greeting='testGreeting'
          name='testName'
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
