import { Container } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProductForm from '../components/Products/ProductForm/ProductForm';
import ProductsList from '../components/Products/ProductsList/ProductsList';
import { IProduct } from '../interfaces/IProduct';

import { addProduct, deleteProduct, updateQuantity } from 'features/Products/productsSlice';

import type { RootState } from 'store/store';

interface IProductsPageProps {}

const ProductsPage = (props: IProductsPageProps) => {
  const products = useSelector((state: RootState) => state.products.items);
  const dispatch = useDispatch();

  return (
    <Container maxWidth='md' sx={{ marginY: 2 }}>
      <ProductForm handleSubmit={(payload: IProduct) => dispatch(addProduct(payload))} />
      <ProductsList
        listData={products}
        deleteItem={(id: string | number) => dispatch(deleteProduct(id))}
        updateItemQuantity={(id: string | number, value: number) =>
          dispatch(updateQuantity({ id, value }))
        }
      />
    </Container>
  );
};

export default ProductsPage;
