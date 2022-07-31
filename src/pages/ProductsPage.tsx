import { Container } from '@mui/material';
import React from 'react';

import ProductForm from '../components/ProductForm/ProductForm';
import ProductsList from '../components/ProductsList/ProductsList';

interface ProductsPageProps {}

const ProductsPage = (props: ProductsPageProps) => {
  return (
    <Container>
      <ProductForm />
      <ProductsList />
    </Container>
  );
};

export default ProductsPage;
