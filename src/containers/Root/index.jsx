import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { UserActions } from '../../actions';
import RootComponent from '../../components/Root';

/**
 * Root React Container to be initialized in the main index.js file
 * @extends Component
 */
export class RootContainer extends Component {
  /**
   * React Render
   * @return {JSX}
   */
  render() {
    return <RootComponent {...this.props} />;
  }
}

export const mapStateToProps = ({ user }) => ({
  name: user.name,
  greeting: user.greeting,
});

export const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(UserActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootContainer);
