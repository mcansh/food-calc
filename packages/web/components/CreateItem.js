import React from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import Head from 'next/head';

// const CREATE_ITEM_MUTATION = gql`
// id
// title
// description
// image
// largeImage
// brand
// category
// serving
// servingSize
// servingsPerContainer
// servingSizeInGrams

// calories
// protein
// carbs
// fat
// satFat
// unsatFat
// fiber
// sugar
// sodium
// cholesterol
// potassium
// sugarAlcohol`;

const Input = ({ name, type, value, text, onChange, required }) => (
  <fieldset>
    <label htmlFor={name}>
      {text}
      <input
        type={type}
        id={name}
        name={name}
        placeholder={name}
        required={required}
        value={value}
        onChange={onChange}
      />
    </label>
  </fieldset>
);

class CreateItem extends React.Component {
  state = {
    title: '',
    description: '',
    image: '',
    largeImage: '',
    brand: '',
    category: '',
    serving: '',
    servingSize: '',
    servingsPerContainer: '',
    servingSizeInGrams: false,

    calories: '',
    protein: '',
    carbs: '',
    fat: '',
    satFat: '',
    unsatFat: '',
    fiber: '',
    sugar: '',
    sodium: '',
    cholesterol: '',
    potassium: '',
    sugarAlcohol: '',
  };

  handleChange = event => {
    const { name, type, value } = event.target;

    console.log({ name, type, value });

    const val = type === 'number' ? parseFloat(value) : value;

    this.setState({ [name]: val });
  };

  render() {
    const {
      title,
      description,
      image,
      largeImage,
      brand,
      category,
      serving,
      servingSize,
      servingsPerContainer,
      servingSizeInGrams,
      calories,
      protein,
      carbs,
      fat,
      satFat,
      unsatFat,
      fiber,
      sugar,
      sodium,
      cholesterol,
      potassium,
      sugarAlcohol,
    } = this.state;
    return (
      <>
        <Head>
          <title>Create a new item</title>
        </Head>
        <form>
          <h2>Create food</h2>
          <Input
            name="brand"
            type="text"
            value={brand}
            text="Brand"
            onChange={this.handleChange}
            required
          />
          <Input
            name="title"
            text="Food name"
            type="text"
            value={title}
            onChange={this.handleChange}
            required
          />
          <Input
            name="description"
            text="Description"
            type="text"
            value={description}
            onChange={this.handleChange}
            required
          />
          <Input
            name="category"
            text="Category"
            type="text"
            value={category}
            onChange={this.handleChange}
            required
          />
          {/* <Input
            text="grams (g)"
            type="radio"
            name="servingSizeInGrams"
            checked={servingSizeInGrams}
            onChange={this.handleChange}
          />
          <Input
            name="servingSizeInGrams-ml"
            text="milliliters (ml)"
            type="radio"
            id="servingSizeInGrams-ml"
            checked={!servingSizeInGrams}
            onChange={this.handleChange}
          /> */}
        </form>
      </>
    );
  }
}

export default CreateItem;
