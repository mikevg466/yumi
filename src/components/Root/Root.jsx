import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/images/logo.svg';
import './Root.css';

/**
 * Root React Component containing the presentational Root
 * @extends PureComponent
 */
class RootComponent extends PureComponent {
  /**
   * React Render
   * @return {JSX}
   */
  render() {
    const { greeting, name, actions } = this.props;
    return (
      <div className='Root'>
        <header className='Root-header'>
          <img alt='logo' className='Root-logo' src={logo} />
          <p>
            {`${greeting} `}
            <input
              onChange={e => actions.setName(e.target.value)}
              value={name}
            />
            {'!'}
          </p>
          <a
            className='Root-link'
            href='https://reactjs.org'
            rel='noopener noreferrer'
            target='_blank'
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

RootComponent.propTypes = {
  name: PropTypes.string,
  greeting: PropTypes.string,
  actions: PropTypes.object,
};

export default RootComponent;
