import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrap = styled.div`
  width: 100%;
  padding: 2rem;
  border-top: 1px solid #eff1e7;
  background: white;
  display: flex;
  align-items: center;

  &:first-of-type {
    border-top: none;
    @media (min-width: 1001px) {
      border-top-left-radius: 0.8rem;
      border-top-right-radius: 0.8rem;
    }
  }

  &:last-of-type {
    @media (min-width: 1001px) {
      border-bottom-left-radius: 0.8rem;
      border-bottom-right-radius: 0.8rem;
    }
  }

  h1 {
    font-size: 1.3rem;
  }

  h2 {
    font-size: 1.3rem;
    font-weight: normal;
  }

  p {
    font-size: 1.1rem;
    margin-top: 1rem;
    color: #757677;
  }

  div {
    flex-grow: 1;
  }

  button {
    border: 0;
    padding: 0;
    margin: 0;
    background: none;
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    background: #f4f5ed;
    color: #9fa195;
    display: flex;
    justify-content: center;
    line-height: 0;
    align-items: center;
    font-size: 2rem;
    cursor: pointer;
    box-shadow: 0 2px 4px 0px rgba(0, 0, 0, 0.4);
  }
`;

class Item extends Component {
  static propTypes = {
    item: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      image: PropTypes.string,
      largeImage: PropTypes.string,
      upc: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      serving: PropTypes.string.isRequired,
      servingSize: PropTypes.number.isRequired,
      servingsPerContainer: PropTypes.number,
      servingSizeInGrams: PropTypes.bool.isRequired,

      calories: PropTypes.number.isRequired,
      protein: PropTypes.number.isRequired,
      carbs: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
      satFat: PropTypes.number,
      unsatFat: PropTypes.number,
      fiber: PropTypes.number,
      sugar: PropTypes.number,
      sodium: PropTypes.number,
      cholesterol: PropTypes.number,
      potassium: PropTypes.number,
      sugarAlcohol: PropTypes.number,
    }).isRequired,
  };

  addToDay = event => {
    event.preventDefault();
    alert(JSON.stringify(this.props.item));
  };

  /*
    * description
    * image
    * largeImage
    * upc
    * brand
    * title
    * category
    * serving
    * servingSize
    * servingsPerContainer
    * servingSizeInGrams
  */

  render() {
    const { item } = this.props;
    const netCarbs = item.carbs - item.sugarAlcohol - item.fiber;
    return (
      <Wrap>
        <div>
          <h1>{item.title}</h1>
          <h2>{item.brand}</h2>

          <p>
            {item.calories} cals • {item.serving} ({item.servingSize}{' '}
            {item.servingSizeInGrams ? 'g' : 'ml'})
          </p>
        </div>

        <button type="button" onClick={this.addToDay}>
          +
        </button>
      </Wrap>
    );
  }
}

export default Item;
