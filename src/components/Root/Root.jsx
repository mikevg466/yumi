import React, { PureComponent } from 'react';
import { RecipeContainer } from '../../containers/Recipe';
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
    return (
      <div className='Root'>
        <RecipeContainer />
      </div>
    );
  }
}

export default RootComponent;
