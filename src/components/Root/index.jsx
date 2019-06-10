import React, { PureComponent } from 'react';
import RecipeContainer from '../../containers/Recipe';
import './Root.scss';

/**
 * Root React Component containing the presentational Root
 * @extends PureComponent
 */
export default class RootComponent extends PureComponent {
  /**
   * React Render
   * @return {JSX}
   */
  render() {
    return (
      <div className='root'>
        <RecipeContainer />
      </div>
    );
  }
}
