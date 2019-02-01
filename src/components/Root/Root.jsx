import React, { PureComponent } from 'react';
import logo from '../../assets/images/logo.svg';
import './Root.css';

/**
 * Root React Component to be initialized in the main index.js file
 * @extends PureComponent
 */
class Root extends PureComponent {
  /**
   * React Render
   * @return {JSX}
   */
  render() {
    return (
      <div className='Root'>
        <header className='Root-header'>
          <img alt='logo' className='Root-logo' src={logo} />
          <p>
            Edit <code>src/Root.js</code> and save to reload.
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

export default Root;
