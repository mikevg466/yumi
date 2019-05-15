import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/**
 * Recipe React Component containing the presentational Recipe
 * @extends PureComponent
 */
export default class RecipeComponent extends PureComponent {
  /**
   * React Render
   * @return {JSX}
   */
  render() {
    const { name, image, ingredients, steps } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        {image && <img alt='recipe' src={image} />}
        <ul>
          {ingredients.map(ingredient => (
            <li key={ingredient.type}>
              {`${ingredient.type} ${ingredient.amount}`}
            </li>
          ))}
        </ul>
        <ul>
          {steps.map(step => (
            <li key={step}>{step}</li>
          ))}
        </ul>
      </div>
    );
  }
}

RecipeComponent.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  ingredients: PropTypes.array,
  steps: PropTypes.array,
};
