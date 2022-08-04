import { Container } from '@mui/material';
import React from 'react';

import ProductForm from '../components/Products/ProductForm/ProductForm';
import ProductsList from '../components/Products/ProductsList/ProductsList';
import { IProduct } from '../interfaces/IProduct';

import AppBarLayout from 'components/layouts/AppBarLayout';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { addProduct, deleteProduct, updateQuantity } from 'store/slices/productsSlice';

interface IProductsPageProps {}

const ProductsPage = (props: IProductsPageProps) => {
  const products = useAppSelector((state) => state.products.items);
  const dispatch = useAppDispatch();

  return (
    <AppBarLayout>
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
    </AppBarLayout>
  );
};

export default ProductsPage;
