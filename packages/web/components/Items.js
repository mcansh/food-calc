import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import styled from 'styled-components';
import Item from './Item';

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    items {
      id
      title
      description
      image
      largeImage
      brand
      category
      serving
      servingSize
      servingsPerContainer
      servingSizeInGrams

      calories
      protein
      carbs
      fat
      satFat
      unsatFat
      fiber
      sugar
      sodium
      cholesterol
      potassium
      sugarAlcohol
    }
  }
`;

const ItemsContainer = styled.div`
  margin: 5rem auto 0;
  max-width: 1000px;
  height: 100%;
`;

const Center = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Items = () => (
  <Query query={ALL_ITEMS_QUERY}>
    {({ loading, data, error }) => {
      if (loading) return <Center>Loading!!!!</Center>;
      if (error) return <Center>Error: {error.message}</Center>;

      const { items } = data;

      return (
        <ItemsContainer>
          {items.map(item => (
            <Item item={item} key={item.id} />
          ))}
        </ItemsContainer>
      );
    }}
  </Query>
);

export default Items;
