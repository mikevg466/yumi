import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setName, setGreeting } from '../../actions/user';
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

export const mapDispatchToProps = {
  setName,
  setGreeting,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootContainer);
