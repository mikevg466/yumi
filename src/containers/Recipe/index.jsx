import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeComponent from '../../components/Recipe';

/**
 * Recipe React Container to be used as the Recipe page
 * @extends Component
 */
class RecipeContainer extends Component {
  /**
   * React Render
   * @return {JSX}
   */
  render() {
    return <RecipeComponent {...this.props} />;
  }
}

const mapStateToProps = ({ recipe }) => ({
  name: recipe.name,
  image: recipe.image,
  ingredients: recipe.ingredients,
  steps: recipe.steps,
});

export default connect(mapStateToProps)(RecipeContainer);
